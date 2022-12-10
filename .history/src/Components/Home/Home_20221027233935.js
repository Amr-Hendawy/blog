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
      body: "German Guide",
    },
    {
      id: 3,
      author: "Mike Revolds",
      title: "Lorem Ipsum",
      body: "Doctor",
    },
  ]);

  return (
    <div className="home">
      {blogs.map((el) => (
        <div className="blog-preview" key={el.id}>
          {el.title}
        </div>
      ))}
    </div>
  );
};

export default Home;
