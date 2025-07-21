import React, { useEffect, useState } from "react";

const blockImages = [
  "/blocks/block1.png",
  "/blocks/block2.png",
  "/blocks/block3.png",
  "/blocks/block4.png",
  "/blocks/block5.png",
  "/blocks/block6.png",
  "/blocks/block7.png",
  "/blocks/block8.png",
  "/blocks/block9.png",
  "/blocks/block10.png",
  "/blocks/block11.png",
];

interface Block {
  id: number;
  top: number;
  left: number;
  size: number;
  image: string;
  rotate: number;
}

const TetrisBackground: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const newBlocks: Block[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 24 + Math.random() * 32,
      image: blockImages[Math.floor(Math.random() * blockImages.length)],
      rotate: Math.random() * 360,
    }));
    setBlocks(newBlocks);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {blocks.map((block) => (
        <img
          key={block.id}
          src={block.image}
          alt="tetris block"
          className="absolute opacity-20 mix-blend-soft-light"
          style={{
            top: `${block.top}%`,
            left: `${block.left}%`,
            width: `${block.size}px`,
            transform: `rotate(${block.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default TetrisBackground;
