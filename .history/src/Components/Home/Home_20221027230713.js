import { Agent } from "http";
import { useState } from "react";

const Home = () => {
  let [name, setname] = useState("amr");
  let [Age, setAge] = useState(25);

  const changeName = () => {
    setname("Mera");
  };
  const changeAge = () => {
    setAge(30);
  };
  return (
    <div className="home">
      <h2>{name}</h2>
      <button onClick={changeName}>CLick Me</button>
      <button>click me again</button>
    </div>
  );
};

export default Home;
