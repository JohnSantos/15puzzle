import { useState } from "react";
import Board from "../../components/board";

const LandingPage = () => {
  const [initialConfiguration, setInitialConfiguration] = useState([
    1,
    2,
    0,
    4,
    5,
    6,
    3,
    8,
    9,
    10,
    7,
    12,
    13,
    14,
    11,
    15,
  ]);

  const solvedCallback = () => {
    console.log("GREAT SUCCESS!!");
    return true;
  };

  return (
    <div className="landingpage">
      <Board
        initialConfiguration={initialConfiguration}
        onSolveCallback={() => solvedCallback()}
      />
    </div>
  );
};

export default LandingPage;
