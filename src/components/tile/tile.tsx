import React from "react";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { FaChessPawn } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaChessRook } from "react-icons/fa";
//WHITES//

import { FaRegChessBishop } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import "./tile.css";
import "../ChessboardStyle.css";

export interface Props {
  image?: string;
  number: number;
}

function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return <div className="tile black-tile"></div>;
  } else {
    return (
      <div className="tile white-tile">
        <img src={image} />
      </div>
    );
  }
}

export default Tile;
