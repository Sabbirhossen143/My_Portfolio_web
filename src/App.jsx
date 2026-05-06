import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
// import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
<Hero />
{/* <Skills /> */}
<About />
<Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;