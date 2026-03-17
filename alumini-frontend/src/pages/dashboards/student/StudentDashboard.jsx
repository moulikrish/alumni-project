import DashboardLayout from "../../../components/DashboardLayout";

function StudentDashboard() {
  return (
    <DashboardLayout role="student">
      <div className="container mt-4">
        <h2 className="text-center mb-4">Student Dashboard</h2>

        <div className="row d-flex justify-content-center">
          <div className="col-md-3 mb-4">
            <div className="card shadow text-center p-4">
              <h4>Mentors</h4>

              <p>Connect with Alumni Mentors</p>

              <a href="/student/request-mentor" className="btn btn-primary">
                View Mentors
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow text-center p-4">
              <h4>Jobs</h4>

              <p>View Alumni Job Opportunities</p>

              <a href="/student/jobs" className="btn btn-success">
                View Jobs
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow text-center p-4">
              <h4>Events</h4>

              <p>Upcoming College Events</p>

              <a href="/student/events" className="btn btn-warning">
                View Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;
