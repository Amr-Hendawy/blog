import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create/Create";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {" "}
            <Route exact path="/">
              <Home />
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
