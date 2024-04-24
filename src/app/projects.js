"use client";
import Image from "next/image";
// import Wavecircle from "./Wavecircle.png"
const project = [
  {
    Name: "Wavecircle",
    description:
      `A one page app that let you design and <span className="font-Space text-yellow-color">export(SVG/PNG)</span> a random wave-like circle, where you can have multiple layers of the cirles aswell.`,
    skills: ["react", "VScode"],
    gitlink: "https://wavecircles.net",
    pagelink: "https://github.com/Iwinyyu/SvgWaves.git",
    photo: `/Wavecircle.png`,
  },
  {
    Name: "Xbeat",
    description:
      "A minimal dark theme e-commerce store with multiple pages and 80% of the functions, selling headphones and earphones",
    skills: ["react", "VScode", "JS", "SCSS"],
    gitlink: "https://iwinyyu.github.io/beat/",
    pagelink: "https://github.com/Iwinyyu/beat.git",
    photo: "/bank.png",
  },
  {
    Name: "Bank",
    description:
      "A minimal dark theme e-commerce store with multiple pages and 80% of the functions, selling headphones and earphones",
    skills: ["react", "VScode", "JS", "CSS", "tailwind", "vite"],
    gitlink: "https://iwinyyu.github.io/bank-app-design/#",
    pagelink: "https://github.com/Iwinyyu/bank-app-design.git",
    photo: "/xbeat.png",
  },
];

export default function Projects() {
  return (
    <div className="w-full py-36 flex flex-col items-center justify-start gap-5 sm:gap-10 max-w-[1000px] bg-slate-400">
      <div className="flex items-center justify-center gap-5 w-full sm:w-3/4">
        <div className="text-2xl text-sub-color font-bold whitespace-nowrap">
          <span className="font-Space text-yellow-color ">03.</span>
          Things I've Built
        </div>
        <div className="h-[1px] bg-secondary-color w-full"></div>
      </div>
      <ul>
        <li>
          <div className="grid grid-cols-12">
            <div className="relative rounded-md overflow-hidden col-start-1 col-end-13 row-start-1 row-end-1">
              <Image
                src={project[0].photo}
                width={400}
                height={400}
                className="w-full h-[300px] object-cover"
              ></Image>
              <div className="absolute inset-0 bg-darken-color"></div>
            </div>
          <div className="p-5 flex flex-col z-10 col-start-1 col-end-13 row-start-1 row-end-1">
            <span className="font-Space text-yellow-color">faverate project</span>
            <span className="name text-sub-color text-3xl font-semibold">Wavecircle</span>
            <div className="projectdes text-secondary-color py-4"> {project[0].description} </div>
            <div className="skills"> <span className="text-secondary-color">React</span> </div>
            <div className="projectlinks"></div>
          </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
