// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

import Contact from "./components/Contact";
import HireMe from "./components/Hireme";

const App = () => {
  return (
    <div className="">
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <HireMe></HireMe>
      <Contact />
    </div>
  );
};

export default App;
