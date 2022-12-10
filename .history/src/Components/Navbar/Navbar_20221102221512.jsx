import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Mega Blog</h1>
      <div className="links">
        <Link href="/Home">Home</Link>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
};
