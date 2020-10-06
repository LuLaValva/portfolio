import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <a href="https://github.com/LuLaValva">
        <span className="fa fa-github"></span>
      </a>
      <a href="https://www.linkedin.com/in/luke-lavalva/">
        <span className="fa fa-linkedin"></span>
      </a>
      <a href="https://www.youtube.com/channel/UC3YKU-61ekP7PajiFH8GvrA?view_as=subscriber">
        <span className="fa fa-youtube-play"></span>
      </a>
      <a href="https://stackoverflow.com/users/9785375/lucas-lavalva">
        <span className="fa fa-stack-overflow"></span>
      </a>
    </div>
  );
}

export default Footer;
