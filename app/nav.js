'use client'
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const nav = [{
  name: 'Home',
  link: '/'
}, {
  name: 'Order Now',
  link: '/order'
}, {
  name: 'Support',
  link: '/support'
}];
  var opc =0;
  const openClose =()=>{
    
    if(opc == 0){
      document.getElementById("mob-nav").style.opacity= 1 ;
      document.getElementById("nav-parent").style.display= 'block' ;
      document.getElementById("opCl").src= '/icons/close.svg' ;
      opc =1;
    }else{
      document.getElementById("mob-nav").style.opacity= 0 ;
      document.getElementById("nav-parent").style.display= 'none' ;
      document.getElementById("opCl").src= '/icons/ham.svg' ;
      opc =0;
    }

  }
export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;



  return (
    <>
      <nav className="fixed w-full p-5 flex justify-between bg-green-600 z-40">
        <logo className="flex items-center">
          <h1 className="text-2xl font-bold">Momoss</h1>
        </logo>
        <div className="block md:hidden translate-x-1 z-50">
            <Image onClick={openClose} id="opCl" src='/icons/ham.svg' alt="" width={60} height={60}></Image>
        </div>
        <div className="hidden md:block md:max-xl:block ">
          {
            nav.map((item) => (
              <Link
                className={
                  isActive(item.link)
                    ? "m-5 md:m-2 p-2 text-2xl md:text-lg font-semibold bg-gray-800 rounded-md text-green-600"
                    : "m-5 md:m-2 p-2 text-2xl md:text-lg font-semibold hover:bg-gray-800 rounded-md hover:text-green-600 ease-in duration-300"
                }
                key={item.name}
                href={item.link}
              >
                {item.name}
              </Link>
            ))
          }

        </div>
       
      </nav>
     <div id="nav-parent" style={{display:'none',position:'fixed'}}> 
     <div
  id="mob-nav"
  style={{ opacity:0,transition:'0.5s',transform:'translateY(90px)' }}
  className="ease-in duration-75 md:hidden lg:hidden p-7 bg-green-600 flex w-60 h-screen flex-col place-items-center inset-y-0 left-0 z-40"
>
  {nav.map((item) => (
    <Link
      className={
        isActive(item.link)
          ? "text-green-600 text-2xl  w-full p-3 m-5 rounded-md bg-gray-800 font-bold z-50"
          : "text-white text-2xl hover:text-green-600 rounded-md hover:bg-gray-800 w-full p-3 font-bold m-5 z-50 ease-in duration-75"
      }
      key={item.name}
      href={item.link}
    >
      {item.name}
      <br />
    </Link>
  ))}
  <br />
</div></div>

    </>
  )

};
