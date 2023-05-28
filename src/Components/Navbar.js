import React from "react";
import "../styles/Navbar.css";
import { FaEllipsisH, FaMugHot } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

function Navbar({ onSearch }) {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaMugHot />
          </i>
          <h2 className="judul">ws</h2>
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
          />
          <i>
            <BiSearchAlt />
          </i>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
