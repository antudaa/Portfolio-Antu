// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    })
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <HireMe></HireMe>
      <Contact />
      <Footer></Footer>
    </div>
  );
};

export default App;
