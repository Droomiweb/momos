'use client'
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


  export const nav = [{
    name:'Home',
    link:'/'
  },{
    name:'Order Now',
    link:'/order'
  },{
    name:'Support',
    link:'/support'
  },{
    name:'contact',
    link:'/'
  }];

  export default function Navbar() {
    const pathname = usePathname();
  const isActive = (path) => path===pathname;


    return(
        <>
             <nav className=" fixed w-full p-5 flex justify-between bg-green-600 z-50">
        <logo>
          <h1 className="text-2xl font-bold">Momoss</h1>
        </logo>
       <nav-menu>
       {
        nav.map((item) => (
            
          <Link className={isActive(item.link)?"m-5 p-2 text-2xl font-semibold bg-gray-800 rounded-md text-green-600":"m-5 p-2 text-2xl font-bold hover:bg-gray-800 rounded-md hover:text-green-600 ease-in duration-300" } key={item.name} href={item.link}>{item.name}</Link>
          
        ))
      }
       </nav-menu>
       </nav>
        </>
    )

  };
  
