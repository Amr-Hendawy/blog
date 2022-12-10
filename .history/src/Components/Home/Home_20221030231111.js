import { useState, useEffect } from "react";
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
    const newBlogs = blogs.filter((el) => el.id !== id);
    setBlogs(newBlogs);
  };
  const [name, setName] = useState("john");
  useEffect(() => {
    console.log("use effect run");
    console.log(blogs);
  }, [setName]);

  return (
    <div className="home">
      <BlogList test={blogs} title="All Blogs!!" handleDelete={handleDelete} />
      <button onClick={() => setName("Amr")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
