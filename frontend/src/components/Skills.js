import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                "Hello! I'm Viharika Chinthapalli, a passionate full stack
                developer with a strong foundation in the following skills. I
                have a keen interest in creating intuitive and visually
                appealing web experiences. With a background in Electronics and
                Communication Engineering, I bring a unique perspective to my
                development work. I enjoy tackling challenges and continuously
                expanding my skill set to stay up-to-date with the latest
                technologies. I thrive in collaborative environments, where I
                can contribute my creativity and problem-solving abilities.
              </p>{" "}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>DSA</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Git & Github</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Microsoft Office</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Full Stack Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
