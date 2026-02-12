import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-dark text-light vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          
          {/* Left Image Panel */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://task-apps-client.vercel.app/assets/Login-XRROANEj.png"
              className="img-fluid"
              alt="Login Illustration"
            />
          </div>

          {/* Right Form Panel */}
          <div className="col-12 col-md-6">
            <div className="card bg-secondary shadow-lg">
              <div className="card-body p-4">
                <h2 className="text-center cblue" style={{ fontFamily: "Pacifico" }}>
                  Login
                </h2>

                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-light">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label text-light">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Link to="/Signin" className="text-info">
                      New User? Signup
                    </Link>
                    <Link to="/Forgot" className="text-info">
                      Forgot Password?
                    </Link>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
