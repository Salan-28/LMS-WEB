import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Downloads() {
  const { user } = useAuth();
  const [query, setQuery] = useState("");

  const files = useMemo(
    () => [
      { id: 1, title: "Lecture 1 Notes.pdf", size: "1.2MB" },
      { id: 2, title: "Chapter 2 Slides.pptx", size: "3.5MB" },
      { id: 3, title: "Assignment 3.docx", size: "120KB" },
      { id: 4, title: "Video Lesson.mp4", size: "25MB" },
    ],
    []
  );

  const filtered = files.filter((f) => f.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Downloads</h1>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search files..."
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="grid gap-4">
        {filtered.length === 0 && (
          <div className="p-4 bg-yellow-50 rounded">No files match your search.</div>
        )}

        {filtered.map((f) => (
          <div key={f.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div>
              <div className="font-medium">{f.title}</div>
              <div className="text-sm text-gray-500">{f.size}</div>
            </div>

            <div className="flex items-center gap-2">
              <a href="#" onClick={(e) => e.preventDefault()} className="px-3 py-1 bg-blue-600 text-white rounded">
                Download
              </a>
              <button className="px-3 py-1 border rounded">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
