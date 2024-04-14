import { Fragment } from "react";

export default function Links(params) {
  return (
    <Fragment>
      <ul className="flex gap-4">
        <li className="transition ease-out cursor-pointer hover:text-yellow-color capitalize">
        <span className="text-yellow-color mr-2.5">01.</span>about 
        </li>
        <li className="transition ease-out cursor-pointer hover:text-yellow-color capitalize">
          <span className="text-yellow-color mr-2.5"> 02. </span>experience
        </li>
        <li className="transition ease-out cursor-pointer hover:text-yellow-color capitalize">
          <span className="text-yellow-color mr-2.5"> 03.</span>work
        </li>
        <li className="transition ease-out cursor-pointer hover:text-yellow-color capitalize">
          <span className="text-yellow-color mr-2.5"> 04.</span>contact
        </li>
        <li className="transition ease-out cursor-pointer hover:text-yellow-color capitalize">
          <span  className="text-yellow-color mr-2.5">05.</span>resume
        </li>
      </ul>
    </Fragment>
  );
}
