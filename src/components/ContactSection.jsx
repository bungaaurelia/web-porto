const ContactSection = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-2 flex justify-center">
      <div className="relative flex flex-col md:flex-row bg-white/10 rounded-tr-none rounded-br-2xl rounded-bl-2xl rounded-tl-2xl p-6 md:p-10 max-w-8xl w-full text-softPearl shadow-lg">
        <div className="absolute -top-10 -right-0 z-20">
          <div className="relative w-40 h-10 bg-gradient-to-r from-dustyRed to-crimsonDepth text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-lg"
              style={{ fontFamily: "'Quintessential', serif" }}
            >
              Stay In Touch
            </p>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>

        {/* Left: Text */}
        <div className="w-full md:w-1/1 flex flex-col justify-center">
          <div className="grid md:grid-cols-1 w-full">
            <p className="text-sm md:text-base font-light leading-relaxed font-light italic">
              You can reach me! Feel free to send me a letter, or just say hi! 
              <br />
              Let's be friends! ❤️
            </p>

          </div>
            <a
              href="/contact"
              className="inline-block mt-8 self-start bg-warmSand hover:bg-crimsonDepth/80 text-white px-5 py-2 rounded-full transition duration-300"
            >
              Write Me a Letter →
            </a>
        </div>

        {/* Right: Image */}

        <div className="w-full md:w-1/2 relative flex justify-center items-center mb-10">
          <div className="absolute w-[200px] h-[200px] blur-sm opacity-40 z-0 rounded-xl overflow-hidden">
            <img
              src="/letter.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <img
            src="/letter.png"
            alt="letter"
            className="relative z-10 rounded-xl object-cover h-[200px] w-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
