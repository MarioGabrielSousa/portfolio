import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <img className="big-img" src="assets/letstalk.jpg" alt="let's talk!" />
      <div className="container">
        <a
          className="contact-link"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/mariogabrielsousa/"
        >
          <img src="assets/linkedin.png" alt="linkedin logo" />
        </a>
        <a
          className="contact-link"
          rel="noreferrer"
          href="mailto:vegetalizado@gmail.com"
        >
          <img src="assets/Gmail_2020.png" alt="gmail logo" />
        </a>
        <a
          className="contact-link"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/MarioGabrielSousa"
        >
          <img src="assets/github.png" alt="github logo" />
        </a>
      </div>
    </div>
  );
}
