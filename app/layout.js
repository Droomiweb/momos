
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./nav";
import './main.css'
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-gray-800 text-white no-scrollbar" style={{scrollbarWidth:0}}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

