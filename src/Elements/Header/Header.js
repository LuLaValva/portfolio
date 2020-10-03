import React from "react";
import Portrait from "./Portrait";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Portrait />
      <div>
        <h1>Lucas LaValva</h1>
        <h2>Developer, Mathematician, Graphic Designer</h2>
      </div>
    </div>
  );
}

export default Header;
