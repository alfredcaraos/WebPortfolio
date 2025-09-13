import Logo from "../assets/image/logo.png";
import Login from "../assets/image/login.png";
import Portfolio from "../assets/image/portfolio_logo.png";
import Img from "../components/Img";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Img src={Portfolio} alt={"Logo"} className="skill-img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link active" href="skills">
                  Skills
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link active" href="project">
                  Projects
                </a>
              </li>

              <li className="nav-item px-3">
                <a className="nav-link active" href="#">
                  Reflections
                </a>
              </li>
            </ul>

            {/* Login Dropdown (Mobile - centered) */}
            <div className="dropdown d-flex justify-content-center w-100 d-lg-none my-3">
              <button
                className="btn dropdown-toggle p-0 border-0 bg-transparent"
                type="button"
                id="loginDropdownMobile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={Login} alt="Login" height={60} width={60} />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="loginDropdownMobile"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Login Dropdown (Desktop - right aligned) */}
            <div className="dropdown d-none d-lg-flex align-items-center ms-auto ms-3 me-4">
              <button
                className="btn dropdown-toggle p-0 border-0 bg-transparent"
                type="button"
                id="loginDropdownDesktop"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={Login} alt="Login" height={60} width={60} />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="loginDropdownDesktop"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
