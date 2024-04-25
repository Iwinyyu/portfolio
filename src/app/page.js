import Heading from "./heading";
import Contacts from "./contacts";
import About from "./about";
import Experiences from "./experiences";
import Email from "./Email";
import Footer from "./Footer";
import Projects from "./projects";
export default function Home() {
  return (
    <main className=" scroll-smooth  flex gap-5 min-h-screen flex-col items-center justify-between px-8 lg:px-28 md:px-20">
      <Heading />
      <About />
      <Experiences />
      <Projects />
      <Email />
      <Footer />
      <Contacts />
    </main>
  );
}
