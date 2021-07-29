import "./topbar.scss";
import { PhoneAndroid, Mail, Code } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            mário.
          </a>
          <a href="tel:+351916228987" className="itemContainer">
            <PhoneAndroid className="icon" />
            <span>+351 916 228 987</span>
          </a>
          <a href="mailto:vegetalizado@gmail.com" className="itemContainer">
            <Mail className="icon" />
            <span>vegetalizado@gmail.com</span>
          </a>
          <div className="itemContainer">
            <Code className="icon" />
            <span>
              <a href="#portfolio">Portfolio</a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
