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
      name: "John Smith",
      Age: 25,
      job: "German Guide",
    },
    {
      id: 3,
      name: "Mike Revolds",
      Age: 41,
      job: "Doctor",
    },
  ]);

  return (
    <div className="home">
      <button>click me again</button>
    </div>
  );
};

export default Home;
