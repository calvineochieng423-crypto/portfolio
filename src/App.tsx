import Featuresection from "./Components/Featuresection";
import Herosection from "./Components/Herosection";
import Navigation from "./Components/Navigation";
import Projectsection from "./Components/Projectsection";
import Reasonsection from "./Components/Reasonsection";
import Testimonialsection from "./Components/Testimonialsection";
import Worksection from "./Components/Worksection";
import "./index.css";
import CTAFooter from "./Components/CTAFooter";
import { smoothScroll } from "./Smoothscroll";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    smoothScroll();
  });
  return (
    <>
      <Navigation />
      <Herosection />
      <Featuresection />
      <Projectsection />
      <Reasonsection />
      <Worksection />
      <Testimonialsection />
      <CTAFooter />
    </>
  );
}
