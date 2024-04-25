"use client";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import Link from "next/link";

// import Wavecircle from "./Wavecircle.png"
const project = [
  {
    id: 0,
    Name: "Wavecircle",
    description: (
      <p>
        A one page app that let you design and{" "}
        <span className="font-Space text-yellow-color">export(SVG/PNG)</span> a
        random wave-like circle, where you can have multiple layers of the
        cirles aswell.
      </p>
    ),
    skills: ["react", "VScode", "Netlify", "Math"],
    gitlink: "https://github.com/Iwinyyu/SvgWaves.git",
    pagelink: "https://wavecircles.net",
    photo: `/Wavecircle.png`,
  },
  {
    id: 1,
    Name: "Xbeat",
    description: (
      <p>
        A{" "}
        <span className="font-Space text-yellow-color">minimal dark theme</span>{" "}
        e-commerce store with{" "}
        <span className="font-Space text-yellow-color">multiple pages</span> and
        80% of the functions, selling headphones and earphones
      </p>
    ),
    skills: ["react", "VScode", "JS", "SCSS"],
    gitlink: "https://github.com/Iwinyyu/beat.git",
    pagelink: "https://iwinyyu.github.io/beat/",
    photo: "/xbeat.png",
  },
  {
    id: 2,
    Name: "Bank",
    description: (
      <p>
        An one page banking app intro, dark theme that utilizes gradient background to
        emphasis important content created with tailwindCSS and react.
      </p>
    ),
    skills: ["react", "VScode", "JS", "CSS", "tailwind", "vite"],
    gitlink: "https://github.com/Iwinyyu/bank-app-design.git",
    pagelink: "https://iwinyyu.github.io/bank-app-design/#",
    photo: "/bank.png",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full py-24 flex flex-col items-center justify-start gap-5 sm:gap-10 max-w-[1000px]">
      <div className="flex items-center justify-center gap-5 w-full sm:w-3/4">
        <div className="text-2xl text-sub-color font-bold whitespace-nowrap">
          <span className="font-Space text-yellow-color ">03.</span>
          Things I've Built
        </div>
        <div className="h-[1px] bg-secondary-color w-full"></div>
      </div>
      <ul className="flex flex-col gap-24">
        {project.map((p) =>
          p.id % 2 === 0 ? (
            <li key={p.id} className="grid grid-cols-12">
              <div className="relative rounded-md overflow-hidden col-start-1 col-end-13 md:col-end-8 row-start-1 row-end-1">
                <Image
                  alt={p.Name}
                  src={p.photo}
                  width={400}
                  height={400}
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                ></Image>
                <div className="absolute inset-0 bg-darken-color md:bg-transparent"></div>
              </div>
              <div className="p-5 flex flex-col z-10 col-start-1 md:col-start-6 col-end-13 row-start-1 row-end-1 md:text-right justify-center sm:px-20 md:p-5">
                <span className="font-Space text-yellow-color text-sm">
                  favorite Project
                </span>
                <span className="name text-sub-color text-3xl font-semibold">
                  {p.Name}
                </span>
                <div className="projectdes text-secondary-color py-4 md:bg-darken-color md:p-6 md:my-5 md:mr-3 sm:rounded-md">
                  {" "}
                  {p.description}{" "}
                </div>
                <div className="skills flex gap-3 md:py-5 md:justify-end">
                  {" "}
                  {p.skills.map((s) => (
                    <span key={s} className="text-secondary-color">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="projectlinks pt-4 flex gap-4 md:py-5 md:justify-end">
                  <Link
                    className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1"
                    href={p.gitlink}
                    target="_blank"
                  >
                    <FiGithub className="transition duration-200 ease-out size-5 text-secondary-color" />
                  </Link>
                  <Link
                    className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1"
                    href={p.pagelink}
                    target="_blank"
                  >
                    <GoProjectSymlink className="transition duration-200 ease-out size-5 text-secondary-color" />
                  </Link>
                </div>
              </div>
            </li>
          ) : (
            <li key={p.id} className="grid grid-cols-12">
              <div className="relative rounded-md overflow-hidden col-start-1 col-end-13 md:col-start-6 md:col-end-13 row-start-1 row-end-1">
                <Image
                  alt={p.Name}
                  src={p.photo}
                  width={400}
                  height={400}
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                ></Image>
                <div className="absolute inset-0 bg-darken-color md:bg-transparent"></div>
              </div>
              <div className="p-5 flex flex-col z-10 col-start-1 md:col-start-1 md:col-end-8 col-end-13 row-start-1 row-end-1 md:text-left justify-center sm:px-20 md:p-5">
                <span className="font-Space text-yellow-color text-sm">
                  favorite Project
                </span>
                <span className="name text-sub-color text-3xl font-semibold">
                  {p.Name}
                </span>
                <div className="projectdes text-secondary-color py-4 md:bg-darken-color md:p-6 md:my-5 md:ml-3 sm:rounded-md">
                  {" "}
                  {p.description}{" "}
                </div>
                <div className="skills flex gap-3 md:py-5 md:justify-start">
                  {" "}
                  {p.skills.map((s) => (
                    <span key={s} className="text-secondary-color">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="projectlinks pt-4 flex gap-4 md:py-5 md:justify-start">
                  <Link
                    className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1"
                    href={p.gitlink}
                    target="_blank"
                  >
                    <FiGithub className="transition duration-200 ease-out size-5 text-secondary-color" />
                  </Link>
                  <Link
                    className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1"
                    href={p.pagelink}
                    target="_blank"
                  >
                    <GoProjectSymlink className="transition duration-200 ease-out size-5 text-secondary-color" />
                  </Link>
                </div>
              </div>
            </li>
          )
        )}
        {/* <li className="grid grid-cols-12">
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
            <span className="font-Space text-yellow-color text-sm">
              Faverate Project
            </span>
            <span className="name text-sub-color text-3xl font-semibold">
              Wavecircle
            </span>
            <div className="projectdes text-secondary-color py-4">
              {" "}
              {project[0].description}{" "}
            </div>
            <div className="skills">
              {" "}
              <span className="text-secondary-color">React</span>{" "}
            </div>
            <div className="projectlinks pt-4 flex gap-4">
              <FiGithub className="transition duration-200 ease-out size-5 text-secondary-color" />
              <GoProjectSymlink className="transition duration-200 ease-out size-5 text-secondary-color" />
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
