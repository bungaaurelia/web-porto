import React, { useState, useEffect } from "react";

const ROWS = 15;
const COLS = 10;
const BLOCK_SIZE = 30;

const createGrid = () =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(0));

const shapes = [
  [
    [1, 1],
    [1, 1],
  ],
  [[1], [1], [1], [1]],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
];

const randomShape = () => shapes[Math.floor(Math.random() * shapes.length)];

export default function TetrisGame() {
  const [grid, setGrid] = useState(createGrid());
  const [current, setCurrent] = useState({
    shape: randomShape(),
    row: 0,
    col: 3,
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play();
  };

  const drawShape = (shape, row, col, gridCopy) => {
    shape.forEach((r, i) => {
      r.forEach((val, j) => {
        if (
          val &&
          row + i >= 0 &&
          row + i < ROWS &&
          col + j >= 0 &&
          col + j < COLS
        ) {
          gridCopy[row + i][col + j] = val;
        }
      });
    });
  };

  const canMove = (shape, row, col) =>
    shape.every((r, i) =>
      r.every((val, j) => {
        if (val === 0) return true;
        const newRow = row + i;
        const newCol = col + j;
        return (
          newRow >= 0 &&
          newRow < ROWS &&
          newCol >= 0 &&
          newCol < COLS &&
          grid[newRow][newCol] === 0
        );
      })
    );

  const clearFullRows = (gridCopy) => {
    const newGrid = gridCopy.filter((row) => row.some((cell) => cell === 0));
    const rowsCleared = ROWS - newGrid.length;
    const emptyRows = Array.from({ length: rowsCleared }, () =>
      Array(COLS).fill(0)
    );
    return {
      updatedGrid: [...emptyRows, ...newGrid],
      scoreGained: rowsCleared,
    };
  };

  const spawnShape = () => {
    const newShape = randomShape();
    const startCol = Math.floor((COLS - newShape[0].length) / 2);
    const spawnable = canMove(newShape, 0, startCol);
    if (!spawnable) {
      setGameOver(true);
      playSound("/sounds/running_over.mp3");
    } else {
      setCurrent({ shape: newShape, row: 0, col: startCol });
    }
  };

  const placeShape = () => {
    const frozenGrid = grid.map((r) => [...r]);
    drawShape(current.shape, current.row, current.col, frozenGrid);

    const { updatedGrid, scoreGained } = clearFullRows(frozenGrid);
    setScore((prev) => prev + scoreGained * 10);
    if (scoreGained > 0) {
      playSound("/sounds/running_score.mp3");
    }
    setGrid(updatedGrid);

    spawnShape();
  };

  const moveDown = () => {
    const { shape, row, col } = current;
    if (canMove(shape, row + 1, col)) {
      setCurrent({ ...current, row: row + 1 });
    } else {
      placeShape();
    }
  };

  const moveHorizontally = (dir) => {
    const { shape, row, col } = current;
    const newCol = col + dir;
    if (canMove(shape, row, newCol)) {
      setCurrent({ ...current, col: newCol });
    }
  };

  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(moveDown, 500);
    return () => clearInterval(interval);
  }, [current, grid, started, gameOver]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!started || gameOver) return;

      if (e.key === "ArrowLeft") moveHorizontally(-1);
      if (e.key === "ArrowRight") moveHorizontally(1);
      if (e.key === "ArrowDown") moveDown();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, grid, started, gameOver]);

  const handleRestart = () => {
    setGrid(createGrid());
    setScore(0);
    setGameOver(false);
    setStarted(false);
    setCurrent({ shape: randomShape(), row: 0, col: 3 });
  };

  const renderGrid = () => {
    const displayGrid = grid.map((r) => [...r]);
    if (!gameOver && started) {
      drawShape(current.shape, current.row, current.col, displayGrid);
    }

    return displayGrid.map((row, i) => (
      <div key={i} style={{ display: "flex" }}>
        {row.map((cell, j) => (
          <div
            key={j}
            style={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
              backgroundColor: cell ? "deepskyblue" : "black",
              border: "1px solid #222",
            }}
          />
        ))}
      </div>
    ));
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        width: COLS * BLOCK_SIZE,
        backgroundColor: "#111",
        padding: 10,
        display: "inline-block",
        position: "relative",
      }}
    >
      {!started && !gameOver && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-center p-4"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "0.75rem",
          }}
        >
          <h1 className="font-bold mb-3 text-sm">🎮 Tetris Game 🎮</h1>
          <p className="mb-4 text-green-400 text-xs">Move with arrow keys!</p>
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded shadow hover:bg-yellow-400 transition text-xs"
            onClick={() => {
              setStarted(true);
              playSound("/sounds/running_start.mp3");
            }}
          >
            Start Game
          </button>
        </div>
      )}

      {started && !gameOver && (
        <p
          className="text-white text-xs mb-4"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Skor: {score}
        </p>
      )}

      {gameOver && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-center p-4"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "0.75rem",
          }}
        >
          <h1 className="text-green-400 font-bold mb-2 text-sm">Game Over</h1>
          <p className="mb-4 text-xs">Final Score: {score}</p>
          <button
            className="bg-yellow-500 text-black px-4 py-1 rounded text-xs"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      )}

      {renderGrid()}
    </div>
  );
}
