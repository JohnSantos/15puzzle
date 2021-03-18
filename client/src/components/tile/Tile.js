const Tile = (props) => {
  return (
    <div className={`tile ${props.class && "empty"}`}>
      <p>{props.val}</p>
    </div>
  );
};

export default Tile;
