import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const PersonalPicks = () => {
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    const fetchPicks = async () => {
      const { data, error } = await supabase.from("personal_picks").select("*");

      console.log("Fetched personal picks:", data);
      if (error) {
        console.error("Supabase error:", error);
      } else if (data) {
        setPicks(data);
      }
    };

    fetchPicks();
  }, []);

  return (
    <section className="w-full py-10 px-4 sm:px-2 flex flex-col items-center">
      <div className="relative flex flex-col bg-gradient-to-b from-white/15 via-white/0 to-transparent rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-none p-6 md:p-10 px-4 md:px-16 max-w-8xl w-full text-pureWhite shadow-lg">
        <div className="absolute -top-10 -left-0 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "'Futuristic Armour', sans-serif" }}
            >
              Personal Picks
            </p>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>
        <p
          className="text-pureWhite text-lg md:text-xl text-center mb-6"
          style={{
            fontFamily: "Inter",
            fontSize: "1.125rem",
          }}
        >
          Here are some of my personal favorites, each a little piece of me ✧
        </p>

        {/* Swiper */}
        <div className="w-full mt-4 mb-6 flex justify-center">
          <div className="w-full max-w-[95%]">
            <Swiper
              key={picks.length}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              observer={true}
              observeParents={true}
              preloadImages={true}
              watchSlidesProgress={true}
              initialSlide={0}
              onInit={(swiper) => {
                setTimeout(() => {
                  swiper.update();
                }, 100);
              }}
              modules={[EffectCoverflow, Autoplay, Navigation]}
              className="w-full max-w-[95%] py-10"
            >
              {picks.map((item) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: "320px" }}
                  className="h-[420px] bg-white/10 rounded-2xl overflow-hidden shadow-lg text-pureWhite flex flex-col items-center justify-center"
                >
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />
                  <div className="p-4 text-center space-y-2">
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm italic font-light">{item.type}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <br />

        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/59xaQvD5GgiXQNxHN5YSfM?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default PersonalPicks;
