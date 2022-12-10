import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  const handleEvent = () => {
    console.log("hello");
  };
  const handleEventAgain = () => {
    console.log(`Hello` + name);
  };
  // let [blogs, setBlogs] = useState(null);
  // let [isPending, setIsPending] = useState(true);
  // console.log(blogs);
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setBlogs(data);
  //         setIsPending(false);
  //       });
  //   }, 1000);
  // }, []);

  return (
    <div className="home">
      {isPending && <div>LOADING ...</div>}
      {blogs && <BlogList test={blogs} title="All Blogs!!" />}
    </div>
  );
};

export default Home;
