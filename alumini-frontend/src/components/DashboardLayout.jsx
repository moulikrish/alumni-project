import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./dashboard.css"

function DashboardLayout({ children, role }) {
  return (
    <div style={{ display: "flex", marginTop:"50px"}}>
      <Sidebar role={role}/>

      <div style={{ flex: 1 }}>
        {/* <Topbar /> */}

        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
