const highlightItems = [
  {
    title: "Elegance in Simplicity",
    description:
      "UI redesign for a productivity app — soft curves, muted tones, and a calm interface for better focus.",
    image: "/highlights/ui-redesign.png",
  },
  {
    title: "Whispers of Java",
    description:
      "A tiny web app built with Java & Spring Boot — a quiet solution to repetitive HR tasks.",
    image: "/highlights/java-app.png",
  },
  {
    title: "Midnight Memory Archive",
    description:
      "Static site for a personal journal — where code meets poetry under a violet sky.",
    image: "/highlights/midnight-journal.png",
  },
];

const SoftHighlights = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-2 flex flex-col items-center">
      <div className="relative flex flex-col md:flex-row bg-white/10 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-none p-6 md:p-10 max-w-8xl w-full text-softPearl shadow-lg">
        <div className="absolute -top-10 -left-0 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-crimsonDepth to-dustyRed text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "'Quintessential', serif" }}
            >
              Soft Highlights
            </p>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-7xl mt-8">
          {highlightItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-crimsonDepth/30 transition duration-300 border border-white/10 hover:border-warmSand/30"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-softPearl space-y-2">
                <h3 className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm font-light italic">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="col-span-full flex justify-end">
            <a
              href="/projects"
              className="mt-4 mb-4 inline-block bg-warmSand hover:bg-crimsonDepth/80 text-white px-5 py-2 rounded-full transition duration-300 text-sm w-fit"
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
