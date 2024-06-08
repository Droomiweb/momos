
import "./globals.css";
import { Inter } from "next/font/google";
import './main.css'
import Footer from "./footer";
import Navbarr from "./nav";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
      <script async src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
      </head>
      <body className="bg-gray-800 text-white no-scrollbar" style={{scrollbarWidth:0}}>
      <Navbarr/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

