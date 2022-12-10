import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";
import "../useFetch/useFetch";
import "./Home.css";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3000/Home");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">LOADING ...</div>}
      {blogs && <BlogList test={blogs} title="All Blogs!!" />}
    </div>
  );
};

export default Home;
