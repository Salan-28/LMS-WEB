// import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import CreateCourse from "./pages/createcourse";
import ManageCourse from "./pages/managecourse";
import Profile from "./pages/profile";
import Downloads from "./pages/downloads";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<CreateCourse />} />
          <Route path="/manage-course" element={<ManageCourse />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}