import "./intro.scss";
import { init } from "ityped";
import { useState, useEffect, useRef } from "react";

const PHOTO_COLOURS = [
  "linear-gradient(90deg, rgba(233,30,96,1) 0%, rgba(245,200,255,1) 100%)",
  "linear-gradient(120deg, rgba(99,125,254,1) 0%, rgba(219,200,255,1) 100%)",
  "linear-gradient(90deg, rgba(126,219,96,1) 0%, rgba(252,255,150,1) 100%",
  "linear-gradient(120deg, rgba(255,0,0,1) 0%, rgba(252,105,89,1) 50%, rgba(250,192,192,1) 100%)",
  "linear-gradient(90deg, rgba(203,213,30,1) 0%, rgba(248,252,89,1) 50%, rgba(250,192,192,1) 100%)",
];

export default function Intro() {
  const [colorIndex, setColorIndex] = useState(0);
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["web developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div
          className="imgContainer"
          style={{
            background: PHOTO_COLOURS[colorIndex % PHOTO_COLOURS.length],
          }}
          onClick={() => setColorIndex(colorIndex + 1)}
        >
          <img src="assets/fotopasse-removebg.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá! I'm</h2>
          <h1>Mário,</h1>
          <h3>
            an aspiring <span ref={textRef}></span>
          </h3>
        </div>

        <a href="#about">
          <span>
            <strong>A little bit of myself</strong>
          </span>
          <img src="assets/icons8-divisa-para-baixo-90.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
