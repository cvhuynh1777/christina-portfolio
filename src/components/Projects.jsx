import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <h2
        className="
          font-['Press_Start_2P']
          text-pink-600
          text-[clamp(14px,3vw,22px)]
          text-center
          mb-8
        "
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

        {/* ===================== TRADING / ML ===================== */}

        <ProjectCard
          title="Reinforcement Learning Trading Agent"
          type="Personal"
          skills={["Python", "Reinforcement Learning", "MLflow", "Docker"]}
          href="https://github.com/cvhuynh1777/nvda_rl_agent"
        >
          Built a reinforcement learning agent to trade NVDA stock with an emphasis
          on drawdown reduction and downside risk control. Logged experiments with
          MLflow and packaged the final model as a reproducible Docker artifact.
        </ProjectCard>

        <ProjectCard
          title="Manual Strategy vs Strategy Learner Experiment"
          type="Academic"
          skills={[
            "Python",
            "Q-Learning",
            "Algorithmic Trading",
            "Financial Simulation"
          ]}
          href="https://github.com/cvhuynh1777/ml4t-strategyevaluation-project"
        >
          Capstone project for CS 7646 (Machine Learning for Trading) comparing a
          human-designed rule-based strategy against a AI-driven strategy learner
          we developed under identical market conditions.
        </ProjectCard>

        {/* ===================== AI / NLP ===================== */}

        <ProjectCard
          title="SplitMate - AI Receipt Splitting App"
          type="Personal"
          skills={[
            "Python",
            "FastAPI",
            "OCR",
            "LLMs",
            "Streamlit"
          ]}
          href="https://github.com/cvhuynh1777/splitmateapp"
        >
          Developed an AI-powered receipt splitting app that extracts line items
          via OCR and applies natural language instructions to compute fair
          per-person bill splits with an editable breakdown.
        </ProjectCard>

        <ProjectCard
          title="Pulse - YouTube Sentiment Analysis"
          type="Personal"
          skills={[
            "Next.js",
            "Tailwind CSS",
            "NLP",
            "VADER",
            "YouTube API"
          ]}
          href="https://github.com/cvhuynh1777/PulseApp"
        >
          Built a sentiment analysis web app that restores visibility into audience
          reactions after YouTube removed public dislike counts by analyzing comment
          sentiment on trending videos or any URL.
        </ProjectCard>

        {/* ===================== SPORTS ANALYTICS ===================== */}

        <ProjectCard
          title="How to Build an NBA Champion"
          type="Academic"
          skills={[
            "Machine Learning",
            "Sports Analytics",
            "Regression",
            "Clustering"
          ]}
          href="https://github.com/cvhuynh1777/IEOR142"
        >
          Final project for IEOR 142 analyzing the drivers of NBA championship
          success using historical player, team, and chemistry datasets spanning
          multiple eras of league play.
        </ProjectCard>

        {/* ===================== WORK ===================== */}

      </div>
    </>
  );
}
