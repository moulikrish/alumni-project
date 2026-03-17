import { Link } from "react-router-dom";

function Sidebar({ role }) {

  const menus = {

    admin: [
      { name: "Home", path: "/admin-dashboard" },
      { name: "Manage Users", path: "/admin/manage-users" },
      { name: "Manage Events", path: "/admin/manage-events" },
      { name: "View Donations", path: "/admin/donations" },
      { name: "Approve Alumni", path: "/admin/approve-alumni" },
      { name: "Analytics", path: "/admin/analytics" }
    ],

    alumni: [
      { name: "Home", path: "/alumni-dashboard" },
      { name: "Donate", path: "/alumni/donate" },
      { name: "Mentored Students", path: "/alumni/mentorship" },
      { name: "Post Jobs", path: "/alumni/jobs" },
      { name: "Post Events", path: "/alumni/events" },
      { name: "Update Profile", path: "/alumni/profile" },
      { name: "View Students", path: "/alumni/view-students" },
      
    ],

    staff: [
      { name: "Home", path: "/staff-dashboard" },
      { name: "Approve Alumni", path: "/staff/approve-alumni" },
      { name: "Manage Events", path: "/staff/manage-events" },
      { name: "Manage Jobs", path: "/staff/manage-jobs" },
      { name: "Manage Students", path: "/staff/manage-students" }
    ],

    student: [
      { name: "Home", path: "/student-dashboard" },
      { name: "Attend Events", path: "/student/events" },
      { name: "Jobs", path: "/student/jobs" },
      { name: "Request Mentorship", path: "/student/request-mentor" },
      { name: "Update Profile", path: "/student/update-profile" },
      { name: "View Alumni", path: "/student/alumni" }
    ]

  };

  return (

    <div
      style={{
        width: "230px",
        height: "100%",
        background: "#002b6b",
        color: "white",
        padding: "20px",
        // marginTop: "100px",
        // marginLeft:"10px",
        marginBottom:"60px",
        borderRadius:"0px 0px 25px"
      }}
    >

      <h3 style={{ color: "#fdb813" }}>Dashboard</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>

        {menus[role]?.map((item, index) => (

          <li key={index} style={{ margin: "15px 0" }}>

            <Link
              to={item.path}
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              {item.name}
            </Link>

          </li>

        ))}

      </ul>

    </div>

  );
}

export default Sidebar;