import React from "react";

const Menu: React.FC = () => {
  return (
    <nav className="menu-container">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#blog">Blog</a>{" "}
        </li>
        <li>
          <a href="#bio">Bio</a>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
