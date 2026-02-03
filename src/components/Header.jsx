import profilePic from "../assets/Cur.gif";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mb-12 text-center md:text-left">

      {/* LEFT SIDE — TITLE + TEXT */}
      <div className="flex-shrink flex-grow min-w-0">
        <h1
          className="
            font-['Press_Start_2P']
            text-pink-600
            text-[clamp(16px,4vw,34px)]
            leading-tight
            tracking-tight
            mb-4
          "
        >
          Christina&apos;s Portfolio
        </h1>

        <p
          className="
            font-['DM_Sans']
            text-pink-700
            text-[clamp(14px,2.6vw,18px)]
            leading-relaxed
            max-w-prose
          "
        >
          Hi, I’m Christina! I’m a Master&apos;s student based in California and I like{" "}
          <strong className="font-semibold text-pink-800">video games</strong>,{" "}
          <strong className="font-semibold text-pink-800">finance</strong>,{" "}
          <strong className="font-semibold text-pink-800">business</strong>,{" "}
          <strong className="font-semibold text-pink-800">development</strong>, and{" "}
          <strong className="font-semibold text-pink-800">AI/ML</strong>. I love
          building things that live at the crossroads of multiple disciplines, and
          I enjoy blending creativity into my work.
          (I designed some of the assets you see in this portfolio!)
        </p>
      </div>

      {/* RIGHT SIDE — CHARACTER CARD */}
      <div
        className="
          flex-shrink
          basis-[60%]
          max-w-[220px]
          min-w-[90px]
          flex items-center justify-center
        "
      >
        <div
          className="
            bg-pink-100
            border-4 border-pink-500
            rounded-xl
            shadow-[6px_6px_0px_rgba(0,0,0,0.3)]
            p-3
            w-full
            select-none
          "
          style={{ imageRendering: "pixelated" }}
        >
          {/* Character GIF */}
          <img
            src={profilePic}
            alt="Pixel Christina"
            className="w-full h-auto object-contain mb-2"
            style={{ imageRendering: "pixelated" }}
          />

          {/* Stats Bar */}
          <div
            className="
              bg-pink-200
              border-2 border-pink-400
              rounded-md
              p-1
              font-['Press_Start_2P']
              text-[6px]
              text-pink-800
              leading-tight
            "
          >
            <div>CLASS: MASTER&apos;S STUDENT · AI/ML INTEREST</div>
          </div>
        </div>
      </div>

    </div>
  );
}
