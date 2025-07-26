import { useEffect, useState } from "react";

const MyJourneyPreview = () => {
  const [journey, setJourney] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJourney = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/journey");
        const data = await res.json();
        const dataPreview = data.slice(-3);
        setJourney(dataPreview);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJourney();
  }, []);

  return (
    <section className="w-full py-10 px-4 sm:px-2 flex flex-col items-center">
      <div className="relative flex flex-col bg-gradient-to-b from-white/15 via-white/0 to-transparent rounded-tr-none rounded-br-2xl rounded-bl-2xl rounded-tl-2xl p-6 md:p-10 max-w-6xl w-full text-pureWhite shadow-lg gap-6">
        {/* Header Tag */}
        <div className="absolute -top-10 right-4 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "'Futuristic Armour', sans-serif" }}
            >
              Journey Preview
            </p>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col justify-center mt-12 md:mt-0">
          <div className="grid gap-6 sm:grid-cols-1 w-full">
            {journey.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-neonPink/30 transition duration-300"
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.year}
                </h3>
                <p className="text-sm mt-2 font-light">{item.title}</p>
              </div>
            ))}
          </div>
          <a
            href="/journey"
            className="mt-6 inline-block bg-neonBlue hover:bg-neonBlue/50 text-white px-5 py-2 rounded-full transition duration-300 text-sm w-fit font-bold"
          >
            Read Full Journey →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyJourneyPreview;
