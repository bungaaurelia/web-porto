import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

const picks = [
  { title: "The Night Circus", type: "Novel", image: "/dummy1.png" },
  { title: "Hotel Del Luna", type: "Drama", image: "/dummy2.png" },
  { title: "Spirited Away", type: "Movie", image: "/dummy3.png" },
  { title: "The Night Circus", type: "Novel", image: "/dummy1.png" },
  { title: "Hotel Del Luna", type: "Drama", image: "/dummy2.png" },
  { title: "Spirited Away", type: "Movie", image: "/dummy3.png" },
  { title: "The Night Circus", type: "Novel", image: "/dummy4.png" },
  { title: "Hotel Del Luna", type: "Drama", image: "/dummy5.png" },
  { title: "Spirited Away", type: "Movie", image: "/dummy6.png" },
  { title: "Spirited Away", type: "Movie", image: "/dummy7.png" },
];

const PersonalPicks = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-2 flex flex-col items-center">
      <div className="relative flex flex-col bg-white/10 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-none p-6 md:p-10 px-4 md:px-16 max-w-8xl w-full text-softPearl shadow-lg">
        <div className="absolute -top-10 -left-0 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-dustyRed to-crimsonDepth text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "'Quintessential', serif" }}
            >
              Personal Picks
            </p>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>
        <p
          className="text-softPearl text-lg md:text-xl italic text-center mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem" }}
        >
        Here are some of my personal favorites, each a little piece of me ✧
        </p>

        {/* Swiper goes here */}
        <div className="w-full flex justify-center mt-4 mb-6">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000 }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="w-full max-w-[95%] py-10"
          >
            {picks.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className="w-[390px] h-[420px] bg-white/10 rounded-2xl overflow-hidden shadow-lg text-softPearl flex flex-col items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center space-y-2">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm italic font-light">{item.type}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
