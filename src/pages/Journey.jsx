import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion, AnimatePresence } from "framer-motion";
import WeaponBackground from "../components/background/WeaponBackground";
import TreasureRun from "../components/mini_games/TreasureRun";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Journey() {
  const [journey, setJourney] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const fetchJourney = async () => {
      const { data, error } = await supabase
        .from("journey")
        .select('id, year, title, content, image_url, "order"')
        .order("order", { ascending: true });

      if (error) console.error(error);
      else setJourney(data);
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
      <div className="min-h-screen bg-darkGreen text-white px-6 py-12 space-y-36 font-retro">
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
            <div className="absolute left-6 top-0 bottom-0 w-px border-l-2 border-dashed border-white/30 z-0" />

            {journey.map((step, index) => (
              <motion.div
                key={step.id}
                // onClick={() => setActive(step)}
                className="group cursor-pointer relative pl-16 pr-4 py-8 mb-14 border-2 border-cyan-300/40 rounded-2xl bg-gradient-to-br from-cyan-200/10 via-white/5 to-black/20 shadow-[0_0_20px_rgba(255,192,203,0.2)] hover:shadow-pink-300/40 transition-all duration-300 backdrop-blur-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                {/* RPG Orb Dot */}
                <div className="absolute left-4 top-15 w-5 h-5 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(255,192,203,0.6)] border-2 border-white animate-pulse" />

                {/* Content */}

                <div className="flex items-center gap-4 mt-5">
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
                      className="w-20 h-20 object-contain rounded shadow-inner border border-white/10 bg-black/20 p-1"
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
                    className="mt-5 px-2 py-2 bg-pink-500 text-white hover:bg-pink-400 rounded transition duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300/50 focus:ring-offset-2"
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
                // onClick={() => setActive(null)}
              >
                <motion.div
                  className="bg-gradient-to-br from-darkGreen to-green-950/80 backdrop-blur-md text-white p-6 rounded-xl max-w-lg w-full shadow-[0_0_20px_rgba(0,255,153,0.3)] border border-white/20 relative ring-1 ring-lime-400/30"
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
                  <div className="mt-4 text-sm text-white/80 leading-relaxed whitespace-pre-line">
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
