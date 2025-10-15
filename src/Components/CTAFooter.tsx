import "./CTAFooter.css";
import { FaLinkedin, FaInstagram, FaGithub, FaSlack } from "react-icons/fa6";

export default function CTAFooter() {
  return (
    <div className="cta-footer-wrapper">
      <div className="cta-footer-content">
        {/* Text Section */}
        <div className="cta-text">
          <h2>Let’s Bring Your Vision to Life</h2>
          <p>
            I don’t just create designs, I become your strategic partner,
            turning your vision into experiences that inspire, engage, and grow
            your brand.
          </p>
          <p>
            You’ve got the idea, and I bring the expertise to transform it into
            something people love to use and remember. Let’s make your ideas
            unforgettable.
          </p>
        </div>

        {/* CTA Button */}
        <a href="mailto:calvine@example.com" className="cta-button">
          Contact Me
        </a>

        {/* Optional Social Links */}
        <div className="cta-socials">
          <a
            href="https://www.linkedin.com/in/calvine-ochieng-8a0781389/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/calvine_dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://slack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSlack />
          </a>
        </div>
      </div>
      <p className="cta-footer-copy">
        &copy; {new Date().getFullYear()} Calvine. All Rights Reserved.
      </p>
    </div>
  );
}
