import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiEthereum,
  SiBlockchaindotcom,

} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">

        <p style={{fontSize:"30px", color:"white"}}>
          Linux
        </p>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p style={{fontSize:"30px", color:"white"}}>
          VS Code
        </p>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p style={{fontSize:"30px", color:"white"}}>
          Postman
        </p>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p style={{fontSize:"30px", color:"white"}}>
          Ethereum
        </p>
        <SiEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p style={{fontSize:"30px", color:"white"}}>
          Blockchain
        </p>
        <SiBlockchaindotcom />
      </Col>
    </Row>
  );
}

export default Toolstack;
