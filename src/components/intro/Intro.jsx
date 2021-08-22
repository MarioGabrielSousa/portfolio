import "./intro.scss";
import { init } from "ityped";
import { useState, useEffect, useRef } from "react";

const PHOTO_COLOURS = [
  "#0000ff",
  "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)",
  "#00ff00",
  "#ff0000",
  "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
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
      color: PHOTO_COLOURS[colorIndex % PHOTO_COLOURS.length],
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
