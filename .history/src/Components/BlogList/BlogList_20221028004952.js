import React from "react";

const BlogList = (media) => {
  const blogTest = media.test;
  const title = media.title;
  console.log(media, blogTest);
  return (
    <div>
      <h2>{title}</h2>
      {blogTest.map((el) => (
        <div className="blog-preview" key={el.id}>
          <h2> {el.title}</h2>
          <p> Written by: {el.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
