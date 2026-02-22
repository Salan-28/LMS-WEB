import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, Upload, Download, User } from "lucide-react";

export default function Sidebar({ role }) {
  const getLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-blue-600 shadow-md" : "hover:bg-blue-600/50"
    }`;

  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-5 shadow-xl">
      <h1 className="text-2xl font-bold mb-10 tracking-tight">LMS</h1>

      <ul className="space-y-3">
        <li>
          <NavLink to="/home" className={getLinkClass}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/course" className={getLinkClass}>
            <BookOpen size={18} />
            My Courses
          </NavLink>
        </li>

        {/* Teacher only */}
        {role === "teacher" && (
          <li>
            <NavLink to="/manage-course" className={getLinkClass}>
              <Upload size={18} />
              Manage Courses
            </NavLink>
          </li>
        )}

        {/* Student only */}
        {role === "student" && (
          <li>
            <NavLink to="/downloads" className={getLinkClass}>
              <Download size={18} />
              Downloads
            </NavLink>
          </li>
        )}

        <li>
          <NavLink to="/profile" className={getLinkClass}>
            <User size={18} />
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}