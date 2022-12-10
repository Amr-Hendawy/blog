import { useState } from "react";

const Home = () => {
  let [name, setname] = useState("amr");
  let [Age, setAge] = useState(25);

  const changeName = () => {
    setname("Mera");
    console.log(name);
  };
  const changeAge = () => {
    setAge(30);
  };

  return (
    <div className="home">
      <h2>
        {name} {Age}
      </h2>
      <button onClick={(changeName, changeAge)}>CLick Me</button>
      <button>click me again</button>
    </div>
  );
};

export default Home;
