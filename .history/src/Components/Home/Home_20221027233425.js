import { useState } from "react";

const Home = () => {
  let [blogs, setBlogs] = useState([
    {
      id: 1,
      author: "Amr Hendawy",
      title: "Lorem Ipsum",
      body: "English Teacher",
    },
    {
      id: 2,
      author: "John Smith",
      title: "Lorem Ipsum",
      job: "German Guide",
    },
    {
      id: 3,
      author: "Mike Revolds",
      title: "Lorem Ipsum",
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
