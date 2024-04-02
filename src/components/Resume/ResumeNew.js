import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Abhishek_Rawat_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume-header">
          <Col className="text-center">
            <h2>Resume</h2>
          </Col>
        </Row>
        <Row className="resume-buttons justify-content-center">
          <Col xs="auto">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="download-button"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
        <Row className="container mx-auto mt-3">
          <Col xs={12} md={8} lg={12} className="text-center container">
           <div style= {{maxWidth: "100%", height: "auto", display: "block", margin: "0 auto"}}>
           <Document file={pdf}>
              <Page 
                pageNumber={1}
                scale={width < 768 ? 0.5 : width < 992 ? 1 : 1.5}
              />
            </Document>
           </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
