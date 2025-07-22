import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import "../styles/effects.css";
import PixelClicker from "../components/mini_games/PixelClicker";
import GemsBackground from "../components/background/GemsBackground";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("about_sections")
        .select("*")
        .order("order", { ascending: true });

      if (error) {
        console.error("Error fetching about data:", error);
      } else {
        setAboutData(data);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (!aboutData)
    return <p className="text-center text-white">No data found.</p>;

  return (
    <div className="relative min-h-screen bg-darkGreen text-white overflow-hidden">
      <GemsBackground />
      <div className="min-h-screen bg-darkGreen text-white px-6 py-12 space-y-36">
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
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center justify-between gap-10 md:gap-20 px-4`}
            >
              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4 text-justify">
                <span
                  className="bg-pink-500 text-white text-xs px-2 py-1 rounded-sm shadow-md inline-block mb-2"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  Lv.{index + 1}
                </span>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed tracking-wide ">
                  {section.content}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center relative min-h-[300px]">
                <img
                  src={section.image_url}
                  alt={`${section.title} image`}
                  className="w-72 md:w-96 h-auto opacity-90 pixelated"
                />
              </div>
            </motion.div>
          ))}
          <PixelClicker />
        </div>
      </div>
    </div>
  );
}
