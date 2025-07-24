import { useEffect, useState } from "react";

const SoftHighlights = () => {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/projects");
        const data = await res.json();
        const shuffled = data.sort(() => Math.random() - 0.5);
        const randomThree = shuffled.slice(0, 3);
        setHighlights(randomThree);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlights();
  }, []);

  return (
    <section className="w-full py-10 px-4 sm:px-2 flex flex-col items-center">
      <div className="relative flex flex-col md:flex-row bg-gradient-to-b from-white/15 via-white/0 to-transparent rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-none p-6 md:p-10 max-w-8xl w-full text-pureWhite shadow-lg">
        <div className="absolute -top-10 -left-0 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-neonPurple to-neonBlue text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "'Futuristic Armour', sans-serif" }}
            >
              Soft Highlights
            </p>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl mt-8">

          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-neonPurple transition duration-300 border border-white/10 hover:border-neonPink/30"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-40 sm:h-48 object-cover"

              />
              <div className="p-4 text-pureWhite space-y-2">
                <h3
                  className="text-xl font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-md line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="col-span-full flex justify-end pt-4 sm:pt-6">

            <a
              href="/works"
              className="mt-4 mb-4 inline-block bg-neonBlue hover:bg-neonBlue/50 text-white px-5 py-2 rounded-full transition duration-300 text-sm w-fit font-bold"
            >
              Explore Further →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftHighlights;
