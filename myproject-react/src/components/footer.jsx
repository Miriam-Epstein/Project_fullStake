import { FiMail, FiPhone } from "react-icons/fi";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="developer-row">
        <span className="dev-name">מרים אפשטיין</span>
        <a href="mailto:m0533123308@gmail.com" className="dev-contact-link">
          <FiMail className="dev-contact-icon" />
          m0533123308@gmail.com
        </a>
        <span className="dev-contact-text">
          <FiPhone className="dev-contact-icon" />
          053-312-3308
        </span>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2024 חנות משחקים. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

