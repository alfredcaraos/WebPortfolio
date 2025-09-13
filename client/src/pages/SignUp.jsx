import React from "react";
import Logo from "../assets/image/logo.png";
import Button from "../components/Button";

const SignUp = () => {
  const handleClick = () => {
    console.log * "Sample log in";
  };

  return (
    <div>
      <div className="container-fluid p-5">
        <div className="row align-items-center">
          <div className="col">
            <img
              className="rounded-5"
              src={Logo}
              alt="Sample Logo"
              height={600}
              width={700}
            />
          </div>
          <div className="col">
            <form>
              <div className="mb-3">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="Password" />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                />
              </div>

              <Button
                className={`float-end`}
                type="submit"
                value={"Log In"}
                onClick={handleClick}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
