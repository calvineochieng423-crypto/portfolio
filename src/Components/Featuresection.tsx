import "./Featuresection.css";
import {
  FaScrewdriverWrench,
  FaCartShopping,
  FaFile,
  FaUserTie,
  FaBuilding,
  FaCalendarCheck,
  FaComments,
} from "react-icons/fa6";

export default function Featuresection() {
  return (
    <div className="feature-wrapper">
      <div className="feature-section">
        <p className="text">WHAT I DO</p>

        <div className="feature-title">
          <FaScrewdriverWrench className="service-icon" />
          <h2>Services I Offer</h2>
        </div>

        <div className="service-grid">
          {/* 1️⃣ E-commerce (Vertical Span) */}
          <div className="service-card span-vertical">
            <FaCartShopping className="service-card-icon" />
            <h3>E-commerce</h3>
            <p>
              Crafting fast, secure, and scalable online stores built to
              increase sales and boost conversions through modern UI/UX and
              seamless checkout flows.
            </p>
          </div>

          {/* 2️⃣ Landing Pages (Horizontal Span) */}
          <div className="service-card span-horizontal">
            <FaFile className="service-card-icon" />
            <h3>Landing Pages</h3>
            <p>
              Designing persuasive, high-performing landing pages optimized for
              lead generation and conversions, turning clicks into real
              customers.
            </p>
          </div>

          {/* 3️⃣ Portfolio */}
          <div className="service-card">
            <FaUserTie className="service-card-icon" />
            <h3>Portfolio</h3>
            <p>
              Building sleek, professional portfolio sites that reflect personal
              brands with stunning visuals, animations, and responsiveness
              across all devices.
            </p>
          </div>

          {/* 4️⃣ Real Estate */}
          <div className="service-card">
            <FaBuilding className="service-card-icon" />
            <h3>Real Estate</h3>
            <p>
              Creating modern, search-optimized real estate platforms with
              dynamic listings, map integrations, and fast filtering for smooth
              property discovery.
            </p>
          </div>

          {/* 5️⃣ Booking Platforms */}
          <div className="service-card">
            <FaCalendarCheck className="service-card-icon" />
            <h3>Booking Platforms</h3>
            <p>
              Developing reliable, user-friendly booking and scheduling systems
              that simplify operations for clients and businesses alike.
            </p>
          </div>
        </div>
      </div>
      <p className="text bottom-text">...AND SO ON</p>
      {/* 💬 Let's Chat Button */}
      <div className="chat-cta">
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaComments className="chat-icon" />
          Let’s Chat
        </a>
      </div>
    </div>
  );
}
