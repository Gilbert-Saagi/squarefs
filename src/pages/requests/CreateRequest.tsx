import { useState } from "react";

export default function CreateRequest() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    alert("Request submitted (mock)");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Request</h1>

      <input
        placeholder="Title"
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}