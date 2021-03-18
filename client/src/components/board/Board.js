import Tile from "../tile";
import { useEffect, useState } from "react";
import { equals } from "./utils";

const Board = (props) => {
  const [board, setBoard] = useState(props.initialConfiguration);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const checkWin = () => {
      const winBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
      if (equals(board, winBoard)) {
        props.onSolveCallback(moves);
      }
    };
    checkWin();
  }, [moves]);

  const tryToMoveTile = (index) => {
    if (props.playing && canMoveTile(index)) {
      const emptyIndex = board.indexOf(0);
      let boardAfterMove = [...board];
      boardAfterMove[index] = 0;
      boardAfterMove[emptyIndex] = board[index];
      setBoard(boardAfterMove);
      setMoves((prev) => prev + 1);
    }
  };

  const canMoveTile = (index) => {
    const tileIndex = index;
    const emptyIndex = board.indexOf(0);

    if (tileIndex + 1 === emptyIndex || tileIndex - 1 === emptyIndex) {
      return true;
    }

    if (tileIndex + 4 < 16 || tileIndex - 4 > 0) {
      if (tileIndex + 4 === emptyIndex || tileIndex - 4 === emptyIndex) {
        return true;
      }
    }

    return false;
  };

  const renderBoard = () => {
    return board.map((val, index) => {
      return val === 0 ? (
        <Tile key={`tile-${index}`} val={val} class={"empty"} />
      ) : (
        <Tile
          key={`tile-${index}`}
          val={val}
          tryToMove={() => tryToMoveTile(index)}
        />
      );
    });
  };

  return <div className="board">{renderBoard()}</div>;
};
export default Board;
