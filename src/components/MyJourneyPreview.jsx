const journeyItems = [
  {
    year: "2018",
    title: "Curious Beginnings",
    quote: "College days, where curiosity sparked my coding journey.",
  },
  {
    year: "2020",
    title: "Late Nights, Debugging, Discovery",
    quote: "I found joy in building and solving. Helping others with code became what I loved most.",
  },
  {
    year: "2021",
    title: "The Craft",
    quote: "Started building my first real projects in internships, honing my skills.",
  },
  {
    year: "2022",
    title: "First Launch",
    quote: "Shifted to professional development, still messy but such a wonderful impact.",
  },
];

const MyJourneyPreview = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-2 flex flex-col items-center">
      <div className="relative flex flex-col md:flex-row bg-gradient-to-b from-white/15 via-white/0 to-transparent rounded-tr-none rounded-br-2xl rounded-bl-2xl rounded-tl-2xl p-6 md:p-10 max-w-8xl w-full text-pureWhite shadow-lg">
        <div className="absolute -top-10 -right-0 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "Futuristic ArmourFuturistic Armour" }}
            >
              Journey Preview
            </p>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>

        {/* Left: Text */}
        <div className="w-full md:w-1/1 flex flex-col justify-center px-1 mt-12">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 w-full">
            {journeyItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-neonPink/30 transition duration-300"
              >
                <h3 className="text-lg font-semibold" style={{ fontFamily: "Inter" }}>
                  {item.year} — {item.title}
                </h3>
                <p className="text-sm mt-2 font-light">{item.quote}</p>
              </div>
            ))}
            <a
              href="/journey"
              className="mt-4 inline-block bg-neonBlue hover:bg-neonBlue/50 text-white px-5 py-2 rounded-full transition duration-300 text-sm w-fit font-bold"
            >
              Read Full Journey →   
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center mb-10">
          <div className="absolute inset-0 blur-lg opacity-40 h-[360px] w-[380px]">
            <img
              src="/journey.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <img
            src="/journey.png"
            alt="journey"
            className="relative z-10 rounded-xl object-cover h-[300px] w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MyJourneyPreview;
