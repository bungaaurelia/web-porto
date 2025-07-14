const skills = [
  { name: 'HTML', image: '/skills/html.png' },
  { name: 'CSS', image: '/skills/css.png' },
  { name: 'JavaScript', image: '/skills/javascript.png' },
  { name: 'React', image: '/skills/react.png' },
  { name: 'Tailwind', image: '/skills/tailwind.png' },
  { name: 'Supabase', image: '/skills/supabase.png' },
  { name: 'HTML', image: '/skills/html.png' },
  { name: 'CSS', image: '/skills/css.png' },
  { name: 'JavaScript', image: '/skills/javascript.png' },
  { name: 'React', image: '/skills/react.png' },
  { name: 'Tailwind', image: '/skills/tailwind.png' },
  { name: 'Supabase', image: '/skills/supabase.png' },
  { name: 'React', image: '/skills/react.png' },
  { name: 'Tailwind', image: '/skills/tailwind.png' },
  { name: 'Supabase', image: '/skills/supabase.png' },
];

const SkillsGrid = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-2 flex flex-col items-center">
      <div className="relative flex flex-col bg-white/10 rounded-tr-none rounded-br-2xl rounded-bl-2xl rounded-tl-2xl p-6 md:p-10 px-4 md:px-16 max-w-8xl w-full text-softPearl shadow-lg">
        <div className="absolute -top-10 -right-0 z-20">
          <div className="relative w-60 h-10 bg-gradient-to-r from-dustyRed to-crimsonDepth text-white font-semibold tracking-wide flex items-center justify-center shadow-md rounded-tr-lg rounded-tl-lg">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "'Quintessential', serif" }}
            >
              Tools
            </p>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-white/10" />
          </div>
        </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="group relative flex flex-col items-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 p-2 backdrop-blur-md border border-white/10 transition duration-300 group-hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)]">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="absolute mt-28 text-sm opacity-0 group-hover:opacity-100 transition duration-300 text-softPearl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
