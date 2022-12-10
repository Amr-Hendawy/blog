import "./First.css";

function App() {
  const text = "Hello in react course for absolute begginer";
  const num = 50;
  const obj = { name: "Amr", age: 31 };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(typeof num.toString());
  return (
    <div className="App">
      <div className="content">
        <h2 key>{obj}</h2>
        <h2>{arr}</h2>
      </div>
    </div>
  );
}

export default App;
