import React from "react";

const BlogList = (media) => {
  const blogTest = media.test;
  const title = medi.title;
  console.log(media, blogTest);
  return (
    <div>
      {" "}
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
