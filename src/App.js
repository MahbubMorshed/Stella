import { Route, Routes } from "react-router-dom";
import { Contact, Hero, Navbar } from "./components";
import Gallery from "./components/canvas/gallery/Gallery";
import Race from "./components/canvas/marbelRace/Race";

import Skill from "./components/canvas/Skill/Skill";

const App = () => {
  return (
    // <div className="relative z-0 bg-primary">
    <>
      <Navbar />
      <Routes>
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}

        <Route path="/" element={<Contact />} />
        {/* <Route path="tech" element={<Skill />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="race" element={<Race />} /> */}
      </Routes>
    </>

    // </div>
  );
};

export default App;
