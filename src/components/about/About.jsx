import "./about.scss";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoSass,
} from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { TiHtml5 } from "react-icons/ti";
import { DiMongodb } from "react-icons/di";
import {
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiTrello,
  SiBootstrap,
} from "react-icons/si";

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="about_container">
          <p>
            Former group fitness trainer with a crush for coding, always up for
            new challenges!
          </p>

          <p>
            As a curious tech-lover I started my learning experience at
            <strong> Ironhack</strong>, from where I've graduate with a
            tremendous will to keep on learning new skills in this ever changing
            world of coding.
          </p>

          <p>
            In an intense 400 hours bootcamp, I've gather the principles of
            JavaScript, HTML, CSS, React and other technologies, as shown below:
          </p>
        </div>
        <div className="skills">
          <div className="skills_about">
            <div className="skill_icon">
              <TiHtml5 size={60} />
              <p>HTML</p>
            </div>
            <div className="skill_icon">
              <IoLogoCss3 size={60} />
              <p>CSS</p>
            </div>
            <div className="skill_icon">
              <IoLogoSass size={60} />
              <p>SASS</p>
            </div>
            <div className="skill_icon">
              <SiBootstrap size={60} />
              <p>Bootstrap</p>
            </div>
            <div className="skill_icon">
              <IoLogoJavascript size={60} />
              <p>JavaScript</p>
            </div>
            <div className="skill_icon">
              <IoLogoNodejs size={60} />
              <p>NodeJs</p>
            </div>
            <div className="skill_icon">
              <GrReactjs size={60} />
              <p>ReactJs</p>
            </div>
            <div className="skill_icon">
              <DiMongodb size={60} />
              <p>MongoDB</p>
            </div>
            <div className="skill_icon">
              <SiPostman size={60} />
              <p>Postman</p>
            </div>
            <div className="skill_icon">
              <SiHeroku size={60} />
              <p>Heroku</p>
            </div>
            <div className="skill_icon">
              <SiNetlify size={60} />
              <p>Netlify</p>
            </div>
            <div className="skill_icon">
              <SiTrello size={60} />
              <p>Trello</p>
            </div>
          </div>
        </div>
        <a href="#portfolio" className="down-arrow">
          <span>
            <strong>Bootcamp projects</strong>
          </span>
          <img src="assets/icons8-divisa-para-baixo-90.png" alt="down arrow" />
        </a>
      </div>
    </>
  );
}
