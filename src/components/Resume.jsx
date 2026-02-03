export default function Resume() {
  return (
    <>
      <h2
        className="
          font-['Press_Start_2P']
          text-left sm:text-center
          text-pink-600
          text-[clamp(14px,3vw,22px)]
          mb-6 sm:mb-8
        "
      >
        Resume
      </h2>

      <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">


        {/* Education */}
        <RetroBox title="Education">
          <h3 className="font-bold text-pink-800">
            University of California, Berkeley - B.S. EECS (2019 - 2023)
          </h3>
          <p className="text-sm">
            Relevant Coursework: Software Engineering, Artificial Intelligence, Machine Learning, UX/UI Design
          </p>
          <h3 className="font-bold text-pink-800">
            Georgia Institute of Technology - M.S. Computational Data Analytics (2024 - CURRENT)
          </h3>
          <p className="text-sm">
            Relevant Coursework: Machine Learning for Trading, Analytics Modeling, Simulation
          </p>
        </RetroBox>

        <RetroBox title="Experience">
          <div className="space-y-6">

            <div>
              <h3 className="font-bold text-pink-800">
                CACI - Data Engineer Contract (Full-Time · 2024 - CURRENT)
              </h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>
                  Developed scalable data pipelines using Apache NiFi and FastAPI
                  to ingest, transform, and serve environmental datasets for wargaming simulations.
                </li>
                <li>
                  Built analytics dashboards and ML-powered workflows supporting forecasting,
                  simulation, and operational decision-making.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-pink-800">
                CACI - Data Analyst Contract (Part-Time · 2020 - 2023)
              </h3>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>
                  Analyzed MTBF reliability data to identify component failure trends and
                  support supply-chain planning and risk mitigation.
                </li>
                <li>
                  Automated MTBF data cleaning and preprocessing using Python to enable
                  reliable maintenance and supply-chain analytics.
                </li>
              </ul>
            </div>

          </div>
        </RetroBox>



        {/* Skills */}


      </div>
    </>
  );
}

/* RetroBox with hover-lift effect (unchanged) */
function RetroBox({ title, children }) {
  return (
    <div
      className="
        bg-pink-50 border-4 border-pink-300 rounded-xl 
        shadow-[4px_4px_0px_rgba(0,0,0,0.25)]
        transition-all duration-200 ease-out
        hover:-translate-y-1
        hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)]
      "
    >
      <div
        className="
          bg-pink-200 border-b-4 border-pink-300 px-3 py-2 
          font-semibold text-pink-700 flex items-center gap-2
        "
        style={{ imageRendering: 'pixelated' }}
      >
        <span className="text-red-500">●</span>
        <span className="text-yellow-500">●</span>
        <span className="text-green-500">●</span>
        {title}
      </div>

      <div
        className="
          p-4
          font-['DM_Sans']
          text-[17px]
          leading-relaxed
          text-pink-700
        "
      >
        {children}
      </div>

    </div>
  );
}
