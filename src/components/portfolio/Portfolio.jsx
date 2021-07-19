import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="item">
          <img src="assets/gameBg.jpg" alt="" />
          <h3>Poopycorn – The Game</h3>
        </div>
        <div className="item">
          <img src="assets/bestteenmovies-1612822987.jpg" alt="" />
          <h3>5 Stars</h3>
        </div>
        <div className="item">
          <img src="assets/gameBg.jpg" alt="" />
          <h3>Daily Dose</h3>
        </div>
      </div>
    </div>
  );
}
