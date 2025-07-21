import { useState, useEffect, use } from "react";

const techLogos = [
  { name: "React", image: "/skills/java.svg" },
  { name: "Supabase", image: "/skills/Spring_Boot.svg" },
  { name: "Tailwind", image: "/skills/js.png" },
  { name: "Next.js", image: "/skills/react.svg" },
  { name: "Node", image: "/skills/PHP.svg" },
  { name: "Figma", image: "/skills/Laravel.svg" },
];

const generateCards = () => {
  const duplicated = [...techLogos, ...techLogos];
  return duplicated
    .map((tech, index) => ({
      id: index,
      name: tech.name,
      image: tech.image,
      flipped: false,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
};

 const playSound = (src) => {
    const sound = new Audio(src);
    sound.play();
  };

export default function MemoryGame() {
  const [cards, setCards] = useState(generateCards());
  const [flipped, setFlipped] = useState([]);
  const [disableClick, setDisableClick] = useState(false);

  useEffect(() => {
    if (flipped.length === 2) {
      setDisableClick(true);

      setTimeout(() => {
        const [first, second] = flipped;
        if (cards[first].name === cards[second].name) {
          setCards((prev) =>
            prev.map((card, i) =>
              i === first || i === second ? { ...card, matched: true } : card
            )
          );
        } else {
          setCards((prev) =>
            prev.map((card, i) =>
              i === first || i === second ? { ...card, flipped: false } : card
            )
          );
        }
        setFlipped([]);
        setDisableClick(false);
      }, 900);
    }
  }, [flipped, cards]);

  const handleClick = (index) => {
    if (disableClick || cards[index].flipped || cards[index].matched) return;
    setCards((prev) =>
      prev.map((card, i) => (i === index ? { ...card, flipped: true } : card))
    );
    setFlipped((prev) => [...prev, index]);
  };

  const handleRestart = () => {
    setCards(generateCards());
    setFlipped([]);
    setDisableClick(false);
  };

  const isFinished = cards.every((card) => card.matched);

  useEffect(() => {
    if (isFinished) {
      playSound("/sounds/card_win.mp3");
    }
  }, [isFinished]);

  return (
    <div
      className="mt-24 text-neonBlue px-6 mb-5"
      style={{ fontFamily: "'Press Start 2P', cursive" }}
    >
      <h2 className="text-center text-xl mb-6">🃏 Memory Card Game 🃏</h2>
      <span className="flex flex-col items-center mb-5 text-xs md:text-xs pixel-font">
        Match the Cards!
      </span>

      <div className="relative">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => {
                handleClick(index);
                playSound("/sounds/card_flip.mp3");
              }}
              className={`cursor-pointer rounded-lg h-28 flex items-center justify-center shadow-lg transition duration-300 ${
                card.flipped || card.matched
                  ? "bg-yellow-300 text-black scale-105"
                  : "bg-black text-white"
              }`}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                boxShadow: card.matched ? "0 0 20px #00ffc3" : "",
              }}
            >
              {card.flipped || card.matched ? (
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-16 h-16 object-contain"
                />
              ) : (
                <span className="text-xl">?</span>
              )}
            </div>
          ))}
        </div>

        {isFinished && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 rounded-lg w-full max-w-3xl h-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            <div className="text-green-400 text-xl mb-4">All Matched!</div>
            <button
              className="bg-yellow-400 text-black px-4 py-2 rounded shadow hover:bg-yellow-300 transition"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
