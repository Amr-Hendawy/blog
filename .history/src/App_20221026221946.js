import "./App.css";

function App() {
  const Style = {
    styles: { color: "green" },
  };

  return (
    <div className="App">
      <div className="content">
        <h2 className="test" style={Style.styles}>
          Hello{" "}
        </h2>
      </div>
    </div>
  );
}

export default App;
