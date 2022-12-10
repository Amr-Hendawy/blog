import React from "react";

const BlogList = ({ test, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {test.map((el) => (
        <div className="blog-preview" key={el.id}>
          <Link>
            <h2> {el.title}</h2>
            <p> Written by: {el.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
