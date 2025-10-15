import "./Reasonsection.css";
import {
  FaRocket,
  FaLightbulb,
  FaPalette,
  FaBolt,
  FaReact,
  FaCogs,
  FaHandsHelping,
} from "react-icons/fa";

export default function Reasonsection() {
  const reasons = [
    {
      icon: <FaRocket />,
      title: "Conversion-Focused Plumbing Platforms",
      desc: "Custom-built service websites that bring real inquiries — not just views. Integrated with contact forms and direct booking features to turn visitors into clients instantly.",
    },
    {
      icon: <FaLightbulb />,
      title: "Smart Real Estate Systems",
      desc: "Fully functional property listing and filtering platforms powered by APIs, making it easy for buyers to connect with agents in real time.",
    },
    {
      icon: <FaPalette />,
      title: "Creative Coffee & Lifestyle Branding",
      desc: "Visually engaging layouts, smooth transitions, and storytelling that strengthens brand identity while offering a premium browsing experience.",
    },
    {
      icon: <FaBolt />,
      title: "Lightning Speed Performance",
      desc: "Each site is optimized for performance, accessibility, and SEO — tested to achieve top Google PageSpeed results.",
    },
    {
      icon: <FaReact />,
      title: "Built With React",
      desc: "Modern front-end stack with reusable components and dynamic user interfaces. Scalable, fast, and future-proof.",
    },
    {
      icon: <FaCogs />,
      title: "Real Functionality",
      desc: "Booking systems, contact forms, and APIs that actually work — everything coded for real-world business utility.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Ongoing Support",
      desc: "Beyond deployment — I help clients improve, scale, and optimize performance for long-term success.",
    },
  ];

  return (
    <div className="reason-wrapper">
      <div className="reason-section">
        <div className="reason-intro">
          <h2>
            Because I Am The Dev Partner Who Gets the Vision and Builds It Right
          </h2>
        </div>

        <div className="reason-pinterest">
          {reasons.map((item, index) => (
            <div className="reason-pin" key={index}>
              <div className="reason-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
