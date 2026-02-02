import { useState } from "react";
import PixelBrowser from "./components/PixelBrowser";
//import DesktopIcon from "./components/DesktopIcon";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  const [windows, setWindows] = useState([]);

  // Spawn a new draggable retro window
  const openWindow = (component) => {
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), content: component }
    ]);
  };

  return (
    <div className="relative min-h-screen bg-pink-200">

      {/* === Desktop Icons Layer === */}
      {/*<div className="grid grid-cols-1 gap-6 absolute top-6 left-6 z-10">
        <DesktopIcon label="Resume" onClick={() => openWindow(<Resume />)} />
        <DesktopIcon label="Projects" onClick={() => openWindow(<Projects />)} />
        <DesktopIcon label="About Me" onClick={() => openWindow(<Header />)} />
        <DesktopIcon label="Contact" onClick={() => openWindow(<Contact />)} />
      </div> */}

      {/* === Main Window (ALWAYS OPEN) === */}
      <PixelBrowser>
        <Header />
        <Resume />
        <Projects />
        <Contact />
      </PixelBrowser>

      {/* === Additional Spawned Windows === */}
      {windows.map((w) => (
        <PixelBrowser key={w.id}>
          {w.content}
        </PixelBrowser>
      ))}

    </div>
  );
}
