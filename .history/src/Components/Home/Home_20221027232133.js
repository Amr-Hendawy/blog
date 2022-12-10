import { useState } from "react";

const Home = () => {
  let [name, setname] = useState("amr");

  return (
    <div className="home">
      <button>click me again</button>
    </div>
  );
};

export default Home;
