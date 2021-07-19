import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/fotopasse-removebg.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá! I'm</h2>
          <h1>Mário</h1>
          <h3>
            Aspiring <span ref={textRef}></span>
          </h3>
        </div>

        <a href="#about">
          <span>A little bit of myself</span>
          <img src="assets/icons8-divisa-para-baixo-90.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
