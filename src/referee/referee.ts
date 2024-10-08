import { TeamType, PieceType, Piece } from "../components/Chessboard";
export default class Referee {
  tileoccupied(x: number, y: number, boardState: Piece[]): boolean {
    const piece = boardState.find((p) => p.AxisX === x && p.AxisY === y);
    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  invadedtile(
    x: number,
    y: number,
    boardState: Piece[],
    team: TeamType
  ): boolean {
    const piece = boardState.find(
      (p) => p.AxisX === x && p.AxisY === y && p.team !== team
    );
    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  validMove(
    px: number,
    py: number,
    x: number,
    y: number,
    type: PieceType,
    team: TeamType,
    boardState: Piece[]
  ) {
    /*  console.log("I am the referee");
    console.log(`Previous location:(${px},${py})`);
    console.log(`Current  location:(${x},${y})`);
    console.log(` Type:(${type})`);
    console.log(` Team:(${team})`);*/
    if (type === PieceType.PEON) {
      const specialrow = team === TeamType.OUR ? 6 : 1;
      const pawndirection = team === TeamType.OUR ? -1 : 1;

      // Movimiento inicial del peón desde la fila especial
      if (py === specialrow) {
        if (px === x && y - py === 2 * pawndirection) {
          if (
            !this.tileoccupied(x, y, boardState) &&
            !this.tileoccupied(x, y - pawndirection, boardState)
          ) {
            return true;
          }
        }
      }

      // Movimiento normal del peón de una casilla hacia adelante
      if (px === x && y - py === pawndirection) {
        if (!this.tileoccupied(x, y, boardState)) {
          return true;
        }
      }
      //ATAQUE A ESQUINA SUPERIOR IZQUIERDA
      else if (x - px === -1 && y - py === pawndirection) {
        console.log("ATTACK 1!!!");
        if (this.tileoccupied(x, y, boardState, team)) {
          return true;
        }
      } else if (x - px === 1 && y - py === pawndirection) {
        return true;
      }
    }

    return false;
  }
}
