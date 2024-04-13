import { Fragment } from "react";

export default function Links(params) {
  return (
    <Fragment>
      <ul className="flex gap-4">
        <li className="textcolor  cursor-pointer">01. <span className="capitalize hover:textsubcolor"> About</span></li>
        <li>02.<span> Experience</span></li>
        <li>03.<span> work</span></li>
        <li>04.<span> contact</span></li>
        <li>05.<span className="capitalize"> resume</span></li>
      </ul>
    </Fragment>
  );
}
