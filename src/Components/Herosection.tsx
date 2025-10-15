import "./Herosection.css";
import { FaCode, FaRegCircleCheck } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Herosection() {
  const textRefs = useRef<HTMLElement[]>([]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(textRefs.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        <div className="hero-content">
          <div className="intro-wrapper">
            <h1>
              Hey, I'm <span>Calvine.</span>
              <br />
              Builder &{" "}
              <span className="dev-icon">
                <FaCode />
              </span>
              Developer
            </h1>
          </div>

          <div className="intro-wrapper">
            <p>
              Results driven frontend developer that collaborate with startups
              and established brands to transform ambitious ideas into
              high-performance digital solutions. From strategy to execution, I
              focus on building experiences that drive growth, deliver
              measurable results, and create lasting impact.
            </p>
          </div>

          <div className="cta-row">
            <div className="chat-div alt">
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with Calvine
              </a>
            </div>
            <div className="availability">
              <FaRegCircleCheck className="available-icon" /> Available for New
              Project
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="./hero.PNG" alt="Calvine" />
        </div>
      </div>
    </div>
  );
}
