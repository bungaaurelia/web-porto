import React, { useEffect, useState } from "react";

const gameImages = [
  "/games/games1.png",
  "/games/games2.png",
  "/games/games3.png",
  "/games/games4.png",
  "/games/games5.png",
  "/games/games6.png",
  "/games/games7.png",
  "/games/games8.png",
  "/games/games9.png",
  "/games/games10.png",
  "/games/games11.png",
  "/games/games12.png",
];

interface Game {
  id: number;
  top: number;
  left: number;
  size: number;
  image: string;
  rotate: number;
}

const GamesBackground: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const newGames: Game[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 24 + Math.random() * 32,
      image: gameImages[Math.floor(Math.random() * gameImages.length)],
      rotate: Math.random() * 360,
    }));
    setGames(newGames);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {games.map((game) => (
        <img
          key={game.id}
          src={game.image}
          alt="games game"
          className="absolute opacity-20 mix-blend-soft-light xs:block"
          style={{  
            top: `${game.top}%`,
            left: `${game.left}%`,
            width: `min(${game.size * 0.6}px, 16vw)`,
            transform: `rotate(${game.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default GamesBackground;
