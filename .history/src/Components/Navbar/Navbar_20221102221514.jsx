import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Mega Blog</h1>
      <div className="links">
        <Link href="/Home">Home</Link>
        <Link href="/create">New Blog</Link>
      </div>
    </div>
  );
};
