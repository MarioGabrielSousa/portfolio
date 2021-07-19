import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/about-sub-pic-1.png" alt="" />
      </div>
      <div className="right">
        <h2>Reach out!</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Don't be shy..."></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
