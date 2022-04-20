import React, { useState } from "react";
import "./NavBarComponentStyle.css";
import {
  AiOutlineMenuFold,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBarComponent() {
  const [toggleMenu, setMenuToggle] = useState(true);

  console.log(toggleMenu);
  return (
    <div>
      <div className="menu-container">
        <div
          className="toggler-button"
          onClick={() => {
            setMenuToggle(!toggleMenu);
          }}
        >
          <AiOutlineMenuFold size={"50px"} />
        </div>

        <div className="desktop-menu">
          <h1>Oraldo's Web</h1>

          <div
            className={
              toggleMenu
                ? "desktop-menu-items desktop-menu-items-hide hide-desktop-menu"
                : "desktop-menu-items desktop-menu-items-show hide-desktop-menu"
            }
          >
            <ul>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          !toggleMenu
            ? "drawer-container show-drawer"
            : "drawer-container hide-drawer "
        }
        onClick={() => setMenuToggle(!toggleMenu)}
      >
        <ul>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <a
            href="https://www.instagram.com/oraldohysaj/"
            target="_blank"
            rel="noreferrer"
            className="icon-style"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://wa.me/355685883053"
            target="_blank"
            rel="noreferrer"
            className="icon-style"
          >
            <AiOutlineWhatsApp />
          </a>
          <a
            href="https://www.linkedin.com/in/oraldo-hysaj-49210918a/"
            target="_blank"
            rel="noreferrer"
            className="icon-style"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://github.com/oraldo666"
            target="_blank"
            rel="noreferrer"
            className="icon-style"
          >
            <AiOutlineGithub />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default NavBarComponent;
