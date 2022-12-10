import { useState } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  let [blogs, setBlogs] = useState([
    {
      id: 0,
      author: "Amr Hendawy",
      title: "My new website",
      body: "English Teacher",
    },
    {
      id: 1,
      author: "John",
      title: "Welcome party!",
      body: "German Guide",
    },
    {
      id: 5,
      author: "John",
      title: "Web dev top tips",
      body: "Doctor",
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((el) => el.id === id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList test={blogs} title="All Blogs!!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
