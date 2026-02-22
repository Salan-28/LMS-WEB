import React, { useState } from 'react';

const CreateCourse = () => {
  const [courses, setCourses] = useState([]);

  return (
    <div className="flex min-h-screen font-sans bg-[#f3f4f6]">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-[#0015ff] text-white flex flex-col p-6 space-y-8">
        <div className="text-xl font-bold mb-4 flex items-center gap-2">
           Dashboard
        </div>
        <nav className="flex flex-col space-y-6 opacity-90">
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="font-bold underline">Courses</a>
          <a href="#" className="hover:underline">Manage Uploads</a>
          <a href="#" className="hover:underline">Profile</a>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Course</h1>

        {/* CREATE COURSE FORM CARD */}
        <section className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-gray-700">New Course</h2>
          
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Course Title" 
              className="w-full p-3 bg-[#e5e7eb] rounded-lg border-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
            
            <input 
              type="text" 
              placeholder="Course Code (e.g. CS301)" 
              className="w-full p-3 bg-[#e5e7eb] rounded-lg border-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
            
            <textarea 
              placeholder="Course Description" 
              rows="5"
              className="w-full p-3 bg-[#e5e7eb] rounded-lg border-none focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />

            <button className="mt-4 bg-[#0015ff] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Create Course
            </button>
          </div>
        </section>

        {/* MY COURSES SECTION */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-700 mb-4">My Courses</h2>
          <div className="text-gray-500 italic">
            No courses created yet
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreateCourse;