import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web APP",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/gameBg.jpg" alt="" />
          <h3>Item title</h3>
        </div>
        <div className="item">
          <img src="assets/gameBg.jpg" alt="" />
          <h3>Item title</h3>
        </div>
        <div className="item">
          <img src="assets/gameBg.jpg" alt="" />
          <h3>Item title</h3>
        </div>
        <div className="item">
          <img src="assets/gameBg.jpg" alt="" />
          <h3>Item title</h3>
        </div>
        <div className="item">
          <img src="assets/gameBg.jpg" alt="" />
          <h3>Item title</h3>
        </div>
        <div className="item">
          <img src="assets/gameBg.jpg" alt="" />
          <h3>Item title</h3>
        </div>
      </div>
    </div>
  );
}
