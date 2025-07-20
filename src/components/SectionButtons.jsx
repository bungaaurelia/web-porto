const SectionButtons = () => {
  const buttons = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Journey", href: "/journey" },
    { label: "Works", href: "/works" },
    { label: "Letters", href: "/contact" },
  ];

  return (
    <section className="w-full bg-black px-4 sm:px-0">
      <div className="flex w-full">
        {buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.href}
            className="flex-1 min-w-0 text-center px-2 py-3 bg-neonBlue hover:bg-neonBlue/50 border border-darkGreen text-pureWhite font-medium rounded-none transition-all duration-300 tracking-wide"
          >
            {btn.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectionButtons;
