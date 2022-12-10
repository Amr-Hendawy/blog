import "./App.css";

function App() {
  const color = { color: "red" };
  return (
    <div className="App">
      <div className="content">
        <h2 className={color.color}>Hello </h2>
      </div>
    </div>
  );
}

export default App;
