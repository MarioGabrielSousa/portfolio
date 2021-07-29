import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/letstalk.jpg" alt="" />
      </div>
      <div className="right">
        <div className="container">
          <div className="contact-items">
            <img width={120} id="image" src="assets/icons8-github.gif" alt="" />
            <h2>
              <a target="_blank" href="https://github.com/MarioGabrielSousa">
                GitHub
              </a>
            </h2>
          </div>
          <div className="contact-items">
            <img
              width={120}
              id="image"
              src="assets/icons8-linkedin.gif"
              alt=""
            />
            <h2>
              <a target="_blank" href="https://www.linkedin.com/in/mariogabrielsousa/">
                LinkedIn
              </a>
            </h2>
          </div>
          <div className="contact-items">
            <img
              width={120}
              id="image"
              src="assets/image_processing20201103-24799-19vf3o0.gif"
              alt=""
            />
            <h2>
              <a href="mailto:vegetalizado@gmail.com">Gmail</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
