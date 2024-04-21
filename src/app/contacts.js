import { Fragment } from "react";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
export default function Contacts() {
  return (
    <Fragment>
      <div className="hidden px-10 fixed left-0 bottom-0 sm:flex flex-col items-center gap-3">
        <button className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1">
          <FiLinkedin className="transition duration-200 ease-out size-5 text-secondary-color" />
        </button>
        <button className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1">
          <FiGithub className="transition duration-200 ease-out size-5 text-secondary-color" />
        </button>
        <button className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1">
          <FiInstagram className="transition duration-200 ease-out size-5 text-secondary-color" />
        </button>
        <span className="h-24 w-[1px] rounded-sm border-solid border-0 border-x border-yellow-color"></span>
      </div>
      <div className="hidden px-10 fixed right-0 bottom-0 sm:flex flex-col items-center gap-6">
        <button className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1 flex justify-center items-center">
          <span className="email transition duration-200 ease-out  text-secondary-color">
            ivan.yu1007@icloud.com
          </span>
        </button>
        <span className="h-24 w-[1px] rounded-sm border-solid border-0 border-x border-yellow-color"></span>
      </div>
    </Fragment>
  );
}
