import { useState } from "react";
import BlogList from "../BlogList/BlogList";

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

  return (
    <div className="home">
      <BlogList test={blogs} title="All Blogs!!" />
      <BlogList test={blogs} title="John's titles!" />
    </div>
  );
};

export default Home;
