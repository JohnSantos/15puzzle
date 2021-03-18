import LandingPage from "./pages/landingpage";
import Highscore from "./pages/highscore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/highscore">
          <Highscore />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
