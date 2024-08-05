import React from "react";
import "./ChessboardStyle.css";

const AxisY = ["1", "2", "3", "4", "5", "6", "7", "8"];
const AxisX = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {
  let board = [];

  for (let j = AxisY.length - 1; j >= 0; j--) {
    for (let i = 0; i < AxisX.length; i++) {
      board.push(
        <div className="tiles">
          {AxisX[i]}
          {AxisY[j]}
        </div>
      );
    }
  }

  return (
    <div className="chessboard">
      <div className="table">{board}</div>
    </div>
  );
}
