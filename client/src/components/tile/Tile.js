import { Button } from "@material-ui/core";

const Tile = (props) => {
  return (
    <div className={`tile ${props.class && "empty"}`}>
      <Button color="secondary" onClick={() => props.tryToMove(props.val)}>
        {props.val}
      </Button>
    </div>
  );
};

export default Tile;
