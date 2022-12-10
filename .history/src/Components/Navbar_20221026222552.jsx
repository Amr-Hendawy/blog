import React from "react";

export const Navbar = () => {
  return (
    <div>
      <h1>Mega Blog</h1>
      <div className="links">
        <a href="/Home">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
};
