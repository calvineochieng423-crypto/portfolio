import "./Navigation.css";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaSlack,
} from "react-icons/fa6";

export default function Navigation() {
  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <a
          href="https://x.com/calvine_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/calvine-ochieng-8a0781389/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        {/* Replaced WhatsApp with Slack */}
        <a
          href="https://slack.com/" // replace with your Slack workspace invite link if needed
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSlack />
        </a>
        <a
          href="https://www.instagram.com/calvine_dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="chat-div">
        <a
          href="https://app.slack.com/client/T09LLFBUW58/C09L51LR7P1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with Calvine
        </a>
      </div>
    </div>
  );
}
