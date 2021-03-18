import HighscoreTable from "../../components/highscoretable";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Highscore = () => {
  return (
    <div className="highscore">
      <HighscoreTable />
      <Link to="/">
        <Button variant="contained" color="primary">
          New Game
        </Button>
      </Link>
    </div>
  );
};

export default Highscore;
