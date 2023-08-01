import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Employee Management App",
      description:
        "Developed an Employee Management Application with frontend and backend to enhance data management, and improve overall organizational efficency.",
      imgUrl: projImg3,
    },
    {
      title: "EmoQuotes Hub",
      description:
        "Developed a website where, when clicked on an emotion, the quotes will be displayed for that particular user emotion.",
      imgUrl: projImg2,
    },
    {
      title: "Hash Market",
      description:
        "Developed a user-friendly shopping app with backend integration, secure payments, and effortless browsing and purchasing capabilities.",
      imgUrl: projImg1,
    },
    {
      title: "Transformer Health Monitoring System Using IOT",
      description:
        "Developed an IoT-based Transformer Health Monitoring System for continuous performance monitoring and optimized maintenance, improving reliability.",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In my portfolio, I proudly present a series of full-stack
                    development projects that harness the power of React,
                    Node.js, Express, and MongoDB. With these technologies, I
                    create robust and interactive web applications that
                    seamlessly connect frontend and backend functionalities.
                    Leveraging React's versatility, I design captivating user
                    interfaces with HTML, CSS, and JavaScript, while Node.js and
                    Express enable me to build powerful server-side
                    applications. MongoDB serves as the database backbone,
                    ensuring efficient data storage and retrieval. Through these
                    projects, I demonstrate my expertise in creating modern and
                    feature-rich web experiences that cater to user needs and
                    embrace the latest web development trends.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Internships</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="education-info">
                          <h2>Education</h2>
                          <div className="education-item text-center">
                            <h4>
                              BVRIT HYDERABAD College of Engineering For Women,
                              Hyderabad
                            </h4>
                            <p>
                              Major: Electronics and Communication Engineering
                            </p>
                            <p>Degree: Bachelor of Technology</p>
                            <p>2019-2023</p>
                            <p>CGPA: 7.08</p>
                          </div>
                          <div className="education-item text-center">
                            <h4>Sri Chaitanya Junior College, Hyderabad</h4>
                            <p>Stream: Maths, Physics, Chemistry</p>
                            <p>2017-2019</p>
                            <p>Percentage: 95%</p>
                          </div>
                          <div className="education-item text-center">
                            <h4>LFG Digi High School, Hyderabad</h4>
                            <p>2017</p>
                            <p>Percentage: 85%</p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container className="text-center">
                          <h2>Internships</h2>
                          <h3>Full Stack Developer At HashInsert [6 months]</h3>
                          <h6>Projects</h6>
                          <p>

                          <ul >
                            <li>Employee Management App</li>
                            <li>HashMarket</li>
                            <li>EmoQuotes Hub</li>
                            <li>Todo-App</li>
                            <li>Notes-App</li>
                          </ul>
                          </p>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
