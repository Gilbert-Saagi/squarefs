import { useNavigate } from "react-router-dom";

export default function MPDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">MP Dashboard</h1>

      <div className="mt-4 space-x-2">
        <button
          onClick={() => navigate("/requests")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Requests
        </button>

        <button
          onClick={() => navigate("/create")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Create Request
        </button>
      </div>
    </div>
  );
}