import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/">
              {" "}
              <Home />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
