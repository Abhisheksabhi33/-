import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dsxyzdqvo/image/upload/v1678340723/rmovieHome_caw5rx.png"}
              isBlog={false}
              title="RMovieClub- Movie Rating Plateform"
              description="This is an advance movie review app like IMDB where the admin pannel to upload movies and users can rate the movie from 1 to 10. As admin you can see the progress, add, update or delete the movies.
              Also you can create new actors whom you can then add inside movies as they are the actors of that particular movie. At the frontend I have created an advance UI like slider, live search, rating models, multiple forms, and many more using React JS and Tailwind CSS."
              ghLink="https://github.com/Abhisheksabhi33/rmovieclub-version-2.0"
              demoLink="https://rmovie.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://user-images.githubusercontent.com/87107030/163526047-00445c75-a160-4867-adda-1e3acf359d2f.png"}
              isBlog={false}
              title="RCrypto- Ethereum Sending and Receiving app"
              description="A website through which anyone can send or accept the ethers accross the world in just a 30 seconds Just connect the wallet or install the metamask.
              It shows the total transactions made by the users."
              ghLink="https://github.com/Abhisheksabhi33/Rcrypto-3.0"
              demoLink="https://jade-mermaid-64df24.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dsxyzdqvo/image/upload/v1678454607/RNews-Home_ollbga.png"}
              isBlog={false}
              title="RNews- Daily Live News"
              description="This is a News website designed using html,css and ReactJs.The frontend part of this project is developed by ReactJs. Implemented News API which Provides the news content to the website.
              Implemented infinite scrolling in the app.
              Implemented React Router for routing.
              To read the full news content it redirects to the original news provider's site."
              ghLink="https://github.com/Abhisheksabhi33/RNews-Daily-Live-News-2.0"
              demoLink="https://res.cloudinary.com/dsxyzdqvo/video/upload/v1678466378/Untitled_video_-_Made_with_Clipchamp_1_q9e6lh.mp4"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
