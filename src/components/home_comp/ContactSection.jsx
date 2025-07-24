const ContactSection = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-2 flex justify-center">
      <div className="relative flex flex-col md:flex-row bg-gradient-to-b from-white/15 via-white/0 to-transparent rounded-tr-none rounded-br-2xl rounded-bl-2xl rounded-tl-2xl p-6 md:p-10 max-w-6xl w-full text-pureWhite shadow-lg">
    <div className="absolute -top-10 -right-0 z-20">
      <div className="relative w-40 h-10 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
        <p
          className="text-lg"
          style={{ fontFamily: "'Futuristic Armour', sans-serif" }}
        >
          Stay In Touch
        </p>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-white/10" />
      </div>
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <p className="text-sm md:text-base font-light leading-relaxed">
        You can reach me! Feel free to send me a letter, or just say hi!
        <br />
        Let's be friends! ❤️
      </p>
      <a
        href="/letters"
        className="inline-block mt-6 self-start bg-neonBlue hover:bg-neonBlue/50 text-white px-5 py-2 rounded-full transition duration-300 font-bold"
      >
        Write Me a Letter →
      </a>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
      <div className="absolute inset-0 max-w-[320px] w-full h-full blur-md opacity-50">
        <img
          src="/letter.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <img
        src="/letter.png"
        alt="letter"
        className="relative z-10 rounded-xl object-cover max-w-[320px] w-full h-auto"
      />
    </div>
  </div>
</section>

  );
};
export default ContactSection;
