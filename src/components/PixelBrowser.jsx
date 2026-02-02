import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import windowFrame from "../assets/pixel-window.png";

export default function PixelBrowser({ children }) {

  // ⭐ Initial size
  const calcSize = () => ({
    width: Math.min(window.innerWidth * 0.92, 1400),
    height: Math.min(window.innerHeight * 0.9, 1000),
  });

  // ⭐ Max allowed size (near fullscreen)
  const calcMaxSize = () => ({
    width: window.innerWidth - 40,
    height: window.innerHeight - 40,
  });

  const [size, setSize] = useState(calcSize());
  const [maxSize, setMaxSize] = useState(calcMaxSize());
  const [pos, setPos] = useState({ x: 80, y: 40 });

  useEffect(() => {
    const handleResize = () => {
      setSize(calcSize());
      setMaxSize(calcMaxSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Resize-handle offset (keeps it inside frame)
  const bottomOffset = size.height * 0.09;
  const rightOffset = size.width * 0.08;

  return (
    <div className="bg-pink-100 h-screen relative overflow-hidden">

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
        minWidth={600}
        minHeight={500}
        maxWidth={maxSize.width}
        maxHeight={maxSize.height}
        bounds="window"
        dragHandleClassName="pixel-drag-area"
        enableResizing={{ bottomRight: true }}

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

        className="relative overflow-visible"
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
