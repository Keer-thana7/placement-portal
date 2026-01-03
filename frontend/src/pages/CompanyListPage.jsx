import React from "react";
import { useNavigate } from "react-router-dom";

const companies = [
  { id: 1, name: "Google", role: "SDE", salary: "12 LPA", location: "Bangalore" },
  { id: 2, name: "Microsoft", role: "SDE 1", salary: "14 LPA", location: "Hyderabad" },
  { id: 3, name: "Amazon", role: "Software Eng", salary: "10 LPA", location: "Chennai" },
];

const CompanyListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-blue-100 p-10"> {/* 👈 Background covers whole page */}

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center underline underline-offset-8 decoration-blue-600">
        Company Listings
      </h1>

      {/* CENTER TABLE */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-6 border border-gray-200 transition hover:shadow-3xl duration-300">

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 font-semibold text-gray-700">Company</th>
                <th className="p-4 font-semibold text-gray-700">Role</th>
                <th className="p-4 font-semibold text-gray-700">Salary</th>
                <th className="p-4 font-semibold text-gray-700">Location</th>
                <th className="p-4 font-semibold text-gray-700 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {companies.map((company) => (
                <tr
                  key={company.id}
                  className="border-b hover:bg-blue-50 hover:shadow transition cursor-pointer"
                >
                  <td className="p-4">{company.name}</td>
                  <td className="p-4">{company.role}</td>
                  <td className="p-4">{company.salary}</td>
                  <td className="p-4">{company.location}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => navigate(`/company/${company.id}`)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition"
                    >
                      View
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

export default CompanyListPage;
