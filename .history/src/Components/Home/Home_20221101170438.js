import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";
import "../UseFetch/UseFetch";
import "./Home.css";
const Home = () => {
  const { data, isPending, error } = UseFetch();
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">LOADING ...</div>}
      {blogs && <BlogList test={blogs} title="All Blogs!!" />}
    </div>
  );
};

export default Home;
