import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ test, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {test.map((el) => (
        <div className="blog-preview" key={el.id}>
          <Link to={`/blogs/${el.id}`}>
            <h2> {el.title}</h2>
            <p> Written by: {el.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
