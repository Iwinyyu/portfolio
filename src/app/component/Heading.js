import { useInView } from "react-intersection-observer";

export default function Heading() {
  const { ref, inView } = useInView({
    delay: 2000,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      id="header"
      className={`transition ${
        inView ? " intersect" : ""
      } h-screen max-w-[900px] w-full flex flex-col justify-center items-start tracking-wide gap-4`}
    >
      <span className="font-Space text-yellow-color">Hey, this is </span>
      <span className="capitalize text-sub-color text-5xl sm:text-8xl font-bold">
        ivan yu.
      </span>
      <span className="capitalize text-secondary-color text-4xl sm:text-6xl font-medium whitespace-normal sm:whitespace-nowrap">
        i design and construct web.{" "}
      </span>
      <span className=" text-secondary-color w-6/7 sm:w-3/5">
        As a recent graduate skilled in both finance and IT, my primary focus
        lies in frontend development, specializing in creating accessible and
        user-centered products. Additionally, I am eager to expand my expertise
        into backend development.
      </span>
      <div className="flex gap-5 text-base font-Space">
        <span className="text-yellow-color">{`IT(Web)`}</span>
        <span className="text-yellow-color">{`Finance`}</span>
        <span className="text-yellow-color">{`Sales`}</span>
      </div>
    </div>
  );
}
