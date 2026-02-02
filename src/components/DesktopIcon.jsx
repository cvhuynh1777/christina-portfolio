export default function DesktopIcon({ label }) {
  return (
    <div 
      className="
        flex flex-col items-center
        hover:opacity-80 
        transition 
        select-none 
        cursor-pointer
      "
    >
      <div 
        className="
          w-14 h-14 bg-pink-300 border-2 border-pink-500
          shadow-[3px_3px_0px_rgba(0,0,0,0.25)]
          flex items-center justify-center text-pink-700 
          font-['Press_Start_2P'] text-xs
        "
      >
        ✿
      </div>

      <p className="mt-2 text-pink-700 text-xs font-['Press_Start_2P'] text-center">
        {label}
      </p>
    </div>
  );
}
