"use client";

import { useState } from "react";

const experiences = [
  {
    id: 0,
    company: "Telstra",
    job: "ASM",
    monthStart: "Jan 2024 - Present",
    descriptions: [
      "Work closly with sales system Seibel and salesforce, help identify customer needs, propose solutions, conduct product demonstrations, and address technical questions or concerns.",
      "Ensure 100% customer satisfaction ratings by actively addressing feedback and implementing measures.",
    ],
  },
  {
    id: 1,
    company: "Telstra",
    job: "Sales Representative",
    monthStart: "Jul 2023 - Jan 2024",
    descriptions: [
      "Drive sales successfully while strictly adhering to compliance standards.",
      "Overachieved own target 80% of the months.",
      "Exceeded Monthly target by 10% on average (due to policy, 10% is the maximum).",
      "Outperformed all other colleagues while achieving best performer two months in a row.",
      "Delivered sales in high compliance regards in preventing company image and claw backs.",
    ],
  },
  {
    id: 2,
    company: "Vodafone",
    job: "Sales Representative",
    monthStart: "Jul 2022 - Jul 2023",
    descriptions: [
      "Ensure 100% customer satisfaction ratings by actively addressing feedback and implementing measures.",
      "Drive sales successfully while strictly adhering to compliance standards.",
      "Overachieved own target 80% of the months.",
      "Exceeded Monthly target by 10% on average (due to policy, 10% is the maximum).",
      "Outperformed all other colleagues while achieving best performer two months in a row.",
      "Delivered sales in high compliance regards in preventing company image and claw backs.",
    ],
  },
  {
    id: 3,
    company: "UP Holding",
    job: "Portfolio Manager Associate",
    monthStart: "Jun 2020 - Apr 2021",

    descriptions: [
      "Received 5 stars on average communicating with investors.",
      "Managed $750k worth of portfolio under supervision.",
      "Delivered useful strategy models using Python in Jupyter Notebook.",
    ],
  },
];

export default function Experiences(props) {
  const [ShowInfo, SetShowInfo] = useState(0);

  function handleclick(index) {
    SetShowInfo(index);
  }

  return (
    <div className="w-full py-10 flex flex-col items-center justify-center gap-10 max-w-[1000px]">
      <div className="flex items-center justify-center gap-5 w-full sm:w-3/4">
        <div className="text-2xl text-sub-color font-bold whitespace-nowrap">
          <span className="font-Space text-yellow-color ">02.</span>
          Experiences
        </div>
        <div className="h-[1px] bg-secondary-color w-full"></div>
      </div>
      <div className="flex w-full sm:w-3/4">
        <div className="font-Space text-sm relative flex flex-col [&>button]:transition [&>button]:duration-200 hover:[&>button]:bg-darken-color hover:[&>button]:text-yellow-color">
          {experiences.map((e) => (
            <button
              onClick={() => handleclick(e.id)}
              key={e.id}
              className={`border-solid border-y-0 border-r-0 border-l-2 border-secondary-color text-secondary-color w-36 h-11 px-5 flex justify-start items-center ${
                ShowInfo === e.id ? "text-yellow-color bg-darken-color" : ""
              }`}
            >
              <span>{e.company}</span>
            </button>
          ))}
          <div
            className={`transition duration-500 w-[2px] h-11 bg-yellow-color absolute ${
              ShowInfo === 3
                ? "translate-y-[300%]"
                : ShowInfo === 2
                ? "translate-y-[200%]"
                : ShowInfo === 1
                ? "translate-y-[100%]"
                : ""
            }`}
          ></div>
        </div>
        <div className="px-2">
          {}
          <div className="title flex flex-col pb-6">
            <span className="text-sub-color text-xl font-semibold">
              {`${experiences[ShowInfo].job}`}{" "}
              <span className="text-yellow-color">{`@ ${experiences[ShowInfo].company}`}</span>{" "}
            </span>
            <span className="text-secondary-color text-sm font-Space">{`${experiences[ShowInfo].monthStart}`}</span>
          </div>
          <div className="description">
            {experiences[ShowInfo].descriptions.map((e) => 
              <p className="text-secondary-color flex items-center py-1">
                <span className="bg-yellow-color rounded-full size-3 mr-6 shrink-0"></span>
              {`${e}`}
              </p>
            )}
            {/* <p className="text-secondary-color flex items-center">
              <span className="bg-yellow-color rounded-full size-3 mr-6 shrink-0"></span>{" "}
              Work closly with sales system Seibel and salesforce, help identify
              customer needs, propose solutions, conduct product demonstrations,
              and address technical questions or concerns.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
