import "./App.css";

function App() {
  const Style = {
    styles: { color: "red" },
  };

  return (
    <div className="App">
      <div className="content">
        <h2 className={Style.styles}>Hello </h2>
      </div>
    </div>
  );
}

export default App;
