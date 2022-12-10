import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  let [blogs, setBlogs] = useState(null);
  let [isPending, setIsPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogss")
        .then((response) => {
          if (!response.ok) {
            throw Error("Couldn't fetch the data");
          }
          return response.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          <p>{err.message}</p>;
          console.log(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>LOADING ...</div>}
      {blogs && <BlogList test={blogs} title="All Blogs!!" />}
    </div>
  );
};

export default Home;
