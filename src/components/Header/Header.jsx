import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/shared/logo.svg";
import "./header.scss";

const btnConstructor = [
  { id: "00", name: "home", url: "/" },
  { id: "01", name: "destination", url: "/destination" },
  { id: "02", name: "crew", url: "/crew" },
  { id: "03", name: "technology", url: "/technology" },
];

function Header({ className }) {
  const path = useLocation().pathname;

  return (
    <div className={`j6 ${className}`}>
      <div className="header ">
        <img src={logo} alt="space toutism logo" />
        <span className="header__line"></span>
        <div className="header__nav j3 pointer">
          {btnConstructor.map((btn) => (
            <Link to={btn.url}>
              <div
                className={`header__nav-btn ${
                  path === btn.url ? "active" : null
                }`}
                key={btn.id}
              >
                <span className="header__nav-btn_digit">{`${btn.id} `}</span>
                <span className="header__nav-btn_title">{btn.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
