import { useState } from "react";

const Home = () => {
  let [name, setname] = useState("amr");

  return (
    <div className="home">
      <h2>{`my name is ${name} and my age is ${Age}`}</h2>
      <button>click me again</button>
    </div>
  );
};

export default Home;
