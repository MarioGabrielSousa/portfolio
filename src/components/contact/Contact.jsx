import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <img className="big-img" src="assets/letstalk.jpg" alt="let's talk!" />
      <div className="container">
        <a rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/mariogabrielsousa/"
            >
          <img width={120} id="image" src="assets/icons8-linkedin.gif" alt="" />
          </a>
          <a rel="noreferrer" href="mailto:vegetalizado@gmail.com">
          <img
            width={120}
            id="image"
            src="assets/image_processing20201103-24799-19vf3o0.gif"
            alt=""
          /></a>
           <a rel="noreferrer" target="_blank" href="https://github.com/MarioGabrielSousa">
          <img width={120} id="image" src="assets/icons8-github.gif" alt="" /></a>

    </div>
    </div>
  );
}
