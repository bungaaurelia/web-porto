import React, { useEffect, useState } from "react";

const codeImages = [
  "/code.png",
];

interface Code {
  id: number;
  top: number;
  left: number;
  size: number;
  image: string;
  rotate: number;
}

const CodeBackground: React.FC = () => {
  const [codes, setCodes] = useState<Code[]>([]);

  useEffect(() => {
    const newCodes: Code[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 24 + Math.random() * 32,
      image: codeImages[Math.floor(Math.random() * codeImages.length)],
      rotate: Math.random() * 360,
    }));
    setCodes(newCodes);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {codes.map((code) => (
        <img
          key={code.id}
          src={code.image}
          alt="code bg"
          className="absolute opacity-20 mix-blend-soft-light xs:block"
          style={{
            top: `${code.top}%`,
            left: `${code.left}%`,
            width: `min(${code.size * 0.6}px, 16vw)`,
            transform: `rotate(${code.rotate}deg)`,
          }}

        />
      ))}
    </div>

  );
};

export default CodeBackground;
