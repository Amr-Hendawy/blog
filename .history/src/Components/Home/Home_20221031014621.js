import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  let [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList test={blogs} title="All Blogs!!" />}
    </div>
  );
};

export default Home;
