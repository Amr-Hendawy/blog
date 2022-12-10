import { useState } from "react";

const Home = () => {
  let [blogs, setBlogs] = useState([
    {
      id: 1,
      name: "Amr Hendawy",
      Age: 30,
      job: "Englihs Teacher",
    },
    {
      id: 1,
      name: "Amr Hendawy",
      Age: 30,
      job: "Englihs Teacher",
    },
    {
      id: 1,
      name: "Amr Hendawy",
      Age: 30,
      job: "Englihs Teacher",
    },
  ]);

  return (
    <div className="home">
      <button>click me again</button>
    </div>
  );
};

export default Home;
