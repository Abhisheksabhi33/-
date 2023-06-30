import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiAws,
} from "react-icons/di";
import {
  SiFirebase,
  SiRedux,
  SiMysql,
  SiExpress,

} from "react-icons/si";

import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
         <p style={{fontSize:"30px", color:"white"}}>
          C++
         </p>
        <CgCPlusPlus/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         
         <p style={{fontSize:"30px", color:"white"}}>
          Javascript
         </p>

        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">

          <p style={{fontSize:"30px", color:"white"}}>
          Nodejs
          </p>

        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         
          <p style={{fontSize:"30px", color:"white"}}>
          Reactjs
          </p>

        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">

          <p style={{fontSize:"30px", color:"white"}}>
          MongoDB
          </p>

        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        
          <p style={{fontSize:"30px", color:"white"}}>
          AWS
          </p>

        <DiAws />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">

          <p style={{fontSize:"30px", color:"white"}}>
          Git
          </p>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">

          <p style={{fontSize:"30px", color:"white"}}>
          Firebase
          </p>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          
          <p style={{fontSize:"30px", color:"white"}}>
          Redux
          </p>

        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">

          <p style={{fontSize:"30px", color:"white"}}>
          MySQL
          </p>
        <SiMysql />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">

          <p style={{fontSize:"30px", color:"white"}}>
          Express
          </p>
           < SiExpress/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">

          <p style={{fontSize:"30px", color:"white"}}>
           REST APIs 
          </p>
      
         < TbApi/>
      
      </Col>

      

    </Row>
  );
}

export default Techstack;
