import React, { useContext } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import DataContext from "../../context/DataContext";
import Nav from "./Nav.js";
import "./Header.css";

const Header = ({ title, hub }) => {
  let { width } = useContext(DataContext);
  return (
    <header className="Header">
      <h1>
        {title}
        <span>{hub}</span>{" "}
      </h1>
      <Nav />
      <p>
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </p>
    </header>
  );
};

export default Header;
