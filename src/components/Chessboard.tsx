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

//TORRES//
pieces.push({
  image: "src/chessicons/torre_b.png",
  AxisX: 0,
  AxisY: 7,
});
pieces.push({
  image: "src/chessicons/torre_b.png",
  AxisX: 7,
  AxisY: 7,
});
pieces.push({
  image: "src/chessicons/torre_n.png",
  AxisX: 0,
  AxisY: 0,
});
pieces.push({
  image: "src/chessicons/torre_n.png",
  AxisX: 7,
  AxisY: 0,
});

//CABALLOS//
pieces.push({
  image: "src/chessicons/caballo_b.png",
  AxisX: 1,
  AxisY: 7,
});
pieces.push({
  image: "src/chessicons/caballo_b.png",
  AxisX: 6,
  AxisY: 7,
});
pieces.push({
  image: "src/chessicons/caballo_n.png",
  AxisX: 1,
  AxisY: 0,
});
pieces.push({
  image: "src/chessicons/caballo_n.png",
  AxisX: 6,
  AxisY: 0,
});
//ALFILES//
pieces.push({
  image: "src/chessicons/alfil_b.png",
  AxisX: 2,
  AxisY: 7,
});
pieces.push({
  image: "src/chessicons/alfil_b.png",
  AxisX: 5,
  AxisY: 7,
});
pieces.push({
  image: "src/chessicons/alfil_n.png",
  AxisX: 2,
  AxisY: 0,
});
pieces.push({
  image: "src/chessicons/alfil_n.png",
  AxisX: 5,
  AxisY: 0,
});
//REYES//
pieces.push({
  image: "src/chessicons/rey_b.png",
  AxisX: 4,
  AxisY: 7,
});
pieces.push({
  image: "src/chessicons/rey_n.png",
  AxisX: 4,
  AxisY: 0,
});
//REINAS//
pieces.push({
  image: "src/chessicons/reina_b.png",
  AxisX: 3,
  AxisY: 7,
});
pieces.push({
  image: "src/chessicons/reina_n.png",
  AxisX: 3,
  AxisY: 0,
});

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
