import { useNavigate } from "react-router-dom";

export default function CitizenDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Citizen Dashboard</h1>

      <button
        onClick={() => navigate("/create")}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
      >
        Report Issue
      </button>
    </div>
  );
}