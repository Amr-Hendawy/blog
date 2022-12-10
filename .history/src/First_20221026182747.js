import "./First.css";

function App() {
  const text = "Hello in react course for absolute begginer";
  const num = 50;
  console.log(typeof num);
  return (
    <div className="App">
      <div className="content">
        <h1>Title:{text}</h1>
      </div>
    </div>
  );
}

export default App;
