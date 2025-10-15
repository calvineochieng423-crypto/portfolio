import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLightbulb, FaPenNib, FaCode, FaRocket } from "react-icons/fa";
import "./Worksection.css";

gsap.registerPlugin(ScrollTrigger);

export default function Worksection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 4,
            ease: "power2.inOut",
            transformOrigin: "left center",
          }
        );
      }
      const validIcons = iconRefs.current.filter(
        (ref): ref is HTMLDivElement => ref !== null
      );

      if (validIcons.length > 0) {
        tl.fromTo(
          validIcons,
          { opacity: 0, y: 70, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.25,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-wrapper">
        <h2 className="process-title">
          Behind every beautiful interface is a smart, structured workflow.
        </h2>

        <div className="process-line-container">
          <div className="process-line" ref={lineRef}></div>

          <div className="process-icons">
            {[FaLightbulb, FaPenNib, FaCode, FaRocket].map((Icon, index) => (
              <div
                key={index}
                className="icon-container"
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
              >
                <Icon className="process-icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
