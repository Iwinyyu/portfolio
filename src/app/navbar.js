import Logo from "./logo";
import Links from "./Links";

export default function Navbar() {
  return (
    <header className="logo flex items-center px-10 py-2 bg-slate-400 justify-between">
      <div >
        <Logo />
      </div>
      <div className="links"><Links /></div>
    </header>
  );
}
