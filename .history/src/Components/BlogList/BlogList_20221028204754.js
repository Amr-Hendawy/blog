import React from "react";

const BlogList = ({ test, title, handleDelete }) => {
  return (
    <div>
      <h2>{title}</h2>
      {test.map((el) => (
        <div className="blog-preview" key={el.id}>
          <h2> {el.title}</h2>
          <p> Written by: {el.author}</p>
          <button>Delete Blogs</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
