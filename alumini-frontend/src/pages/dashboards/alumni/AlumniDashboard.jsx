import DashboardLayout from "../../../components/DashboardLayout";

function AlumniDashboard() {

  return (

    <DashboardLayout role="alumni">

      <div className="container mt-4">

        <h2 className="text-center mb-5">Alumni Dashboard</h2>

        <div className="row justify-content-center">

          {/* Job Postings */}

          <div className="col-md-3 mb-4">

            <div className="card shadow text-center h-100">

              <div className="card-body">

                <h4 className="card-title">Job Postings</h4>

                <p className="card-text">
                  Share opportunities with students
                </p>

              </div>

            </div>

          </div>


          {/* Mentoring */}

          <div className="col-md-3 mb-4">

            <div className="card shadow text-center h-100">

              <div className="card-body">

                <h4 className="card-title">Mentoring</h4>

                <p className="card-text">
                  Guide current students
                </p>

              </div>

            </div>

          </div>


          {/* Donations */}

          <div className="col-md-3 mb-4">

            <div className="card shadow text-center h-100">

              <div className="card-body">

                <h4 className="card-title">Donations</h4>

                <p className="card-text">
                  Support college initiatives
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default AlumniDashboard;