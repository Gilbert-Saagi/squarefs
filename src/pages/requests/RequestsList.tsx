import { mockRequests } from "../../utils/mockData";

export default function RequestsList() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Requests</h1>

      {mockRequests.map((req) => (
        <div
          key={req.id}
          className="border p-4 mb-2 rounded shadow-sm"
        >
          <h2 className="font-semibold">{req.title}</h2>
          <p>{req.description}</p>
          <span className="text-sm text-gray-500">
            {req.category} - {req.status}
          </span>
        </div>
      ))}
    </div>
  );
}