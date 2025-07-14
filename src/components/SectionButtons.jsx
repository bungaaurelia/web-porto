const SectionButtons = () => {
  const buttons = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Journey", href: "/journey" },
    { label: "Works", href: "/works" },
    { label: "Letters", href: "/contact" },
  ];

  return (
    <section className="w-full bg-softLilac/10 py-4 px-4 sm:px-12">
      <div className="flex w-full">
        {buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.href}
            className="flex-1 min-w-0 text-center px-2 py-3 bg-warmSand hover:bg-crimsonDepth border border-crimsonDepth text-softPearl font-medium rounded-none transition-all duration-300 tracking-wide"
          >
            {btn.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectionButtons;
