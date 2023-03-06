import React from "react";
import { Row, Col } from "react-bootstrap";

import { resumeBtn, resume } from "./images";
import "./style.css";

export default function Contact() {
  return (
    <div className="resume-card">
      <h1 className="resume-card-heading">My Resume</h1>
      <div className="resume-top-content">
        <Col>
          <h2 className="resume-title">My Proficiencies:</h2>
          <ul>
            <li>React.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>And More!</li>
          </ul>
        </Col>
        <Col xs={12} md={3} className="resume-download-card">
          <p>Click on the R to download my full resume!</p>
          <a href={resume} download>
            <img src={resumeBtn} alt="My resume." className="resume-img"></img>
          </a>
        </Col>
      </div>
      <div className="resume-section-card">
        <Col>
          <h3 className="resume-title">Summary</h3>
          <p>
            I am a Web Developer and graduate of the Rutgers University
            Full-Stack Web Development Program. I excel at front-end development
            using technologies like React.js, Node.js, and more.
          </p>
          <p>
            My background in education and coaching means I have a strong
            understanding of teamwork, management, communication, conflict
            resolution, and creative problem solving.
          </p>
        </Col>
      </div>
      <div className="resume-section-card">
        <Col>
          <h3 className="resume-title">Experience</h3>
          <Row>
            <Col>
              <p>
                Full-Stack Web Developer
              </p>
            </Col>
            <Col>
              <p>
                Rutgers Full--Stack Web Development Program, Nov '22 - Feb '23
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Report Administrator, QA/QC Administator
              </p>
            </Col>
            <Col>
              <p>
                LEW Environmental Servises, Mar '21 - Jun '22
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Head Instructor, Co-Founder
              </p>
            </Col>
            <Col>
              <p>
                Central Heights Fencing Club, Jun '10 - Apr '20
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Substitute Teacher
              </p>
            </Col>
            <Col>
              <p>
                Long Hill Township School District, Sept '12 - Apr '20
              </p>
            </Col>
          </Row>
        </Col>
      </div>
      <div className="resume-section-card">
        <Col>
          <h3 className="resume-title">Education</h3>
          <p>
            Hello! My name is Eric Kirberger and I am an aspiring Full Stack Web
            Developer. I am currently in the Rutgers Coding Bootcamp building a
            growing list of important skills and proficiencies. I am a former
            fencing instructor and teacher, and I have a Bachelor's Degree in
            Philosophy from Rutgers University! `Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur?`
          </p>
        </Col>
      </div>
    </div>
  );
}
