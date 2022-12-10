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
      title: "Welcome party!",
      body: "German Guide",
    },
    {
      id: 3,
      author: "Mike Revolds",
      title: "Web dev top tips",
      body: "Doctor",
    },
  ]);

  return <div className="home"></div>;
};

export default Home;
