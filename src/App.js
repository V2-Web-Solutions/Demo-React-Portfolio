/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery.jsx";

import Navbar from "./scenes/Navbar.jsx";
import DotGroup from "./scenes/DotGroup.jsx";
import Landing from "./scenes/Landing.jsx";
import MySkills from "./scenes/MySkills.jsx";
import Projects from "./scenes/Projects.jsx";
import Testimonials from "./scenes/Testimonials.jsx";
import Contact from "./scenes/Contact.jsx";
import Footer from "./scenes/Footer.jsx";

import LineGradient from "./components/LineGradient.jsx";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep=blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Testimonials />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
