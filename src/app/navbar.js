"use client";
import Logo from "./Logo";
import Links from "./Links";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Navbar() {
  let preY = window.scrollY;
  const [ShowNav, SetShowNav] = useState("full py-6");
  window.addEventListener("scroll", (e) => {
    let curY = window.scrollY;
    if (curY <= 40) {
      preY = window.scrollY;
      SetShowNav("full py-6");
    } else if (curY - preY >= 70 && ShowNav !== "hide") {
      preY = window.scrollY;
      SetShowNav("hide");
    } else if (preY - curY >= 30 && ShowNav !== "half") {
      preY = window.scrollY;
      SetShowNav("half");
    }
  });
  return (
    <header
      className={`z-50 nav w-screen bg-navdark-color logo fixed flex left-0 right-0 top-0 items-center px-6 md:px-11 backdrop-blur-sm justify-between ${ShowNav}`}
    >
      <div>
        <Logo />
      </div>
      <div className="links flex items-center">
        <Links direction={"horizontal"} />
        
      </div>
      <Sidebar SetShowNav={SetShowNav}/>
    </header>
  );
}
