import { useState } from "react";
import PixelBrowser from "./PixelBrowser";
import Projects from "./Projects";
import ProjectWindow from "./ProjectWindow";

export default function Desktop() {
  const [windows, setWindows] = useState([]);

  const openProject = (project) => {
    setWindows((prev) => [
      ...prev,
      {
        id: Date.now(),
        project,
      },
    ]);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="relative h-screen bg-pink-100 overflow-hidden">
      {/* Main Portfolio Window */}
      <PixelBrowser>
        <Projects onOpenProject={openProject} />
      </PixelBrowser>

      {/* Project Windows */}
      {windows.map((w) => (
        <PixelBrowser key={w.id}>
          <ProjectWindow
            project={w.project}
            onClose={() => closeWindow(w.id)}
          />
        </PixelBrowser>
      ))}
    </div>
  );
}
