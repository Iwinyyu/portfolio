import { Roboto } from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ivan Yu",
  description: "Portfoilo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.className}`}>

      <body className="darkbgcolor"><Navbar />{children}
      </body>
    </html>
  );
}
