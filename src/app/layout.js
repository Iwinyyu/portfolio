import { Roboto, Space_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
const Navbar = dynamic(()=> import("./Navbar"), {ssr:false})

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const space = Space_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
});

export const metadata = {
  title: "Ivan Yu",
  description: "Portfoilo",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${space.variable} overflow-x-hidden font-Roboto`}
    >
      <body className="bg-dark-color w-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
