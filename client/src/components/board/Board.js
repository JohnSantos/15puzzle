import Tile from "../tile";

const Board = (props) => {
  const renderBoard = () => {
    return props.initialConfiguration.map((val) => {
      return <Tile val={val} />;
    });
  };

  return <div className="board">{renderBoard()}</div>;
};
export default Board;
