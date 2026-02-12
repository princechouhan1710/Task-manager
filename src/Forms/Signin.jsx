import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="bg-dark text-light vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">

          {/* Left Image */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://task-apps-client.vercel.app/assets/signup-CndSm3Na.png"
              className="img-fluid"
              alt="Sign Up Illustration"
            />
          </div>

          {/* Signup Form */}
          <div className="col-12 col-md-6">
            <div className="card bg-secondary shadow-lg">
              <div className="card-body p-4">
                <h2 className="text-center cblue" style={{ fontFamily: "Pacifico" }}>
                  Sign Up
                </h2>

                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label text-light">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your Username"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-light">
                      Email address
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
                    <p className="mb-0 text-light">
                      Already have an account?{" "}
                      <Link to="/Login" className="text-info">
                        Login
                      </Link>
                    </p>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
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

export default Signin;
