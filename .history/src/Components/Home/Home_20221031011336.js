import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  let [blogs, setBlogs] = useState();
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((el) => el.id !== id);
    setBlogs(newBlogs);
  };
  const [name, setName] = useState("john");
  useEffect(() => {
    console.log("use effect run");
    console.log(blogs);
  }, [blogs, name]);

  return (
    <div className="home">
      <BlogList test={blogs} title="All Blogs!!" handleDelete={handleDelete} />
      <button onClick={() => setName("Amr")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
