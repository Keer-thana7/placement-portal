import { Routes, Route } from "react-router-dom";
import CompanyListPage from "./pages/CompanyListPage";
import CompanyRoundsPage from "./pages/CompanyRoundsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CompanyListPage />} />
      <Route path="/company/:name" element={<CompanyRoundsPage />} />
    </Routes>
  );
}
