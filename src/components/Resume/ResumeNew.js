import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Abhishek_Rawat_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://drive.google.com/file/d/1rw2T2vDRgMYhIJDhsYeyVJmt4lDdSblD/view";



  const resumeLink = ()=> {
    
      return <div style={{maxWidth: "60%", height: "auto", display: "flex", justifyContent: "center"}}>
      <img src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1688166435/Abhishek_Rawat_Resume_page_fhwy5j.jpg" alt="Resume" style= {{maxWidth: "100%", height: "auto", display: "block", margin: "0 auto"}} />
    </div>
    
  }

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/* <Document className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
          
          {resumeLink()}

        </Row>

        <Row style={{ justifyContent: "center", position: "relative"}}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
