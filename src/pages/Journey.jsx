import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WeaponBackground from "../components/background/WeaponBackground";
import TreasureRun from "../components/mini_games/TreasureRun";

export default function Journey() {
  const [journey, setJourney] = useState([]);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJourney = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/journey");
        const data = await res.json();
        setJourney(data);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJourney();

    const body = document.body;
    if (active) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [active]);

  return (
    <div className="relative min-h-screen bg-darkGreen text-white overflow-hidden">
      <WeaponBackground />
      <div className="min-h-screen bg-darkGreen text-white px-4 sm:px-6 py-8 sm:py-12 space-y-24 sm:space-y-36">
        <div className="flex flex-col items-center mt-2 gap-6 px-4">
          <section className="p-0 mb-24">
            <h1
              className="text-5xl md:text-6xl text-center text-white"
              style={{
                textShadow:
                  "0 0 10px #05f0d8, 0 0 20px #05f0d8, 0 0 24px #05f0d8",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              ❚❚ Journey
            </h1>
          </section>

          <div className="w-full max-w-2xl relative">
            {/* Vertical dotted line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px border-l-2 border-dashed border-white/30 z-0" />

            {journey.map((step, index) => (
              <motion.div
                key={step.id}
                className="group relative pl-12 sm:pl-16 pr-4 py-6 sm:py-8 mb-14 border-2 border-cyan-300/40 rounded-2xl bg-gradient-to-br from-cyan-200/10 via-white/5 to-black/20 shadow-[0_0_20px_rgba(255,192,203,0.2)] hover:shadow-pink-300/40 transition-all duration-300 backdrop-blur-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                {/* RPG Orb Dot */}
                <div className="absolute left-4 top-15 w-5 h-5 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(255,192,203,0.6)] border-2 border-white animate-pulse" />

                {/* Content */}

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 text-center sm:text-left">
                  <span
                    className="absolute top-2 right-5 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-sm shadow-md mt-5"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}
                  >
                    QUEST {index + 1}
                  </span>
                  {step.image_url && (
                    <img
                      src={step.image_url}
                      alt=""
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded shadow-inner border border-white/10 bg-black/20 p-1"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-pixel text-white tracking-wide">
                      {step.title}
                    </h3>
                    <span className="text-xs text-white/60 italic">
                      {step.year}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center text-xs">
                  <button
                    onClick={() => {
                      setActive(step);
                      setShowPopup(true);
                    }}
                    className="mt-5 px-3 py-2 text-[10px] sm:text-xs sm:px-4 sm:py-2 bg-pink-500 text-white hover:bg-pink-400 rounded transition duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300/50 focus:ring-offset-2"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}
                  >
                    ENTER QUEST
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {active && (
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-darkGreen to-green-950/80 backdrop-blur-md text-white p-6 rounded-xl max-w-lg w-full p-4 sm:p-6 text-sm sm:text-base shadow-[0_0_20px_rgba(0,255,153,0.3)] border border-white/20 relative ring-1 ring-lime-400/30"
                  initial={{ scale: 0.9, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 40 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <img
                      src="/bg.svg"
                      alt="Relik Background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {" "}
                    <span>🚀</span> {active.title}
                  </h3>
                  <span className="text-xs text-white/50 italic">
                    {active.year}
                  </span>
                  <div className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed whitespace-pre-line text-justify">
                    {active.content}
                  </div>
                  <button
                    className="absolute top-3 right-4 text-white hover:text-green-400 hover:scale-110 transition-transform duration-150 ease-out text-lg"
                    onClick={() => setActive(null)}
                  >
                    ✕
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <TreasureRun />
    </div>
  );
}
