import { Col } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <Col className="text-center py-3">&copy; PD</Col>
      </div>
      <div className="d-flex justify-content-center footer__social-icons">
        <h6>I don't do fashion. I am fashion. —Coco Chanel</h6>
      </div>
      <div>
        <Col className="text-center py-3">
          <small>
            created with ❤️ by
            <a
              href="https://www.linkedin.com/in/pranjul-dwivedi-9b3035195/"
              className="text-info"
            >
              <strong> PD</strong>
            </a>
          </small>
        </Col>
      </div>
    </footer>
  );
};

export default Footer;
