import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faViber } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row mt-4 justify-content-center">
          {/* ✅ Contact Section */}
          <div className="col-lg-6 col-md-8 mb-4">
            <h5 className="text-uppercase">Contact Me</h5>
            <ul className="list-unstyled">
              <li className="my-2">
                <a href="mailto:yourname@gmail.com" className="text-black">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  yourname@gmail.com
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.facebook.com/caraosalfred"
                  className="text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="me-2" />
                  Facebook
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.linkedin.com/in/alfred-caraos-a5a05b263/"
                  className="text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                  LinkedIn
                </a>
              </li>
              <li className="my-2">
                <a href="viber://chat?number=%2B639XXXXXXXXX" className="text-black">
                  <FontAwesomeIcon icon={faViber} className="me-2" />
                  +63 9950663497 (Viber)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-white text-center p-3" style={{ backgroundColor: "#2B4348" }}>
        © {new Date().getFullYear()} Your Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
