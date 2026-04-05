import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 shadow rounded w-80">
        <h2 className="text-xl font-bold mb-4">SquareFs Login</h2>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded mb-2"
          onClick={() => navigate("/mp")}
        >
          Login as MP
        </button>

        <button
          className="w-full bg-green-600 text-white py-2 rounded mb-2"
          onClick={() => navigate("/officer")}
        >
          Login as Officer
        </button>

        <button
          className="w-full bg-gray-800 text-white py-2 rounded"
          onClick={() => navigate("/citizen")}
        >
          Login as Citizen
        </button>
      </div>
    </div>
  );
}