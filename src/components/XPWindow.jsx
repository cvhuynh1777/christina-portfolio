import { Rnd } from "react-rnd";

export default function XPWindow({ title = "Window", children }) {
  return (
    <Rnd
      default={{
        x: 120,
        y: 120,
        width: 460,
        height: 300,
      }}
      minWidth={260}
      minHeight={150}
      bounds="window"
      dragHandleClassName="xp-titlebar"
      className="rounded-md shadow-lg border border-pink-300 bg-pink-50"
    >
      {/* Title Bar */}
      <div className="xp-titlebar flex justify-between items-center bg-pink-300 text-pink-900 font-semibold px-3 py-2 cursor-move select-none">
        <span>{title}</span>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-2 rounded">
          ✕
        </button>
      </div>

      {/* Content Area */}
      <div className="p-4 text-pink-800">
        {children}
      </div>
    </Rnd>
  );
}
