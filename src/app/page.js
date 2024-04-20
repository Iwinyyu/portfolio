import Heading from "./heading";
import Contacts from "./contacts";
import About from "./about";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:px-36 sm:px-24">
      <Heading />
      <About />
      <Contacts />
      <section className="w-screen h-screen"></section>
      <section className="size-screen"></section>
      <section className="size-screen"></section>
    </main>
  );
}
