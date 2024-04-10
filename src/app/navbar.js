import Logo from "./logo";

export default function Navbar() {
  return (
    <header>
      <div className="logo flex items-center px-10 py-5 bg-slate-400/50">
        <div className="relative bg-slate-100 w-[55px] h-[55px]">

          <span className="absolute left-0 right-0 my-auto bg-slate-500/50">haha</span>
        </div>
      </div>
      <div className="links"></div>
    </header>
  );
}
