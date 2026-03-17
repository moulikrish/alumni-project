import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";
import "./analytics.css"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Analytics(){

  const [data,setData] = useState({
    totalUsers:0,
    totalStudents:0,
    totalAlumni:0,
    totalStaff:0,
    totalEvents:0
  });

  const [chartData,setChartData] = useState([]);

  useEffect(()=>{

    axios.get("https://alumni-project-8aoi.onrender.com/admin/analytics")
    .then(res=>{

      setData(res.data);

      const chart = [

        {name:"Students",value:res.data.totalStudents},
        {name:"Alumni",value:res.data.totalAlumni},
        {name:"Staff",value:res.data.totalStaff},
        {name:"Events",value:res.data.totalEvents}

      ];

      setChartData(chart);

    });

  },[]);

  return(

    <DashboardLayout role="admin">

      <h2>Analytics</h2>

      {/* STAT CARDS */}

      <div className="cards">

        <div className="card">
          <h3>Total Users</h3>
          <p>{data.totalUsers}</p>
        </div>

        <div className="card">
          <h3>Students</h3>
          <p>{data.totalStudents}</p>
        </div>

        <div className="card">
          <h3>Alumni</h3>
          <p>{data.totalAlumni}</p>
        </div>

        <div className="card">
          <h3>Staff</h3>
          <p>{data.totalStaff}</p>
        </div>

        <div className="card">
          <h3>Events</h3>
          <p>{data.totalEvents}</p>
        </div>

      </div>


      {/* CHART */}

      <h3 style={{marginTop:"30px"}}>User Distribution</h3>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={chartData}>

          <XAxis dataKey="name"/>
          <YAxis/>

          <Tooltip/>

          <Bar dataKey="value" fill="#002b6b"/>

        </BarChart>

      </ResponsiveContainer>

    </DashboardLayout>

  );

}

export default Analytics;