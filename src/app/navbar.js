import Logo from "./logo";

export default function Navbar() {
  return (
    <header>
      <div className="logo flex items-center px-10 py-5">
        <Logo />
      </div>
      <div className="links"></div>
    </header>
  );
}
