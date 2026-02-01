import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
// import { BookOpen, FileText, Download, Bell } from "lucide-react";
import { LayoutDashboard, BookOpen, UploadCloud, User } from "lucide-react";

export default function createcourse() {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-700 to-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">My LMS</h1>

        <nav className="space-y-6">
          <div className="flex items-center gap-3 opacity-90 hover:opacity-100 cursor-pointer">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 font-semibold cursor-pointer">
            <BookOpen size={20} />
            <span>Courses</span>
          </div>

          <div className="flex items-center gap-3 opacity-90 hover:opacity-100 cursor-pointer">
            <UploadCloud size={20} />
            <span>Uploads</span>
          </div>

          <div className="flex items-center gap-3 opacity-90 hover:opacity-100 cursor-pointer">
            <User size={20} />
            <span>Profile</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Create a New Course</h2>
        <p className="text-slate-500 mb-8">
          Fill in the details below to add a new course to the system.
        </p>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Course Title
              </label>
              <input
                type="text"
                placeholder="e.g. Data Structures"
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Course Code
              </label>
              <input
                type="text"
                placeholder="e.g. CS301"
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Brief description of the course"
                className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition">
              Create Course
            </button>
          </div>
        </div>

        {/* Course List */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">My Courses</h3>
          <p className="text-slate-500">You haven’t created any courses yet.</p>
        </div>
      </main>
    </div>
  );
}
