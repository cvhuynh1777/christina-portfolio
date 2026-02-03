import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import windowFrame from "../assets/pixel-window.png";

export default function PixelBrowser({ children }) {
  const isMobile = window.innerWidth < 768;

  /* ---------------- MOBILE VERSION ---------------- */
  if (isMobile) {
    return (
      <div className="bg-pink-100 min-h-screen flex justify-center px-3 py-6 overflow-x-hidden">
        <div className="relative w-full max-w-[420px] mt-4">

          {/* Pixel Frame */}
          <img
            src={windowFrame}
            className="w-full h-auto object-contain pointer-events-none select-none"
            style={{ imageRendering: "pixelated" }}
            alt="pixel window"
          />

          {/* Inner content */}
          <div
            className="absolute overflow-y-auto p-4"
            style={{
              top: "26%",
              left: "9%",
              right: "9%",
              bottom: "14%",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- DESKTOP VERSION ---------------- */

  const calcSize = () => ({
    width: Math.min(window.innerWidth * 0.92, 1400),
    height: Math.min(window.innerHeight * 0.9, 1000),
  });

  const calcMaxSize = () => ({
    width: window.innerWidth - 40,
    height: window.innerHeight - 40,
  });

  const [size, setSize] = useState(calcSize());
  const [maxSize, setMaxSize] = useState(calcMaxSize());
  const [pos, setPos] = useState({ x: 40, y: 30 });

  useEffect(() => {
    const handleResize = () => {
      setSize(calcSize());
      setMaxSize(calcMaxSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bottomOffset = size.height * 0.09;
  const rightOffset = size.width * 0.08;

  return (
    <div className="bg-pink-100 h-screen relative overflow-x-hidden">
      <Rnd
        size={size}
        position={pos}
        onDragStop={(e, d) => setPos({ x: d.x, y: d.y })}
        onResizeStop={(e, dir, ref) =>
          setSize({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
          })
        }
        minWidth={700}
        minHeight={500}
        maxWidth={maxSize.width}
        maxHeight={maxSize.height}
        bounds="window"
        dragHandleClassName="pixel-drag-area"
        enableResizing={{ bottomRight: true }}
        className="relative"
        resizeHandleComponent={{
          bottomRight: (
            <div
              className="cursor-se-resize"
              style={{
                position: "absolute",
                width: "30px",
                height: "30px",
                right: `${rightOffset}px`,
                bottom: `${bottomOffset}px`,
                zIndex: 9999,
              }}
            />
          ),
        }}
      >
        {/* Pixel Frame */}
        <img
          src={windowFrame}
          className="w-full h-full object-fill pointer-events-none select-none"
          style={{ imageRendering: "pixelated" }}
          alt="pixel window"
        />

        {/* Drag area */}
        <div
          className="pixel-drag-area absolute left-0 right-0"
          style={{ top: "11%", height: "7%" }}
        />

        {/* Inner content */}
        <div
          className="absolute overflow-y-auto p-4 sm:p-6 md:p-10"
          style={{
            top: "20%",
            left: "12%",
            right: "10%",
            bottom: "10%",
          }}
        >
          {children}
        </div>
      </Rnd>
    </div>
  );
}
