import { useState } from "react";
import Board from "../../components/board";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  const [initialConfiguration, setInitialConfiguration] = useState([]);
  const [userName, setUsername] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [solved, setSolved] = useState(false);

  const solvedCallback = async (mvs) => {
    setSolved(true);
    const endTime = Date.now();
    const time = endTime - startTime; // milliseconds
    const endpoint = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api/records`;

    await axios.post(endpoint, {
      name: userName,
      time,
      moves: mvs,
    });
    setPlaying(false);
  };

  const startGame = async () => {
    if (!userName) {
      alert("Please insert your username");
      return;
    }
    const endpoint = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api/game`;
    const res = await axios.get(endpoint);
    if (res && res.status === 200) {
      console.log("res", res.data.data);
      setPlaying(true);
      setInitialConfiguration(res.data.data);
      setStartTime(Date.now());
      setSolved(false);
    }
  };

  const handleFieldChange = (evt) => {
    setUsername(evt.target.value);
  };

  return (
    <div className="landingpage">
      {solved && (
        <Link to="/highscore">
          <Button variant="contained" color="primary">
            Leaderboard
          </Button>
        </Link>
      )}

      <h1>Welcome to 15-Puzzle</h1>
      <TextField
        id="outlined-required"
        required
        label="Inser username"
        value={userName}
        variant="outlined"
        onChange={handleFieldChange}
      />
      {!solved && (
        <Button variant="contained" color="secondary" onClick={startGame}>
          Start Game
        </Button>
      )}
      {solved && <h1>Victory !!</h1>}
      {initialConfiguration.length > 0 && (
        <Board
          initialConfiguration={initialConfiguration}
          onSolveCallback={solvedCallback}
          playing={playing}
        />
      )}
    </div>
  );
};

export default LandingPage;
