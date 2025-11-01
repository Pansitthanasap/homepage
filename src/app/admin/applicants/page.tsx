"use client";

import { useEffect, useState } from "react";

interface ApplicantInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  fileName: string;
  fileUrl: string;
}

const ResumeUploadPage = () => {
  const [informations, setInformations] = useState<ApplicantInfo[]>([]);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof ApplicantInfo | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const [searchField, setSearchField] =
    useState<keyof ApplicantInfo>("jobTitle");
  const [searchValue, setSearchValue] = useState<string>("");

  const sortBy = (key: keyof ApplicantInfo) => {
    let direction: "asc" | "desc" = "asc";
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

  const filteredData = searchValue
    ? informations.filter((info) =>
        info[searchField].toLowerCase().includes(searchValue.toLowerCase())
      )
    : informations;

  const jobTitleOptions = [...new Set(informations.map((i) => i.jobTitle))];

  useEffect(() => {
    fetch("/api/applicants")
      .then((res) => res.json())
      .then((data) => setInformations(data));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F2] text-black">
      {/* Header */}
      <div className="flex h-[50px]"></div>

      {/* Subtitle */}
      <div className="flex flex-col justify-center items-center font-light text-center px-6 pt-[30px] md:pt-10 text-[18px] md:text-[24px] leading-[85%] tracking-[-2.5%] opacity-80">
        ข้อมูลผู้สมัครงานทั้งหมด
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6 px-4 text-black">
        <select
          title="Search Field"
          className="border rounded px-4 py-2 w-full md:w-48 text-black"
          value={searchField}
          onChange={(e) => {
            setSearchField(e.target.value as keyof ApplicantInfo);
            setSearchValue("");
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
            className="border rounded px-4 py-2 w-full md:w-64 text-black placeholder-gray-500"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        ) : (
          <input
            type="text"
            placeholder={`Search ${
              searchField === "firstName" ? "First Name" : "Last Name"
            }`}
            className="border rounded px-4 py-2 w-full md:w-64 text-black placeholder-gray-500"
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
      <div className="flex flex-col min-h-screen px-4 mt-6 text-black">
        <div className="overflow-x-auto shadow-[0px_4px_20px_0px_#00000040] rounded-lg bg-white">
          <table className="min-w-full border-none bg-white rounded-[10px] text-black">
            <thead className="bg-gray-100 text-black">
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
                    className="py-3 px-6 text-left cursor-pointer text-black"
                    onClick={() =>
                      ["firstName", "lastName", "jobTitle"].includes(col) &&
                      sortBy(col as keyof ApplicantInfo)
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
            <tbody className="text-black">
              {filteredData.map((info, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } text-black`}
                >
                  <td className="py-3 px-6">{info.firstName}</td>
                  <td className="py-3 px-6">{info.lastName}</td>
                  <td className="py-3 px-6">{info.jobTitle}</td>
                  <td className="py-3 px-6">{info.email}</td>
                  <td className="py-3 px-6">{info.phone}</td>
                  <td className="py-3 px-6">
                    {info.fileUrl ? (
                      <a
                        href={info.fileUrl}
                        download={info.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {info.fileName}
                      </a>
                    ) : (
                      <span className="text-gray-400">No file</span>
                    )}
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
