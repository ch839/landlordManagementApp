import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <Link to="/campuses">Campuses</Link>
      <Link to="/students">Students</Link>
      <Link to="/createCampus">Create a Campus</Link>
      <Link to="/createStudent">Create a Student</Link>
    </div>
  );
};

export default Navbar;
