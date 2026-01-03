import React from "react";
import logo from "../assets/logo.jpg"; // adjust path if needed

function Homepage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-10 overflow-auto">
        {/* Centered Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Welcome to Placement Portal
        </h1>

        {/* Centered Very Small Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-5 w-5 object-contain mb-8"
        />

        {/* Content Section */}
        <section className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <p className="text-gray-700 leading-relaxed">
            This is the main content area. You can put college updates,
            question papers, or other content here. Everything is neatly
            aligned and spaced for a clean professional look.
          </p>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-64 flex flex-col items-center p-8">
        {/* Boxed Navigation Links */}
        <div className="w-full bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <ul className="space-y-6 text-2xl font-bold text-center">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 rounded hover:bg-blue-500 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 rounded hover:bg-blue-500 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="block py-2 px-3 rounded hover:bg-blue-500 transition"
              >
                Company List
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="block py-2 px-3 rounded hover:bg-blue-500 transition"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className="block py-2 px-3 rounded hover:bg-blue-500 transition"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Homepage;
