const SectionButtons = () => {
  const buttons = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Journey", href: "/journey" },
    { label: "Works", href: "/works" },
    { label: "Letters", href: "/letters" },
  ];

  return (
    <section className="w-full bg-black px-4 sm:px-0">
      <div className="flex w-full flex-wrap sm:flex-nowrap">
        {buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.href}
            className="flex-1 min-w-[40%] sm:min-w-0 text-center px-2 py-2 sm:py-3 bg-neonBlue hover:bg-neonBlue/50 border border-darkGreen text-pureWhite font-medium transition-all duration-300 tracking-wide text-sm sm:text-base"
          >
            {btn.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectionButtons;
