import { useNavigate } from "react-router-dom";

function Topbar(){

  const navigate = useNavigate();

  const handleLogout = ()=>{

    localStorage.clear();

    navigate("/login");

    window.location.reload();

  };

  return(

    <div style={{
      height:"70px",
      background:"#fdb813",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      padding:"0 30px",
      // marginTop:"80px",
      marginRight:"20px",
      marginLeft:"20px",
      borderRadius:"20px"
    }}>

      <h3>Alumni Portal</h3>

      <button
      onClick={handleLogout}
      style={{
        backgroundColor:"white",
        color:"#ce9818",
        padding:"8px 15px",
        border:"none",
        borderRadius:"6px",
        cursor:"pointer"
      }}
      >
        Logout
      </button>

    </div>

  );

}

export default Topbar;
