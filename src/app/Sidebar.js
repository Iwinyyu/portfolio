"use client";
import { Fragment, useState } from "react";
import { RiMenu3Fill, RiArrowRightDoubleFill } from "react-icons/ri";
import Links from "./Links";

export default function Sidebar(props) {
  const [SideNav, SetSideNav] = useState(false);

  function handleanimation() {
    let cord = window.scrollY;
    if (SideNav === false) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${cord}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    SetSideNav(!SideNav);
  }

  return (
    <Fragment>
      <button
        onClick={handleanimation}
        className="transition duration-200 relative size-11 active:rotate-180 active:scale-50 z-30 sm:hidden"
      >
        <RiArrowRightDoubleFill
          className={` ${
            SideNav === false ? "hidden" : " absolute inset-0"
          } fill-yellow-color size-11 sm:hidden`}
        />
        <RiMenu3Fill
          className={` ${
            SideNav === false ? "" : "hidden"
          } fill-yellow-color size-10 sm:hidden`}
        />
      </button>
      <div
        className={`fixed w-dvw h-screen top-0 bottom-0 left-full reltive touch-none transition backdrop-blur-sm z-20 ${
          SideNav ? "-translate-x-full" : ""
        } sm:hidden`}
      >
        <div className="absolute top-0 right-0 bottom-0 bg-darken-color w-4/6 h-screen flex justify-center items-center">
          <Links direction={"vertical"} />
        </div>
      </div>
    </Fragment>
  );
}
