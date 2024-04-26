import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-20 py-6 font-Space text-sm flex flex-col justify-center items-center text-secondary-color">
      <div className="flex gap-4 py-5 sm:hidden">
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
          href={"https://github.com/Iwinyyu"}
          className="p-2 [&>*]:hover:text-yellow-color [&>*]:hover:-translate-y-1"
        >
          <FiInstagram className="transition duration-200 ease-out size-5 text-secondary-color" />
        </Link>
      </div>
      <span>credit to</span>
      <span>Brittany Chiang's help in design</span>
      <span>built by Ivan Yu</span>
    </div>
  );
}
