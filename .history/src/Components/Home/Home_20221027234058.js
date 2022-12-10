import { useState } from "react";

const Home = () => {
  let [blogs, setBlogs] = useState([
    {
      id: 1,
      author: "Amr Hendawy",
      title: "My new website",
      body: "English Teacher",
    },
    {
      id: 2,
      author: "John Smith",
      title: "Welcome party",
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
          <h2> {el.title}</h2>
          <p> Written by: {el.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
