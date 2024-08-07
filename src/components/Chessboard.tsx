import React from "react";
import "./ChessboardStyle.css";
import Tile from "./tile/tile";

const AxisY = ["1", "2", "3", "4", "5", "6", "7", "8"];
const AxisX = ["a", "b", "c", "d", "e", "f", "g", "h"];

function Chessboard() {
  let board = [];

  for (let j = AxisY.length - 1; j >= 0; j--) {
    for (let i = 0; i < AxisX.length; i++) {
      const number = i + j + 2;

      board.push(<Tile image="src/chessicons/peón_n.png" number={number} />);
    }
  }

  return (
    <div className="chessboard">
      <div className="board">{board}</div>
    </div>
  );
}

export default Chessboard;
