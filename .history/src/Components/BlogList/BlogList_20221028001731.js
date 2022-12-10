import React from "react";

const BlogList = (properties) => {
  const blogTest = test.properties;
  console.log(blogTest);
  return (
    <div>
      {" "}
      {properties.map((el) => (
        <div className="blog-preview" key={el.id}>
          <h2> {el.title}</h2>
          <p> Written by: {el.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
