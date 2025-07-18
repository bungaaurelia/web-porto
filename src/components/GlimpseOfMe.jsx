const GlimpseOfMe = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-2 flex justify-center">
      <div className="relative flex flex-col md:flex-row bg-gradient-to-b from-white/15 via-white/0 to-transparent rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-none p-6 md:p-10 max-w-8xl w-full text-pureWhite shadow-lg">
        <div className="absolute -top-10 -left-0 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-neonPurple to-neonBlue text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-bold"
              style={{ fontFamily: "'Futuristic Armour', sans-serif" }}
            >
              Glimpse of Me
            </p>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>
        {/* Left: Image */}
        <div className="relative">
          <div className="absolute inset-0 blur-lg opacity-40 z-0">
            <img
              src="/silhouette.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <img
            src="/silhouette.png"
            alt="Aurelia"
            className="relative z-10 rounded-xl object-cover h-[300px] w-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-2/2 flex flex-col justify-center space-y-4 text-center md:text-left mt-6 py-4 md:mt-0 md:pl-20">
          <p className="text-md leading-relaxed mb-6">
            I’m Bunga - a developer who loves to think and learn about anything,
            especially in the world of technology. Besides writing code, I also
            enjoy writing, reading, and exploring beautiful lines of story in
            fantasy. This portfolio gonna be a living archive of my favorite
            things, thoughts, journey and creations of mine.
          </p>

          <ul className="text-md space-y-1">
            <li>
              👩‍💻 Love learn languages, not just programming languages but also
              human languages.{" "}
            </li>
            <li>📔 I'm drawn to fantasy novels from around the world.</li>
            <li>🎧 Enjoy various types of music!</li>
          </ul>
          <br /><br />
          <a
            href="/about"
            className="inline-block self-start bg-neonBlue hover:bg-neonBlue/50 text-white px-5 py-2 rounded-full transition duration-300 font-bold"
          >
            More About Me →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GlimpseOfMe;
