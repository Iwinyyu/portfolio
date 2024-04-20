export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-36">
      <div className="h-screen w-full flex flex-col justify-center items-start tracking-wide gap-4">
        <span className="font-Space text-yellow-color">Hey, this is </span>
        <span className="capitalize text-sub-color text-8xl font-bold">
          ivan yu.
        </span>
        <span className="capitalize text-secondary-color text-6xl font-medium">
          i design and construct web.{" "}
        </span>
        <span className=" text-secondary-color w-3/5">
          As a recent graduate skilled in both finance and IT, my primary focus
          lies in frontend development, specializing in creating accessible and
          user-centered products. Additionally, I am eager to expand my
          expertise into backend development.
        </span>
        <div className="flex gap-5 text-base font-Space">
          <span className="text-yellow-color">{`IT(Web)`}</span>
          <span className="text-yellow-color">{`Finance`}</span>
          <span className="text-yellow-color">{`Sales`}</span>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  );
}
