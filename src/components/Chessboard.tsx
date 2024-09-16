import React, { useEffect, useReducer, useRef, useState } from "react";
import "./ChessboardStyle.css";
import Tile from "./tile/tile";
import { Value } from "sass";
import Referee from "../referee/referee";

const AxisY = ["1", "2", "3", "4", "5", "6", "7", "8"];
const AxisX = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  AxisX: number;
  AxisY: number;
  type: PieceType;
  team: TeamType;
}

export enum PieceType {
  PEON,
  ALFIL,
  CABALLO,
  TORRE,
  REY,
  REINA,
}

export enum TeamType {
  OPPONENT,
  OUR,
}

const pieces: Piece[] = [];

const firstBoardState: Piece[] = [];
for (let i = 0; i < 8; i++) {
  firstBoardState.push({
    image: "src/chessicons/peon_b.png",
    AxisX: i,
    AxisY: 6,
    type: PieceType.PEON,
    team: TeamType.OUR,
  });
}

for (let i = 0; i < 8; i++) {
  firstBoardState.push({
    image: "src/chessicons/peon_n.png",
    AxisX: i,
    AxisY: 1,
    type: PieceType.PEON,
    team: TeamType.OPPONENT,
  });
}

for (let p = 0; p < 2; p++) {
  const teamtype = p === 0 ? TeamType.OUR : TeamType.OPPONENT;
  const type = teamtype === TeamType.OUR ? "b" : "n";
  const y = teamtype === TeamType.OUR ? 7 : 0;

  firstBoardState.push({
    image: `src/chessicons/torre_${type}.png`,
    AxisX: 0,
    AxisY: y,
    type: PieceType.TORRE,
    team: teamtype,
  });
  firstBoardState.push({
    image: `src/chessicons/torre_${type}.png`,
    AxisX: 7,
    AxisY: y,
    type: PieceType.TORRE,
    team: teamtype,
  });
  firstBoardState.push({
    image: `src/chessicons/caballo_${type}.png`,
    AxisX: 1,
    AxisY: y,
    type: PieceType.CABALLO,
    team: teamtype,
  });
  firstBoardState.push({
    image: `src/chessicons/caballo_${type}.png`,
    AxisX: 6,
    AxisY: y,
    type: PieceType.CABALLO,
    team: teamtype,
  });
  firstBoardState.push({
    image: `src/chessicons/alfil_${type}.png`,
    AxisX: 2,
    AxisY: y,
    type: PieceType.ALFIL,
    team: teamtype,
  });
  firstBoardState.push({
    image: `src/chessicons/alfil_${type}.png`,
    AxisX: 5,
    AxisY: y,
    type: PieceType.ALFIL,
    team: teamtype,
  });
  firstBoardState.push({
    image: `src/chessicons/rey_${type}.png`,
    AxisX: 4,
    AxisY: y,
    type: PieceType.REY,
    team: teamtype,
  });
  firstBoardState.push({
    image: `src/chessicons/reina_${type}.png`,
    AxisX: 3,
    AxisY: y,
    type: PieceType.REINA,
    team: teamtype,
  });
}

function Chessboard() {
  const [activePiece, setactivePiece] = useState<HTMLElement | null>(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const [pieces, setPieces] = useState<Piece[]>(firstBoardState);
  const chessboardRef = useRef<HTMLElement>(null);
  const referee = new Referee();

  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    const chessboard = chessboardRef.current;

    if (element.classList.contains("chess-piece") && chessboard) {
      const gridX = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
      const gridY = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)
      );
      setGridX(gridX);
      setGridY(gridY);
      console.log(element);
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      setactivePiece(element);
    }
  }

  function movePiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 25;
      const minY = chessboard.offsetTop - 25;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";
      /*activePiece.style.left = `${x}px`;
      activePiece.style.top = `${y}px`;*/

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }

  function dropPiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const tileSize = 100;
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / tileSize);
      const y = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 800) / tileSize)
      );

      setPieces((value) => {
        const pieces = value.map((p) => {
          if (p.AxisX === gridX && p.AxisY === gridY) {
            referee.validMove(gridX, gridY, x, y, p.type, p.team);

            p.AxisX = x;
            p.AxisY = y;
          }
          return p;
        });
        return pieces;
      });
      setactivePiece(null);
    }
  }

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
        ref={chessboardRef}
      >
        {board}
      </div>
    </div>
  );
}

export default Chessboard;
