import React from "react";
import "./tile.css";

interface Props {
  number: number;
}

function Tile({ number }: Props) {
  if (number % 2 === 0) {
    return <div className="tile black-tile">Tile</div>;
  } else {
    return <div className="tile white-tile">Tile</div>;
  }
}

export default Tile;
