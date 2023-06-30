import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              Also you can create new actors whom you can then add inside movies as they are the actors of that particular movie. At the frontend I have created an advance UI like slider, live search, rating models, multiple forms, and many more using React JS and Tailwind CSS.  Complete backend API with Node.js, Express, MongoDB, and Cloudinary.Role-Based Authentication (Admin
                Normal User).User Authentication With Email Verification.Password Reset Route.Cloud Storage for Images
                and Videos."
              ghLink="https://github.com/Abhisheksabhi33/rmovieclub-version-2.0"
              demoLink="https://rmovie.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dsxyzdqvo/image/upload/v1688164246/trendiShop-1_ppkcnx.png"}
              isBlog={false}
              title="TrendiShop - Ecommerce"
              description="Developed an e-commerce website using cutting-edge technologies including ReactJS, NodeJS, and Firebase
              where user authentication, allowing secure login, signup, and password reset functionalities.
               Integrated Stripe API for secure and efficient payment processing, ensuring smooth checkout and reliable
              transaction handling and Created a user-friendly interface for product browsing, showcasing a wide range of
              products with detailed descriptions.
               Implemented a robust admin panel, empowering administrators to efficiently manage the platform by adding
              and editing products, monitoring inventory, and processing orders.
               Utilized Firebase for real-time data synchronization, enhancing performance and ensuring consistent data
              across multiple devices and users."
              ghLink="https://github.com/Abhisheksabhi33/TrendiShop"
              demoLink="https://trendishop.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://user-images.githubusercontent.com/87107030/163526047-00445c75-a160-4867-adda-1e3acf359d2f.png"}
              isBlog={false}
              title="RCrypto- Ethereum Sending and Receiving Web app"
              description=" Developed a web application using ReactJS, resulting in a highly responsive and user-friendly interface.
              ∗ Implemented smart contracts using Solidity, enabling secure and transparent transactions of Ether on the
              Ropsten test network.
              ∗ Utilized blockchain technology to provide decentralized and tamper-proof transaction capabilities, enhancing
              security and trust in the system."
              ghLink="https://github.com/Abhisheksabhi33/Rcrypto-3.0"
              demoLink="https://jade-mermaid-64df24.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dsxyzdqvo/image/upload/v1688165004/blogpulse-1_wog8kp.png"}
              isBlog={false}
              title="BlogPulse- Blogging Website"
              description="BlogPulse: Web Application for Writing Blogs about trending technologies And news Articles. This project is a MERN (MongoDB, Express.js, React.js, Node.js) stack web application designed for writing and sharing blog posts about trending technologies and news. The application includes a complete backend API for handling data storage and retrieval, and utilizes Cloudinary to store and manage images associated with the blog posts.User Registration and Authentication: Users can create accounts and log in to the application. Create and Publish Blog Posts: Authenticated users can write and publish blog posts on various topics.Image Upload: The application integrates with Cloudinary to allow users to upload and manage images associated with their blog posts.
              Read and Comment on Blog Posts: Visitors can read published blog posts and leave comments on them.
              Trending Technologies and News: The focus of the blog posts is on trending technologies and news, providing valuable insights to the readers."
              ghLink="https://github.com/Abhisheksabhi33/BlogPulse"
              demoLink="https://blogpulse.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://res.cloudinary.com/dsxyzdqvo/image/upload/v1682604285/puzzle-home_yw9z5m.png"}
              isBlog={false}
              title="Puzzle-Game"
              description=" Developed and deployed a MERN application for Elitmus, an interactive website for testing user’s Soft Skills.
               Designed a user-friendly UI with Bootstrap and implemented a robust backend API for user authentication,
              progress tracking, and time tracking. Utilized MongoDB for efficient data storage and successfully deployed the
              project on a cloud-hosting platform.
               Developed an admin dashboard for tracking user progress and incorporated a leaderboard feature for
              competition and engagement.
               Demonstrated proficiency in soft skills assessment and attention to detail through this puzzle design."
              ghLink="https://github.com/Abhisheksabhi33/PuzzleGame"
              demoLink="https://puzzlegame-2fu6.onrender.com/"
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
              To read the full news content it redirects to the original news provider's site.
              Implemented React Bootstrap for styling.
              Implemented React Hooks for state management.
              Implemented React Context API for state management.
              Implemented React Lazy Loading for better performance.
              
               in this project i have used React Hooks,React Context API,React Lazy Loading,React Router,React Bootstrap,News API,HTML,CSS,ReactJs.
                
               
              "
              ghLink="https://github.com/Abhisheksabhi33/RNews-Daily-Live-News-2.0"
              demoLink="https://res.cloudinary.com/dsxyzdqvo/video/upload/v1678466378/Untitled_video_-_Made_with_Clipchamp_1_q9e6lh.mp4"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
