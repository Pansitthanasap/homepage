"use client";

import { useState } from "react";

const ResumeUploadPage = () => {
  const [informations, setInformations] = useState([
    {
      firstName: "Nathan",
      lastName: "Boonkert",
      email: "nathan@example.com",
      phone: "0812345678",
      jobTitle: "Engineer",
      file: null,
    },
    {
      firstName: "Chopper",
      lastName: "Pakorn",
      email: "chopper@example.com",
      phone: "0812345678",
      jobTitle: "Housemaid",
      file: "resume.pdf",
    },
    {
      firstName: "Yai",
      lastName: "Mak",
      email: "yai@example.com",
      phone: "0812345678",
      jobTitle: "Homeless",
      file: null,
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchField, setSearchField] = useState("jobTitle"); // default jobTitle
  const [searchValue, setSearchValue] = useState("");

  // Sorting function
  const sortBy = (key) => {
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

  // Filtered data: only one field at a time
  const filteredData = searchValue
    ? informations.filter((info) =>
        info[searchField].toLowerCase().includes(searchValue.toLowerCase())
      )
    : informations;

  // Unique job titles for autocomplete
  const jobTitleOptions = [...new Set(informations.map((i) => i.jobTitle))];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F2]">
      {/* Header */}
      <div className="flex h-[50px]"></div>

      {/* Subtitle */}
      <div className="flex flex-col justify-center items-center font-[300] text-center px-6 pt-[30px] md:pt-[40px] text-[18px] md:text-[24px] leading-[85%] tracking-[-2.5%] opacity-80">
        ข้อมูลผู้สมัครงานทั้งหมด
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6 px-4">
        <select
          className="border rounded px-4 py-2 w-full md:w-48"
          value={searchField}
          onChange={(e) => {
            setSearchField(e.target.value);
            setSearchValue(""); // clear input when changing field
          }}
        >
          <option value="jobTitle">Job Title</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
        </select>

        {searchField === "jobTitle" ? (
          <input
            type="text"
            list="jobTitles"
            placeholder="Search Job Title"
            className="border rounded px-4 py-2 w-full md:w-64"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        ) : (
          <input
            type="text"
            placeholder={`Search ${
              searchField === "firstName" ? "First Name" : "Last Name"
            }`}
            className="border rounded px-4 py-2 w-full md:w-64"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}

        {searchField === "jobTitle" && (
          <datalist id="jobTitles">
            {jobTitleOptions.map((title, index) => (
              <option key={index} value={title} />
            ))}
          </datalist>
        )}
      </div>

      {/* Table */}
      <div className="flex flex-col min-h-screen px-4 mt-6">
        <div className="overflow-x-auto shadow-[0px_4px_20px_0px_#00000040] rounded-lg bg-white">
          <table className="min-w-full border-none bg-white rounded-[10px]">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "firstName",
                  "lastName",
                  "jobTitle",
                  "email",
                  "phone",
                  "file",
                ].map((col) => (
                  <th
                    key={col}
                    className="py-3 px-6 text-left cursor-pointer"
                    onClick={() =>
                      ["firstName", "lastName", "jobTitle"].includes(col) &&
                      sortBy(col)
                    }
                  >
                    {col === "firstName"
                      ? "First Name"
                      : col === "lastName"
                      ? "Last Name"
                      : col === "jobTitle"
                      ? "Job Title"
                      : col === "email"
                      ? "Email"
                      : col === "phone"
                      ? "Phone"
                      : "File"}{" "}
                    {sortConfig.key === col
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((info, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-3 px-6">{info.firstName}</td>
                  <td className="py-3 px-6">{info.lastName}</td>
                  <td className="py-3 px-6">{info.jobTitle}</td>
                  <td className="py-3 px-6">{info.email}</td>
                  <td className="py-3 px-6">{info.phone}</td>
                  <td className="py-3 px-6">
                    {info.file ? info.file : "Not Found"}
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
