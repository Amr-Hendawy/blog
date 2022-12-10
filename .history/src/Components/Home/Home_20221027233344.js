import { useState } from "react";

const Home = () => {
  let [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Amr Hendawy",
      body: 30,
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
      {blogs.map((el) => (
        <div key={el.id}>{el.job}</div>
      ))}
    </div>
  );
};

export default Home;
