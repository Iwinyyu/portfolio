import { Roboto, Space_Mono } from "next/font/google";

import dynamic from "next/dynamic";
import "./globals.css";
const Navbar = dynamic(() => import("./component/Navbar"), { ssr: false });

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
  icons: {
    icon: '/Y.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`all ${roboto.variable} ${space.variable} overflow-x-hidden font-Roboto scroll-smooth`}
    >
      <body className="bg-dark-color w-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
