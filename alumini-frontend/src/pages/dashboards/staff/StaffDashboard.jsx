import DashboardLayout from "../../../components/DashboardLayout";
import { Link } from "react-router-dom";

function StaffDashboard(){

  return(

    <DashboardLayout role="staff">

      <div className="container">

        <h2 className="text-center mb-5">Staff Dashboard</h2>

        <div className="row justify-content-center">

          {/* Students */}

          <div className="col-md-3 mb-4">

            <Link to="/staff/students" className="text-decoration-none">

              <div className="card shadow text-center h-100">

                <div className="card-body">

                  <h4 className="card-title">Students</h4>

                  <p className="card-text">
                    Manage student information
                  </p>

                </div>

              </div>

            </Link>

          </div>


          {/* Alumni */}

          {/* <div className="col-md-4 mb-4">

            <Link to="/staff/alumni" className="text-decoration-none">

              <div className="card shadow text-center h-100">

                <div className="card-body">

                  <h4 className="card-title">Alumni</h4>

                  <p className="card-text">
                    View alumni details
                  </p>

                </div>

              </div>

            </Link>

          </div> */}


          {/* Job Posts */}

          <div className="col-md-3 mb-4">

            <Link to="/staff/jobs" className="text-decoration-none">

              <div className="card shadow text-center h-100">

                <div className="card-body">

                  <h4 className="card-title">Job Posts</h4>

                  <p className="card-text">
                    View alumni job postings
                  </p>

                </div>

              </div>

            </Link>

          </div>


          {/* Mentors */}

          <div className="col-md-3 mb-4">

            <Link to="/staff/mentors" className="text-decoration-none">

              <div className="card shadow text-center h-100">

                <div className="card-body">

                  <h4 className="card-title">Mentors</h4>

                  <p className="card-text">
                    View mentor registrations
                  </p>

                </div>

              </div>

            </Link>

          </div>


          {/* Donations */}

          <div className="col-md-3 mb-4">

            <Link to="/staff/donations" className="text-decoration-none">

              <div className="card shadow text-center h-100">

                <div className="card-body">

                  <h4 className="card-title">Donations</h4>

                  <p className="card-text">
                    Track alumni donations
                  </p>

                </div>

              </div>

            </Link>

          </div>

        </div>

      </div>

    </DashboardLayout>

  )

}

export default StaffDashboard