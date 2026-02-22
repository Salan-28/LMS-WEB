import React from "react";

export default function ManageCourse() {
  const courses = [
    { id: 1, title: "Intro to React", students: 42 },
    { id: 2, title: "Advanced JavaScript", students: 28 },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((c) => (
              <tr key={c.id}>
                <td className="px-6 py-4 whitespace-nowrap">{c.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{c.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{c.students}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="mr-2 px-3 py-1 bg-blue-600 text-white rounded">Edit</button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
