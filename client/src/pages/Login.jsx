import React from "react";
import Logo from "../assets/image/logo.png";
import Button from "../components/Button";
import Img from "../components/Img";

const Login = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <div className="container-fluid p-5">
        <div className="row">
          {/*Row 1 of the HomeLayout*/}
          <div className="col-md m-2">
            <Img
              src={Logo}
              alt={"A Person Coding"}
              className={"img-fluid p-3 rounded-5"}
              style={{ width: "700px", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md m-2">
            <div className="col m-3">
              <form className="">
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
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                  />
                </div>
                <div className="py-3">
                  Do not have account yet? <a href="/signup">Click here!</a>
                </div>

                <div className="d-flex justify-content-end">
                  <Button type="submit" value="Log In" onClick={handleClick} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
