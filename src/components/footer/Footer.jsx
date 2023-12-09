import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Asitha</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link"></a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/asitha13" className="footer__social-links" target="blank">
            <i class="bx bxl-facebook"></i>
          </a>

          <a href="https://instagram.com/__asi_96?igshid=MzMyNGUyNmU2YQ==" className="footer__social-links" target="blank">
            <i class="bx bxl-instagram"></i>
          </a>

          <a href="https://x.com/asithal27321801?t=2YBFYVthEBGpMjbZRSePoA&s=09" className="footer__social-links" target="blank">
            <i class="bx bxl-twitter"></i>
          </a>

          <a href="https://www.linkedin.com/in/asitha-lakmal-a4b36b167" className="footer__social-links" target="blank">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy"> &#169; AsithaRuwange. All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
