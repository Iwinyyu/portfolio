"use client";
import { Fragment } from "react";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

function openemail() {
  window.location.href = `mailto:ivan.yu1007@icloud.com`;
}
export default function Contacts() {
  return (
    <Fragment>
      <div className="hidden px-5 fixed left-0 bottom-0 md:flex flex-col items-center gap-3">
        <Link
          target="_blank"
          href={"www.linkedin.com/in/jingkun-ivan-yu"}
          className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1"
        >
          <FiLinkedin className="transition duration-200 ease-out size-5 text-secondary-color" />
        </Link>
        <Link
          target="_blank"
          href={"https://github.com/Iwinyyu"}
          className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1"
        >
          <FiGithub className="transition duration-200 ease-out size-5 text-secondary-color" />
        </Link>
        <Link
          target="_blank"
          href={"https://www.instagram.com/ivanyu777"}
          className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1"
        >
          <FiInstagram className="transition duration-200 ease-out size-5 text-secondary-color" />
        </Link>
        <span className="h-24 w-[1px] rounded-sm border-solid border-0 border-x border-yellow-color"></span>
      </div>
      <div className="hidden px-5 fixed right-0 bottom-0 md:flex flex-col items-center gap-6">
        <button
          onClick={openemail}
          className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1 flex justify-center items-center"
        >
          <span className="email transition duration-200 ease-out  text-secondary-color">
            ivan.yu1007@icloud.com
          </span>
        </button>
        <span className="h-24 w-[1px] rounded-sm border-solid border-0 border-x border-yellow-color"></span>
      </div>
    </Fragment>
  );
}
