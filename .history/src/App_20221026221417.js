import "./App.css";

function App() {
  const Style ={
    h2:{ color: "red" };
  }
  
  return (
    <div className="App">
      <div className="content">
        <h2 className={{ color }}>Hello </h2>
      </div>
    </div>
  );
}

export default App;
