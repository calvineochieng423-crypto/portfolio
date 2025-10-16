import "./Projectsection.css";
import { FiFileText, FiExternalLink } from "react-icons/fi";

export default function Projectsection() {
  return (
    <div className="project-wrapper">
      <div className="project-section">
        <div className="project-intro">
          <p className="text">MY WORK</p>
          <h2>
            <FiFileText className="project-icon" /> Latest Projects
          </h2>
        </div>

        <div className="project-cards">
          {/* 🔧 Project 1 */}
          <div className="card">
            <picture>
              <img src="./P1.png" alt="Plumbing Website" />
            </picture>
            <h3>BluePipe Plumbing Services</h3>
            <p>
              A modern, conversion-focused platform for plumbing professionals.
              Built with a real-time booking system and direct contact features
              that help clients schedule services instantly.
            </p>
            <a
              href="https://176e5591.plumbing-drv.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Project <FiExternalLink />
            </a>
          </div>

          {/* 🏡 Project 2 */}
          <div className="card">
            <picture>
              <img src="./P2.png" alt="Real Estate Website" />
            </picture>
            <h3>PropertyVision Real Estate</h3>
            <p>
              A sleek, API-powered real estate website with dynamic listings,
              live search, and map integration ,designed to simplify property
              discovery for users.
            </p>
            <a
              href="https://d944b9a6.monexa.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Project <FiExternalLink />
            </a>
          </div>

          {/* ☕ Project 3 */}
          <div className="card">
            <picture>
              <img src="./P3.png" alt="Coffee Website" />
            </picture>
            <h3>BrewSpace Coffee</h3>
            <p>
              A brand-driven coffee shop platform with an elegant layout,
              product showcase, and online order flow optimized for customer
              engagement and retention.
            </p>
            <a
              href="https://04998469.house-coffee.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Project <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
