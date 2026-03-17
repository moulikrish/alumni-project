import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function StudentEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/events")
      .then((res) => setEvents(res.data));
  }, []);

  return (
    <DashboardLayout role="student">
      <div className="container mt-4">
        <h2 className="text-center mb-5">Upcoming Events</h2>

        <div className="row">
          {events.map((e) => (
            <div className="col-md-4 mb-4" key={e.id}>
              <div className="card shadow p-3">
                <h4><b>{e.title}</b></h4>

                <p className="mt-2">Date : {e.date}</p>

                <p>Time : {e.time}</p>

                <p>Venue : {e.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StudentEvents;
