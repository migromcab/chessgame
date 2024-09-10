import { PieceType } from "../components/Chessboard";

export default class Referee {
  validMove(px: number, py: number, x: number, y: number, type: PieceType) {
    console.log("I am the referee");
    return true;
  }
}
