"use client";
import Logo from "./Logo";
import Links from "./Links";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';



export default function Navbar() {


  let preY = window.scrollY;
  const [ShowNav, SetShowNav] = useState("full py-6");
  window.addEventListener("scroll", (e) => {
    console.log("pre: "+ preY + " " + "current: " + window.scrollY + "difference: " + (preY-window.scrollY))
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
      <Link href={"#header"} >
        <Logo />
      </Link>
      <div className="links flex items-center">
        <Links  direction={"horizontal"} />
        
      </div>
      <Sidebar SetShowNav={SetShowNav}/>
    </header>
  );
}
