import Heading from "./heading";
import Contacts from "./contacts";
import About from "./about";
import Experiences from "./experiences";
import Projects from "./projects";
export default function Home() {
  return (
    <main className="flex gap-5 min-h-screen flex-col items-center justify-between px-8 lg:px-36 md:px-24">
      <Heading />
      <About />
      <Experiences />
      <Projects />
      <Contacts />
      <section className="w-screen h-screen"></section>
      <section className="size-screen"></section>
      <section className="size-screen"></section>
    </main>
  );
}
