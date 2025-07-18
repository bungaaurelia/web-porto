"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SkillsGrid = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
      );
      const { data, error } = await supabase.from("skills").select("*");

      // console.log("Fetched skills:", data);
      if (error) console.error("Supabase error:", error);
      else setSkills(data);
    };

    fetchSkills();
  }, []);

  return (
    <section className="w-full py-10 px-4 sm:px-2 flex flex-col items-center">
      <div className="relative flex flex-col bg-gradient-to-b from-white/15 via-white/0 to-transparent rounded-tr-none rounded-br-2xl rounded-bl-2xl rounded-tl-2xl p-6 md:p-10 px-4 md:px-16 max-w-8xl w-full text-pureWhite shadow-lg">
        <div className="absolute -top-10 -right-0 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "'Futuristic Armour', sans-serif" }}
            >
              Tools
            </p>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex flex-col items-center mb-6"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 border border-white transition duration-300 group-hover:shadow-[0_0_15px_20px_rgba(255,255,255,0.3)]">
                <img
                  src={skill.icon_url}
                  alt={skill.name}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span
                className="absolute mt-28 text-sm opacity-0 group-hover:opacity-100 transition duration-300 text-pureWhite font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
