import React from "react";
import { useParams } from "react-router-dom";

export default function CompanyRoundsPage() {
  const { name } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-gray-800">
        {name} – Interview Rounds
      </h1>

      <p className="text-gray-600 mt-3 text-lg">
        Here you can show HR questions, coding round questions, aptitude round, and previous papers.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">HR Round</h2>
          <p className="text-gray-600">Click to see HR interview questions.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Technical / Coding Round</h2>
          <p className="text-gray-600">Click to see coding interview questions.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Aptitude Round</h2>
          <p className="text-gray-600">Click to see aptitude questions.</p>
        </div>

      </div>
    </div>
  );
}
