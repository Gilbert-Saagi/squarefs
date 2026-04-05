import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import MPDashboard from "../pages/dashboard/MPDashboard";
import OfficerDashboard from "../pages/dashboard/OfficerDashboard";
import CitizenDashboard from "../pages/dashboard/CitizenDashboard";
import RequestsList from "../pages/requests/RequestsList";
import CreateRequest from "../pages/requests/CreateRequest";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mp" element={<MPDashboard />} />
        <Route path="/officer" element={<OfficerDashboard />} />
        <Route path="/citizen" element={<CitizenDashboard />} />
        <Route path="/requests" element={<RequestsList />} />
        <Route path="/create" element={<CreateRequest />} />
      </Routes>
    </BrowserRouter>
  );
}