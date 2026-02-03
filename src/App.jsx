import { useState } from "react";
import PixelBrowser from "./components/PixelBrowser";
//import DesktopIcon from "./components/DesktopIcon";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-pink-200">

      {/* Header + Resume + Contact (clean on mobile) */}
      <PixelBrowser hideFrameOnMobile>
        <Header />
        <Resume />
        <Projects />
        <Contact />
      </PixelBrowser>

    </div>
  );
}
