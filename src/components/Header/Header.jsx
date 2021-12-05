import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/shared/logo.svg";
import {Fade as Hamburger} from 'hamburger-react'
import "./header.scss";

const btnConstructor = [
  { id: "00", name: "home", url: "/" },
  { id: "01", name: "destination", url: "/destination" },
  { id: "02", name: "crew", url: "/crew" },
  { id: "03", name: "technology", url: "/technology" },
];

function Header({ className }) {
  const path = useLocation().pathname;

const [mobile, setMobile] = useState(false);
const [isOpen, setOpen] = useState(false)

let detectMobile = window.screen.width
console.log(mobile)
useEffect(() => {
  if (detectMobile <= 575 || detectMobile >= 320 ) {
    setMobile(true)
  }
  
  
}, [detectMobile])


if (mobile) {
 return (
 <>
   <div className="header-mobile-wrapper">
     <img src={logo} alt="space toutism logo" />
     <div className="hamburger">
       <Hamburger className='test'  color="#fff" duration={0.8} toggled={isOpen} toggle={() => setOpen(!isOpen)}/>
       </div>
   </div>

   <div className="hamburger-menu-wrapper"> 
    <div className="hamburger-menu"> 
    {btnConstructor.map((btn) => (
            <Link key={btn.id} to={btn.url}>
                <div className='hamburger-menu__item'>
                <span className="hamburger-menu__item--number">{`${btn.id} `}</span>
                <span className="hamburger-menu__item--title">{btn.name}</span>
                </div>
            </Link>
          ))}
     </div>
   </div>
   </>
 )
} else {
  return (
    <div className={`j6 ${className}`}>
      <div className="header ">
        <img src={logo} alt="space toutism logo" />
        <span className="header__line"></span>
        <div className="header__nav j3 pointer">
          {btnConstructor.map((btn) => (
            <Link key={btn.id} to={btn.url}>
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
  
}

export default Header;
