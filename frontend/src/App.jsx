// frontend/src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";   // your page
// import HomePage from "./pages/HomePage";     // sujitha page
// import CompanyList from "./pages/CompanyListPage"; // shipani page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        {/* <Route path="/companies" element={<CompanyList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
