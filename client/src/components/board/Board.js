import Tile from "../tile";

const Board = (props) => {
  const renderBoard = () => {
    return props.initialConfiguration.map((val) => {
      return val === 0 ? (
        <Tile val={val} class={"empty"} />
      ) : (
        <Tile val={val} />
      );
    });
  };

  return <div className="board">{renderBoard()}</div>;
};
export default Board;
