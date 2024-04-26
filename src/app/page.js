"use client";
import Heading from "./component/Heading";
import Contacts from "./component/Contacts";
import About from "./component/About";
import Experiences from "./component/Experiences";
import Email from "./component/Email";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import Loader from "./component/Loader";
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
