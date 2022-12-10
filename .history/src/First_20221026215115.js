import "./First.css";

function App() {
  const text = "Hello in react course for absolute begginer";
  const num = 50;
  const obj = { id: 0, name: "Amr", age: 31 };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const link = "https://www.google.com";
  console.log(typeof num.toString());
  return (
    <div className="App">
      <div className="content">
        <h2 key={obj.id}>{obj.name}</h2>
        <h2>{arr`{name:amr}`}</h2>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
