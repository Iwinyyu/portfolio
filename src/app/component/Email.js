import { useInView } from "react-intersection-observer";
function openemail() {
  window.location.href = `mailto:ivan.yu1007@icloud.com`;
}
export default function Email() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      id="contact"
      className={`transition delay-500 ${
        inView ? " intersect" : ""
      } flex flex-col justify-center items-center gap-5 max-w-[450px] py-36`}
    >
      <span className="font-Space text-yellow-color text-sm">
        {" "}
        04. What&#39;s Next?
      </span>
      <span className="text-4xl text-sub-color">Get In Touch</span>
      <span className="text-secondary-color align-middle text-center">
        <span className="text-yellow-color">YES!!</span> I&#39;m actively looking
        for job, my inbox is always open. whether you have oppotunitues for me
        or just want to say hi, i&#39;ll try my best to get back to you!
      </span>
      <div className="l5 transition ease-out cursor-pointer text-yellow-color capitalize bg-yellow-color rounded-md">
        <button
          onClick={openemail}
          className="font-Space text-sm transition duration-300 ease-in-out bg-dark-color hover:-translate-y-1 hover:-translate-x-1.5 py-4 px-5 rounded-md border-solid border-2 border-yellow-color"
        >
          Say hello
        </button>
      </div>
    </div>
  );
}
