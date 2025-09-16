import Portfolio from "../assets/image/portfolio_logo.png";
import Img from "../components/Img";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <Img src={Portfolio} alt="Portfolio Logo" className="skill-img" />
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
            <li className="nav-item px-3">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/skills">Skills</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/project">Projects</a>
            </li>
          </ul>

          {/* ✅ Download Resume Button (Right-Aligned) */}
          <a
            href="/resume.pdf"
            download
            className="btn btn-dark ms-lg-4 mt-3 mt-lg-0 px-4 py-2 rounded-pill"
          >
            Download Resume
          </a>
        </div>
      </div>

      <style>
        {`
          .nav-link {
            position: relative;
            transition: color 0.3s ease;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0%;
            height: 2px;
            background-color: #2B4348;
            transition: width 0.3s ease-in-out;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-link:hover {
            color: #2B4348;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
