"use client";

import { Fragment, useState } from "react";

const ResumeUploadPage = () => {
  const [informations, setInformations] = useState([
    {
      firstName: "Nathan",
      lastName: "Boonkert",
      email: "nathan@example.com",
      phone: "0812345678",
      title: "YaiYai",
      description:
        "Homelesssfalgnhlsodah;v/zv;aje;glixvliahsdihf'/J;ojdafp'd;ishf;asbv/savh;ilsdagviyhaslcjaslgfkygsajhkckashyasdhvkasjc",
    },
    {
      firstName: "Chopper",
      lastName: "Pakorn",
      email: "chopper@example.com",
      phone: "0812345678",
      title: "Dev",
      description: "Front-End Developer",
    },
    {
      firstName: "Yai",
      lastName: "Mak",
      email: "yai@example.com",
      phone: "0812345678",
      title: "Designer",
      description: "Graphic Designer",
    },
  ]);

  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: string;
  }>({
    key: null,
    direction: "asc",
  });
  const [searchField, setSearchField] = useState("title");
  const [searchValue, setSearchValue] = useState("");
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  // Sorting function
  const sortBy = (key: string) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";

    const sortedData = [...informations].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setInformations(sortedData);
  };

  // Filter by selected field
  const filteredData = searchValue
    ? informations.filter((info) =>
        info[searchField].toLowerCase().includes(searchValue.toLowerCase())
      )
    : informations;

  // Toggle show/hide details
  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F2]">
      {/* Header */}
      <div className="flex h-[50px]" />

      {/* Subtitle */}
      <div className="flex flex-col justify-center items-center font-[300] text-center px-6 pt-[30px] md:pt-[40px] text-[18px] md:text-[24px] leading-[85%] tracking-[-2.5%] opacity-80">
        การติดต่อทั้งหมด
      </div>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6 px-4">
        <select
          className="border rounded px-4 py-2 w-full md:w-48"
          value={searchField}
          onChange={(e) => {
            setSearchField(e.target.value);
            setSearchValue("");
          }}
        >
          <option value="title">Title</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
        </select>

        <input
          type="text"
          placeholder={`Search ${
            searchField === "firstName"
              ? "First Name"
              : searchField === "lastName"
              ? "Last Name"
              : "Title"
          }`}
          className="border rounded px-4 py-2 w-full md:w-64"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="flex flex-col px-4 mt-6 mb-10">
        <div className="overflow-x-auto shadow-[0px_4px_20px_0px_#00000040] rounded-lg bg-white">
          <table className="min-w-full border-none bg-white rounded-[10px]">
            <thead className="bg-gray-100">
              <tr>
                {["firstName", "lastName", "title"].map((col) => (
                  <th
                    key={col}
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() => sortBy(col)}
                  >
                    {col === "firstName"
                      ? "First Name"
                      : col === "lastName"
                      ? "Last Name"
                      : "Title"}{" "}
                    {sortConfig.key === col
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                ))}
                <th className="py-3 px-6 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((info, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }  transition-all`}
                >
                  <td className="py-3 px-6 align-top">
                    <div className="flex flex-col">
                      <span>{info.firstName}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 align-top">
                    <div className="flex flex-col">
                      <span>{info.lastName}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 align-top">
                    <div className="flex flex-col">
                      <span>{info.title}</span>
                      {/* รายละเอียดเพิ่มเติม */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedRows.includes(index)
                            ? "mt-2 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="max-w-80 overflow-y-auto whitespace-normal break-words pr-2">
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-semibold">Description:</span>{" "}
                            {info.description}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Email:</span>{" "}
                            {info.email}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Phone:</span>{" "}
                            {info.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 align-top">
                    <button
                      onClick={() => toggleRow(index)}
                      className="w-18 text-blue-500 underline hover:text-blue-700 transition"
                    >
                      {expandedRows.includes(index) ? "ซ่อน" : "ดูเพิ่มเติม"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadPage;
