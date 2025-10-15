import "./Testimonialsection.css";
import { FaComments } from "react-icons/fa6";

const testimonials = [
  {
    name: "Alice Johnson",
    position: "Entrepreneur - Business & Startups",
    text: "Calvine is an exceptional developer! Highly recommended.",
  },
  {
    name: "Mark Smith",
    position: "Investor - Business & Startups",
    text: "Working with Calvine was a pleasure. Very professional.",
  },
  {
    name: "Sophia Lee",
    position: "Founder - Business & Startups",
    text: "Amazing skills and attention to detail. Loved the collaboration!",
  },
  {
    name: "David Omomdi",
    position: "Tech Consultantt",
    text: "Delivered everything on time and beyond expectations.",
  },
];

export default function TestimonialSection() {
  return (
    <div className="testimonial-wrapper">
      {/* Heading */}
      <div className="testimonial-header">
        <FaComments className="testimonial-icon" />
        <h2>Trusted by Early Collaborators</h2>
      </div>

      {/* Marquee Testimonials */}
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          ))}
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index + testimonials.length}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
