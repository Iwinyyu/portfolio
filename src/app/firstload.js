"use client";

import { useState } from "react";

export default function Firstload(params) {
  
  const [Hidden, Sethidden] = useState(false);
  document.body.style.position = "fixed"
  setTimeout(() => {
  document.body.style.position = ""
    Sethidden(true);
  }, 5000);
  return (
    <div
      className={`w-screen h-screen bg-dark-color fixed z-50 ${
        Hidden ? "hidden" : ""
      }`}
    ></div>
  );
}
