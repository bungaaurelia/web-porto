import React, { useEffect, useRef, useState } from "react";

const TreasureHuntGame = () => {
  const [playerX, setPlayerX] = useState(50);
  const [playerY, setPlayerY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [jumpPhase, setJumpPhase] = useState("idle");
  const playerRef = useRef(null);

  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isStarted && !isGameOver) {
        setObstacles((prev) => {
          const moved = prev
            .map((obs) => ({ ...obs, x: obs.x - 5 }))
            .filter((obs) => obs.x + 20 > 0);

          const minDistance = 10;
          const rightMostX = Math.max(...moved.map((o) => o.x), 0);
          if (300 - rightMostX > minDistance && Math.random() < 0.1) {
            moved.push({ x: 800 + Math.random() * 100 });
          }

          const playerWidth = 44;
          const playerHeight = 20;
          const obstacleWidth = 44;
          const obstacleHeight = 20;

          let scored = 0;
          let collided = false;

          const updatedObstacles = moved.map((obs) => {
            const playerBottom = playerY;
            const playerTop = playerBottom + playerHeight;
            const playerLeft = playerX;
            const playerRight = playerX + playerWidth;

            const obstacleBottom = 17;
            const obstacleTop = obstacleBottom + obstacleHeight;
            const obstacleLeft = obs.x;
            const obstacleRight = obs.x + obstacleWidth;

            const isColliding =
              playerRight > obstacleLeft &&
              playerLeft < obstacleRight &&
              playerTop > obstacleBottom &&
              playerBottom < obstacleTop;

            if (isColliding && !isGameOver) {
              collided = true;
            }

            if (obstacleRight < playerLeft && !obs.passed) {
              scored += 1;
              return { ...obs, passed: true };
            }

            return obs;
          });

          if (collided) {
            setIsGameOver(true);            
            playSound("/sounds/running_over.mp3");
          }
          if (scored > 0) {
            setScore((prevScore) => prevScore + scored);
            playSound("/sounds/running_score.mp3");
          }

          return updatedObstacles;
        });
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isGameOver, isStarted, playerX, playerY]);

  useEffect(() => {
    if (jumpPhase === "up" || jumpPhase === "top") {
      setPlayerY(130);
    } else {
      setPlayerY(0);
    }
  }, [jumpPhase]);

  const handleJump = () => {
    if (jumpPhase !== "idle" || isGameOver || !isStarted) return;
    setJumpPhase("up");
    setTimeout(() => {
      setJumpPhase("top");
      setTimeout(() => {
        setJumpPhase("down");
        setTimeout(() => {
          setJumpPhase("idle");
        }, 400);
      }, 600);
    }, 400);
  };

  const handleRestart = () => {
    setPlayerX(50);
    setPlayerY(0);
    setObstacles([]);
    setScore(0);
    setIsGameOver(false);
    setIsJumping(false);
    setIsStarted(false);
    setJumpPhase("idle");
  };

  return (
    <div
      className="flex flex-col items-center mt-10 mb-2 text-xs w-full"
      style={{ fontFamily: "'Press Start 2P', cursive" }}
    >
      <div
        className="mx-auto w-full max-w-5xl h-56 transparent bg-black/60 relative overflow-hidden rounded-lg px-10"
        onClick={handleJump}
      >
        {/* Player */}
        <img
          ref={playerRef}
          src="/man.png"
          alt="Player"
          className={`absolute bottom-0 w-16 h-16`}
          style={{
            left: `${playerX}px`,
            bottom: `${playerY}px`,
            transition: "bottom 0.3s",
          }}
        />

        {/* Obstacles */}
        {obstacles.map((obs, index) => (
          <img
            key={index}
            src="/mount.png"
            alt="Obstacle"
            className="absolute bottom-0 w-20 h-20"
            style={{ left: `${obs.x}px`, bottom: `-17px` }}
          />
        ))}

        {/* Score */}
        {isStarted && (
          <div
            className="absolute top-2 left-2 text-white px-3 py-1 rounded font-mono text-sm"
            style={{
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            Score: {score}
          </div>
        )}

        {/* Start Screen */}
        {!isStarted && !isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white"
          style={{ fontFamily: "'Press Start 2P', cursive" }}>
            <h1 className="text-lg font-bold mb-3"> Running Hunt💨</h1>
            <button
              className="bg-yellow-500 text-black px-5 py-2 rounded shadow hover:bg-yellow-400 transition"
              onClick={() => {
                setIsStarted(true);
                playSound("/sounds/running_start.mp3");
              }}
            >
              Start Game
            </button>
          </div>
        )}

        {/* Game Over */}
        {isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
            <h1 className="text-xl font-bold mb-2">Game Over</h1>
            <button
              className="bg-yellow-500 text-black px-4 py-1 rounded"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreasureHuntGame;
