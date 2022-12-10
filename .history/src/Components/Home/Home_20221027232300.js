import { useState } from "react";

const Home = () => {
  let [blogs, setBlogs] = useState([
    {
      id: 1,
      name: "Amr Hendawy",
      Age: 30,
      job: "English Teacher",
    },
    {
      id: 2,
      name: "Amr Hendawy",
      Age: 25,
      job: "Englihs Teacher",
    },
    {
      id: 3,
      name: "Amr Hendawy",
      Age: 41,
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
