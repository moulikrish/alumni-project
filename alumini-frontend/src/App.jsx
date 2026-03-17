import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurInstitutions from "./pages/OurInstitutions";
import About from "./pages/About";

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

// STUDENT PAGES
import StudentDashboard from "./pages/dashboards/student/StudentDashboard";
import StudentEvents from "./pages/dashboards/student/StudentEvents";
import StudentJobs from "./pages/dashboards/student/StudentJobs";
import Mentorship from "./pages/dashboards/student/Mentorship";
import StudentProfile from "./pages/dashboards/student/StudentProfile"
import ViewAlumni from "./pages/dashboards/student/ViewAlumni"

// ALUMNI PAGES
import AlumniDashboard from "./pages/dashboards/alumni/AlumniDashboard";
import Donate from "./pages/dashboards/alumni/Donate"
import MentorStudents from "./pages/dashboards/alumni/MentorStudents"
import PostJobs from "./pages/dashboards/alumni/PostJobs"
import PostEvents from "./pages/dashboards/alumni/PostEvents";
import AlumniProfile from "./pages/dashboards/alumni/AlumniProfile"
import ViewStudents from "./pages/dashboards/alumni/ViewStudents"

// STAFF PAGES
import StaffDashboard from "./pages/dashboards/staff/StaffDashboard";
import ApproveAlumnis from "./pages/dashboards/staff/ApproveAlumnis"
import ManageStudents from "./pages/dashboards/staff/ManageStudents";
import ManageEventsStaff from "./pages/dashboards/staff/ManageEventsStaff";
import ManageJobs from "./pages/dashboards/staff/ManageJobs";

// ADMIN PAGES
import AdminDashboard from "./pages/dashboards/admin/AdminDashboard";
import ManageUsers from "./pages/dashboards/admin/ManageUsers";
import ManageEvents from "./pages/dashboards/admin/ManageEvents";
import ApproveAlumni from "./pages/dashboards/admin/ApproveAlumni";
import Analytics from "./pages/dashboards/admin/Analytics";
import ViewDonations from "./pages/dashboards/admin/ViewDonations";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* PUBLIC PAGES */}

        <Route path="/" element={<Home />} />
        <Route path="/institutions" element={<OurInstitutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* ADMIN DASHBOARD */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-users"
          element={
            <ProtectedRoute allowedRole="admin">
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-events"
          element={
            <ProtectedRoute allowedRole="admin">
              <ManageEvents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/donations"
          element={
            <ProtectedRoute allowedRole="admin">
              <ViewDonations />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/approve-alumni"
          element={
            <ProtectedRoute allowedRole="admin">
              <ApproveAlumni />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute allowedRole="admin">
              <Analytics />
            </ProtectedRoute>
          }
        />


        {/* STUDENT DASHBOARD */}

        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/events"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentEvents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/jobs"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/request-mentor"
          element={
            <ProtectedRoute allowedRole="student">
              <Mentorship />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/update-profile"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/alumni"
          element={
            <ProtectedRoute allowedRole="student">
              <ViewAlumni />
            </ProtectedRoute>
          }
        />

        {/* ALUMNI DASHBOARD */}

        <Route
          path="/alumni-dashboard"
          element={
            <ProtectedRoute allowedRole="alumni">
              <AlumniDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alumni/donate"
          element={
            <ProtectedRoute allowedRole="alumni">
              <Donate />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alumni/mentorship"
          element={
            <ProtectedRoute allowedRole="alumni">
              <MentorStudents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alumni/jobs"
          element={
            <ProtectedRoute allowedRole="alumni">
              <PostJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alumni/events"
          element={
            <ProtectedRoute allowedRole="alumni">
              <PostEvents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alumni/profile"
          element={
            <ProtectedRoute allowedRole="alumni">
              <AlumniProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alumni/view-students"
          element={
            <ProtectedRoute allowedRole="alumni">
              <ViewStudents />
            </ProtectedRoute>
          }
        />

        {/* STAFF DASHBOARD */}

        <Route
          path="/staff-dashboard"
          element={
            <ProtectedRoute allowedRole="staff">
              <StaffDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/approve-alumni"
          element={
            <ProtectedRoute allowedRole="staff">
              <ApproveAlumnis/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/manage-events"
          element={
            <ProtectedRoute allowedRole="staff">
              <ManageEventsStaff/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/manage-jobs"
          element={
            <ProtectedRoute allowedRole="staff">
              <ManageJobs/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/manage-students"
          element={
            <ProtectedRoute allowedRole="staff">
              <ManageStudents/>
            </ProtectedRoute>
          }
        />


      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;