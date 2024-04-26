"use client";
import Heading from "./heading";
import Contacts from "./contacts";
import About from "./about";
import Experiences from "./experiences";
import Email from "./Email";
import Footer from "./Footer";
import Projects from "./projects";
import Loader from "./Loader";
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from "react";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { ref: aboutref1, inView } = useInView({});


  return (
    <main className="">
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading()}/>
      ) : (
        <main className="flex gap-5 min-h-screen flex-col items-center justify-between px-8 lg:px-28 md:px-20">
          <Heading />
          <About />
          <Experiences />
          <Projects />
          <Email />
          <Footer />
          <Contacts />
        </main>
      )}
    </main>
  );
}
