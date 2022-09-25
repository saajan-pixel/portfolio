import "./about.scss";
import Resume from "../../assets/resume/Saajan's Resume.pdf";
import Html from "../../assets/svg/html.png";
import css from "../../assets/svg/css.png";
import js from "../../assets/svg/js.png";
import ts from "../../assets/svg/ts.png";
import reactjs from "../../assets/svg/react.png";
import angualr from "../../assets/svg/angular.png";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="about-wrapper">
        <div className="myDesc">
          <p>
            Hello there, My name is Saajan Shrestha. I am a front-end web
            developer with a focus on discovering solutions, skilled at
            contributing to highly collaborative work environments. Demonstrated
            expertise with HTML, CSS, and JavaScript Framework to create
            websites with a strong focus on the user. Good understanding of user
            experience, speed, and web design best practices. Besides this, I
            love to watch movies & series, listening music, travelling and
            gaming.
          </p>

          <div className="links">
            <a href="https://www.linkedin.com/in/saajan-shrestha-148613197/">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/saajan-pixel">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <div className="myResume">
            <button type="button" className="btn-67">
              <a href={Resume} download="Saajan's Resume">
                Download Resume
              </a>
            </button>
          </div>
        </div>

        <div className="mySkills">
          <h2>My Skills</h2>
          <div className="mySkills-wrapper">
            <ul>
              <li>
                <img width="85px" src={Html} alt="html img" />
              </li>
              <li>
                <img width="85px" src={css} alt="html img" />
              </li>
              <li>
                <img width="85px" src={js} alt="html img" />
              </li>
            </ul>

            <ul>
              <li>
                <img width="85px" src={ts} alt="html img" />
              </li>
              <li>
                <img width="85px" src={reactjs} alt="html img" />
              </li>
              <li>
                <img width="85px" src={angualr} alt="html img" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
