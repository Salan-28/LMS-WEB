import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A3F] via-red-600 to-yellow-400 flex flex-col items-center justify-center p-6 text-center">
      {/* Blue Decorative Badge */}
      <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm text-blue-700 mb-8 border border-blue-200">
        <GraduationCap size={18} />
        <span className="text-sm font-semibold uppercase tracking-widest">
          LMS Portal
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
        Master Your Studies <br />
        <span className="text-yellow-300">All in One Place</span>
      </h1>

      <p className="text-white/90 text-lg mb-10 max-w-lg">
        The most efficient way to manage your university courses, notes, and
        progress. Ready to excel in your journey?
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/signup"
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3 rounded-lg font-bold transition-all shadow-lg"
        >
          Get Started <ArrowRight size={20} />
        </Link>
        <Link
          to="/login"
          className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-bold transition-all"
        >
          Sign In
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-white/80">
        <div className="flex flex-col items-center">
    
        </div>
      </div>
    </div>
  );
}
