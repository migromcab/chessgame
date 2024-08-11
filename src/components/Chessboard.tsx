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

      board.push(<Tile image={image} number={number} />);
    }
  }

  return (
    <div className="chessboard">
      <div className="board">{board}</div>
    </div>
  );
}

export default Chessboard;
