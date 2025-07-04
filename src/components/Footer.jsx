import "../styles/Footer.css";
import d2vLogo from "../assets/d2v-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="master-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} D2V Labs</p>
        <div className="d2v-footer">
          <img className="d2v-logo-img" src={d2vLogo} alt="D2V Labs logo" />
        </div>
        <div className="footer-links">
          <a href=""><i className="fa-solid fa-phone"></i></a>
          <a href=""><i className="fa-brands fa-instagram"></i></a>
          <a href=""><i className="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}