import Link from "next/link";
import { Fragment } from "react";

export default function Links(props) {
  return (
    <Fragment>
      <ul
        className={` ${
          props.direction === "vertical"
            ? "[&>*]:flex [&>*]:flex-col [&>*]:items-center flex flex-col justify-center gap-10 items-center text-base"
            : "[&>*]:flex [&>*]:flex-row hidden sm:flex gap-6 items-center text-sm"
        } font-Space  `}
      >
        <li className="l1 transition ease-out cursor-pointer text-sub-color hover:text-yellow-color capitalize">
          <Link
            onClick={props.setsidenav ? props.setsidenav : ""}
            href={`#about`}
            className="flex"
          >
            <span className="text-yellow-color mr-2 block">01.</span>about
          </Link>
        </li>
        <li className="l2 transition ease-out cursor-pointer text-sub-color hover:text-yellow-color capitalize ">
          <Link
            onClick={props.setsidenav ? props.setsidenav : ""}
            href={`#experiences`}
            className="flex"
          >
            <span className="text-yellow-color mr-2 block"> 02. </span>
            experience
          </Link>
        </li>
        <li className="l3 transition ease-out cursor-pointer text-sub-color hover:text-yellow-color capitalize ">
          <Link
            onClick={props.setsidenav ? props.setsidenav : ""}
            href={`#projects`}
            className="flex"
          >
            <span className="text-yellow-color mr-2 block"> 03.</span>work
          </Link>
        </li>
        <li className="l4 transition ease-out cursor-pointer text-sub-color hover:text-yellow-color capitalize ">
          <Link
            onClick={props.setsidenav ? props.setsidenav : ""}
            href={`#contact`}
            className="flex"
          >
            <span className="text-yellow-color mr-2 block"> 04.</span>contact
          </Link>
        </li>
        <li className="l5 transition ease-out cursor-pointer text-yellow-color capitalize bg-yellow-color rounded-md">
          <Link
            href="images/Resume.pdf"
            rel="noopener noreferrer"
            locale={false}
            target="_blank"
            className="transition duration-300 ease-in-out bg-dark-color hover:-translate-y-1 hover:-translate-x-1.5 py-2 px-3 rounded-md border-solid border-2 border-yellow-color"
          >
            resume
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}
