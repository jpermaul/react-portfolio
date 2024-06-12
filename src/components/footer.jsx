import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    const name = "Jeremy Permaul";
    return (
        <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <a href="https://www.linkedin.com/in/jeremy-permaul-332784a4/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-white mx-2" />
            </a>
            <a href="https://github.com/jpermaul" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="text-white mx-2" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;