const projects = [
  {
    Name: "Xbeat",
    description:
      "A minimal dark theme e-commerce store with multiple pages and 80% of the functions, selling headphones and earphones",
      skills:["react","VScode",""]
  },
];

export default function Projects() {
  return (
    <div className="w-full py-36 flex flex-col items-center justify-center gap-5 sm:gap-10 max-w-[1000px]">
      <div className="flex items-center justify-center gap-5 w-full sm:w-3/4">
        <div className="text-2xl text-sub-color font-bold whitespace-nowrap">
          <span className="font-Space text-yellow-color ">03.</span>
          Things I've Built
        </div>
        <div className="h-[1px] bg-secondary-color w-full"></div>
      </div>
    </div>
  );
}
