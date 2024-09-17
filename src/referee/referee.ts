import { TeamType, PieceType } from "../components/Chessboard";

export default class Referee {
  validMove(
    px: number,
    py: number,
    x: number,
    y: number,
    type: PieceType,
    team: TeamType
  ) {
    console.log("I am the referee");
    console.log(`Previous location:(${px},${py})`);
    console.log(`Current  location:(${x},${y})`);
    console.log(` Type:(${type})`);
    console.log(` Team:(${team})`);

    if (type === PieceType.PEON) {
      if (team === TeamType.OUR) {
        if (py === 6) {
          if (px === x && (py - y === 1 || py - y === 2)) {
            return true;
          }
        } else {
          if (px === x && py - y === 1) {
            return true;
          }
        }
      }
    }
    if (type === PieceType.PEON) {
      if (team === TeamType.OPPONENT) {
        if (py === 1) {
          if (px === x && (y - py === 1 || y - py === 2)) {
            return true;
          }
        } else {
          if (px === x && y - py === 1) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
