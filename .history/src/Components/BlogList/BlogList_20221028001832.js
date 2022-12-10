import React from "react";

const BlogList = (props) => {
  const blogTest = props.blogs;
  console.log(blogTest);
  return (
    <div>
      {" "}
      {blogs.map((el) => (
        <div className="blog-preview" key={el.id}>
          <h2> {el.title}</h2>
          <p> Written by: {el.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
