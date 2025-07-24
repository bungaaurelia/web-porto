import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PixelClicker from "../components/mini_games/PixelClicker";
import GemsBackground from "../components/background/GemsBackground";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/about");
        const data = await res.json();
        setAboutData(data);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (!aboutData)
    return <p className="text-center text-white">No data found.</p>;

  return (
    <main>
      <div className="relative min-h-screen bg-darkGreen text-white overflow-hidden">
        <GemsBackground />
        <div className="min-h-screen bg-darkGreen text-white px-4 sm:px-6 py-8 sm:py-12 space-y-20 sm:space-y-36">
          <section className="p-0">
            <h1
              className="text-5xl md:text-6xl text-center text-white"
              style={{
                textShadow:
                  "0 0 10px #05f0d8, 0 0 20px #05f0d8, 0 0 24px #05f0d8",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              ▶ About Me
            </h1>
          </section>

          <div className="max-w-6xl mx-auto space-y-24">
            {aboutData.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`flex flex-col-reverse sm:flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center justify-between gap-10 md:gap-20 px-2 sm:px-4`}
              >
                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4 text-justify">
                  <span
                    className="bg-pink-500 text-white text-xs px-2 py-1 rounded-sm shadow-md inline-block mb-2"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}
                  >
                    Lv.{index + 1}
                  </span>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide text-left sm:text-justify">
                    {section.content}
                  </p>
                </div>

                {/* Image */}
                <img
                  src={section.image_url}
                  alt={`${section.title} image`}
                  className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto opacity-90 pixelated"
                />
              </motion.div>
            ))}
            <PixelClicker />
          </div>
        </div>
      </div>
    </main>
  );
}
