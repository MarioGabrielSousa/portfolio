import "./portfolio.scss";


export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>
        <span>Portfolio</span>
      </h1>
      <div className="container">
        <div className="item">
          <img src="assets/gameBg.jpg" alt="poopycornGame" />
          <h3>
            <a href="https://poopycorn.netlify.app/">Poopycorn – The Game</a>
          </h3>
        </div>
        <div className="item">
          <img src="assets/bestteenmovies-1612822987.jpg" alt="5stars" />
          <h3>
            <a href="https://fivestars-network.herokuapp.com/">5 Stars</a>
          </h3>
        </div>
        <div className="item">
          <img
            src="assets/PinClipart.com_older-clipart_5426589.png"
            alt="dailydose"
          />
          <h3>
            <a href="https://fit-oh.netlify.app/">Daily Dose</a>
          </h3>
        </div>
      </div>
      <a href="#contact">
        <span>
          <strong>Reach out!</strong>
        </span>
        <img src="assets/icons8-divisa-para-baixo-90.png" alt="down arrow" />
      </a>
    </div>
  );
}
