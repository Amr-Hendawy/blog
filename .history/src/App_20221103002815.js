import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create/Create";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
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
              <Route></Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs">
                <BlogDetails />
              </Route>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;