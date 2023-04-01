import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";

export default function Index() {
  return (
    <>
      <About />
      <Projects id="projects" />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
