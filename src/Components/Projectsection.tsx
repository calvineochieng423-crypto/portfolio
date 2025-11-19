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
            <h3>CompleteSEO</h3>
            <p>
              CompleteSEO is a results-driven digital marketing agency based in
              Austin, Texas, specializing in SEO, technical audits, content
              strategy, and link building to help businesses grow their organic
              visibility and generate leads.
            </p>
            <a
              href="https://completeseo.com/the-future-of-search/"
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
            <h3>Diamo</h3>
            <p>
              Diamo.ai is an AI-driven platform that helps independent hotels
              automate pricing, marketing, and direct bookings. With its smart
              assistant and expert support, it boosts revenue and reduces
              workload for small hospitality businesses.
            </p>
            <a
              href="https://www.diamo.ai/"
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
            <h3>Forger Project</h3>
            <p>
              Forager Project is a plant-based creamery focused on making
              dairy-alternative foods using organic ingredients like cashews and
              coconuts. Their product line includes yogurts, milks & creamers,
              sour cream, protein shakes, and drinkable yogurts.
            </p>
            <a
              href="https://foragerproject.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Project <FiExternalLink />
            </a>
          </div>
          {/* ☕ Project 4 */}
          <div className="card">
            <picture>
              <img src="./P4.jpg" alt="Coffee Website" />
            </picture>
            <h3>FinTrack Pro Financial Dashboard</h3>
            <p>
              A dynamic financial dashboard featuring real-time data
              visualization, interactive charts, and customizable widgets to
              help users monitor their financial health effectively.
            </p>
            <a
              href="https://financial-dashboard-ck1.pages.dev/"
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
