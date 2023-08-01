import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col
            size={12}
            sm={6}
            style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}
          >
            PORTFOLIO
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-2">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/viharika-chinthapalli-27931725b/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/viharika-Chinthapalli">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
