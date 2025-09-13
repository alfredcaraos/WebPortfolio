import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faUserEdit,
  faShippingFast,
  faBackspace,
  faBriefcase,
  faAt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start">
        <div className="container p-4">
          <div className="row mt-4">

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Explore</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faBook} className="me-2" />Bestsellers</a></li>
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faBook} className="me-2" />All Books</a></li>
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faUserEdit} className="me-2" />Our Authors</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faShippingFast} className="me-2" />Shipping</a></li>
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faBackspace} className="me-2" />Returns</a></li>
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faFileAlt} className="me-2" />Policies</a></li>
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faFileAlt} className="me-2" />Privacy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Our Address</h5>
              <ul className="list-unstyled">
                <li><span className="text-black">The BookStore</span></li>
                <li><span className="text-black">123 Street</span></li>
                <li><span className="text-black">New York, NY 05765</span></li>
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faBriefcase} className="me-2" />Submit a Book</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faAt} className="me-2" />Help & Support</a></li>
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faShippingFast} className="me-2" />Order Tracking</a></li>
                <li><a href="#" className="text-black"><FontAwesomeIcon icon={faEnvelope} className="me-2" />Newsletter Signup</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="text-white text-center p-3" style={{ backgroundColor: '#2B4348' }}>
          © {new Date().getFullYear()} YourBookstore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
