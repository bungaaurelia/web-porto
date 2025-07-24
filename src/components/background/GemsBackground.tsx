import React, { useEffect, useState } from "react";

const gemImages = [
  "/gems/bg-gems1.png",
  "/gems/bg-gems2.png",
  "/gems/bg-gems3.png",
  "/gems/bg-gems4.png",
  "/gems/bg-gems5.png",
  "/gems/bg-gems6.png",
  "/gems/bg-gems7.png",
  "/gems/bg-gems8.png",
  "/gems/bg-gems9.png",
  "/gems/bg-gems10.png",
  "/gems/bg-gems11.png",
  "/gems/bg-gems12.png",
];

interface Gem {
  id: number;
  top: number;
  left: number;
  size: number;
  image: string;
  rotate: number;
}

const GemsBackground: React.FC = () => {
  const [gems, setGems] = useState<Gem[]>([]);

  useEffect(() => {
    const newGems: Gem[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 24 + Math.random() * 32,
      image: gemImages[Math.floor(Math.random() * gemImages.length)],
      rotate: Math.random() * 360,
    }));
    setGems(newGems);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {gems.map((gem) => (
        <img
          key={gem.id}
          src={gem.image}
          alt="gems gem"
          className="absolute opacity-20 mix-blend-soft-light xs:block"
          style={{  
            top: `${gem.top}%`,
            left: `${gem.left}%`,
             width: `min(${gem.size * 0.6}px, 16vw)`,
            transform: `rotate(${gem.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default GemsBackground;
