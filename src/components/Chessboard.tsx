import React from "react";
import "./ChessboardStyle.css";
import Tile from "./tile/tile";

const AxisY = ["1", "2", "3", "4", "5", "6", "7", "8"];
const AxisX = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  AxisX: number;
  AxisY: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({
    image: "src/chessicons/peon_b.png",
    AxisX: i,
    AxisY: 6,
  });
}

for (let i = 0; i < 8; i++) {
  pieces.push({
    image: "src/chessicons/peon_n.png",
    AxisX: i,
    AxisY: 1,
  });
}

for (let p = 0; p < 2; p++) {
  const type = p === 0 ? "b" : "n";
  const y = p === 0 ? 7 : 0;

  pieces.push({
    image: `src/chessicons/torre_${type}.png`,
    AxisX: 0,
    AxisY: y,
  });
  pieces.push({
    image: `src/chessicons/torre_${type}.png`,
    AxisX: 7,
    AxisY: y,
  });
  pieces.push({
    image: `src/chessicons/caballo_${type}.png`,
    AxisX: 1,
    AxisY: y,
  });
  pieces.push({
    image: `src/chessicons/caballo_${type}.png`,
    AxisX: 6,
    AxisY: y,
  });
  pieces.push({
    image: `src/chessicons/alfil_${type}.png`,
    AxisX: 2,
    AxisY: y,
  });
  pieces.push({
    image: `src/chessicons/alfil_${type}.png`,
    AxisX: 5,
    AxisY: y,
  });
  pieces.push({
    image: `src/chessicons/rey_${type}.png`,
    AxisX: 4,
    AxisY: y,
  });
  pieces.push({
    image: `src/chessicons/reina_${type}.png`,
    AxisX: 3,
    AxisY: y,
  });
}

let activePiece: HTMLElement | null = null;

function grabPiece(e: React.MouseEvent) {
  const element = e.target as HTMLElement;
  if (element.classList.contains("chess-piece")) {
    console.log(element);
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  }
  activePiece = element;
}

function movePiece(e: React.MouseEvent) {
  if (activePiece) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
}

function dropPiece(e: React.MouseEvent) {
  if (activePiece) {
    activePiece = null;
  }
}

function Chessboard() {
  let board = [];

  for (let j = AxisY.length - 1; j >= 0; j--) {
    for (let i = 0; i < AxisX.length; i++) {
      const number = i + j + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.AxisX === i && p.AxisY === j) {
          image = p.image;
        }
      });

      board.push(<Tile key={`${i},${j}`} image={image} number={number} />);
    }
  }

  return (
    <div className="chessboard">
      <div
        onMouseMove={(e) => movePiece(e)}
        onMouseDown={(e) => grabPiece(e)}
        onMouseUp={(e) => dropPiece(e)}
        className="board"
      >
        {board}
      </div>
    </div>
  );
}

export default Chessboard;
