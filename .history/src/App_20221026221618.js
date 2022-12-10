import "./App.css";

function App() {
  const Style = {
    styles: { color: "green" },
  };

  return (
    <div className="App">
      <div className="content">
        <h2 className="test" style={{ color: "blue" }}>
          Hello{" "}
        </h2>
      </div>
    </div>
  );
}

export default App;
