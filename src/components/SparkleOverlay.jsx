export default function SparkleOverlay() {
  const sparkles = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 flex justify-center items-center z-40 pointer-events-none">
      <div className="relative w-full h-screen">
        {sparkles.map((_, i) => {
          const size = Math.random() * 10 + 8; 
          const left = Math.random() * 90;
          const top = Math.random() * 90;
          const delay = Math.random() * 1;

          return (
            <svg
              key={i}
              className="absolute animate-sparkle opacity-80"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: `radial-gradient(circle,#ceb26d 0%, transparent 80%)`,
                animationDelay: `${delay}s`,
                filter: 'drop-shadow(0 0 6px #CEB26D)',
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
              }}
                viewBox="0 0 24 24"
                fill="rgba(206, 178, 109, 0.8)"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5L12 2z" />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
