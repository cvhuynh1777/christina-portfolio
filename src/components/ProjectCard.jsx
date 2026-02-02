export default function ProjectCard({
  title,
  children,
  skills = [],
  href,
  type = "Personal", // default
}) {
  const typeStyles = {
    Personal: "bg-pink-100 border-pink-300 text-pink-700",
    Academic: "bg-green-100 border-green-300 text-green-700",
    Work: "bg-blue-100 border-blue-300 text-blue-700",
  };
  

  return (
    <div
      className="
        bg-pink-50 border-4 border-pink-300 rounded-xl 
        shadow-[4px_4px_0px_rgba(0,0,0,0.25)]
        transition-transform duration-150 hover:-translate-y-1 
        hover:shadow-[6px_6px_0px_rgba(0,0,0,0.35)]
      "
    >
      {/* Title Bar */}
      <div
        className="
          bg-pink-200 border-b-4 border-pink-300 px-3 py-2 
          font-semibold text-pink-700 flex items-center gap-2 justify-between
        "
        style={{ imageRendering: "pixelated" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-red-500">●</span>
          <span className="text-yellow-500">●</span>
          <span className="text-green-500">●</span>
          {title}
        </div>

        {/* Project Type Tag */}
        <span
          className={`
            text-[10px] px-2 py-1 rounded-md border-2 font-semibold
            ${typeStyles[type]}
          `}
        >
          {type}
        </span>

      </div>

      {/* Body */}
      <div
          className="
            p-4
            font-['DM_Sans']
            text-[15px]
            leading-relaxed
            text-gray-700
          "
        >
          {children}


        {/* Skills */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs bg-pink-100 border border-pink-300 px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block mt-4 text-xs font-semibold
              text-pink-600 hover:text-pink-800 underline
            "
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}
