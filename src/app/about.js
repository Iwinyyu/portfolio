import Image from "next/image";
import ME from "./me.jpeg";

export default function About() {
  return (
    <div className="w-full py-10 flex items-center justify-center gap-10 max-w-[1000px] flex-wrap">
      <div className="flex items-center gap-5 w-full">
        <div className="text-2xl text-sub-color font-bold whitespace-nowrap">
          <span className="font-Space text-yellow-color ">01.</span>
          About Me
        </div>
        <div className="h-[1px] bg-secondary-color w-full sm:w-1/2"></div>
      </div>
      <div className="w-full md:basis-6/12">
        <span className="text-secondary-color w-full md:w-fit text-xl [&>*]:mb-3">
          <p>
            <span className="text-yellow-color">Hello World!</span> I'm Ivan,
            and there are three things I love: creating, explaining, making
            money and gym. Well, I guess that's actually four things, but math
            isn't one of them. My journey in web development began two years ago
            when I aimed for top grades in Web design. It turns out that
            building a rough TODO list taught me a lot about JS, CSS, and HTML.
          </p>
          <p>
            Currently working in Telstra retail. a bit Irrelevant to web dev,
            but I spend <span className="text-yellow-color">2-4 hours</span>{" "}
            every day working on code or reading books about backend dev. My
            main focus these days are building{" "}
            <span className="text-yellow-color">responsive</span>,{" "}
            <span className="text-yellow-color">accessible</span> and{" "}
            <span className="text-yellow-color">inclusive</span> websites. I've
            also built a couple of{" "}
            <span className="text-yellow-color">e-commerce</span> sites to test
            the waters in backend dev.
          </p>
          <p>
            What I’m really looking for is to integrate my knowledge in website
            development, understanding of business processes, and my experience
            in client communication. To be honest, I'm still a little confused
            about what jobs would best fit me, but I'm definitely open to{" "}
            <span className="text-yellow-color">ideas!</span>
          </p>
          <p>technologies i have been working with:</p>
        </span>
        <table className="text-secondary-color w-3/5 md:w-full">
          <tbody className="flex justify-between">
            <tr>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                JS ES6
              </td>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                React
              </td>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                Node.js
              </td>
            </tr>
            <tr>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                TypeScript
              </td>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                Next.js
              </td>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                Github
              </td>
            </tr>
            <tr>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                Tailwind
              </td>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                Sass
              </td>
              <td className="flex items-center">
                <div className="bg-yellow-color rounded-full size-2 mr-2"></div>
                Firebase
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="photo-container hover:[&>div]:bg-yellow-color basis-5/12">
        <div className="transition rounded-md border-solid border-yellow-color">
          <Image
            src={ME}
            alt="A PHOTO of ME"
            className="transition duration-300 img w-full min-w-[240px] object-cover rounded-md"
          ></Image>
        </div>
      </div>
    </div>
  );
}
