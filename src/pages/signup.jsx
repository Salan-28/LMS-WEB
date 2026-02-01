import { Mail, Lock, User, Users } from "lucide-react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Sign up</h1>

        <div className="space-y-4">
          <Input icon={<User />} placeholder="Enter your name" />
          <Input icon={<Mail />} placeholder="Enter your email" />
          <Input icon={<Lock />} type="password" placeholder="Create a password" />

          <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
            <Users className="text-gray-400" />
            <select className="w-full outline-none">
              <option>Select role</option>
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-xl">
          <Link to="/login">
          Sign up
          </Link>
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account? 
          <Link to="/login" className="text-blue-600 hover:underline">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
}
