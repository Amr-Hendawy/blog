import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  const Style = {
    styles: { color: "green" },
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
