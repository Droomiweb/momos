'use client'
import { motion } from "framer-motion"
import '../globals.css'
import Image from "next/image"

import { useInView } from "framer-motion"
import { useRef } from 'react'
export default function Orders() {
    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, { once: true });


    return (
        <>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="text-3xl h-full mb-20 pt-28 text-center font-semibold capitalize md:text-7xl">order your Favorite food now</div> </motion.div>


            {/* food items */}


            <div ref={ref4}
                    style={{
                        transform: isInView4 ? "none" : "translateX(-200px)",
                        opacity: isInView4 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }} className='grid grid-cols-1 md:grid-cols-3 gap-5 m-8 capitalize md:w-auto z-40'>
                <div className="border border-gray-500  hover:bg-gray-700 rounded-lg p-1 md:p-3 w-80 md:w-auto flex flex-row"
                    >
                        <Image className="rounded-lg w-32 h-40"  width={100} height={100} alt="food" src="/images/porotta.jpeg"/>
                        <div className="m-2"> 
                            <h1 className=" text-xl md:text-3xl font-semibold" >porotta + beef combo</h1>
                            <p className="text-lg text-gray-500 mt-2">Wonderfull choice</p>
                            <a href="#" className="inline-flex self-baseline items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                </div>
                <div className="border border-gray-500  hover:bg-gray-700 rounded-lg p-1 md:p-3 w-80 md:w-auto flex flex-row"
                    >
                        <Image className="rounded-lg w-32 h-40"  width={100} height={100} alt="food" src="/images/porotta.jpeg"/>
                        <div className="m-2"> 
                            <h1 className=" text-xl md:text-3xl font-semibold" >porotta + beef combo</h1>
                            <p className="text-lg text-gray-500 mt-2">Wonderfull choice</p>
                            <a href="#" className="inline-flex self-baseline items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                </div>
                <div className="border border-gray-500  hover:bg-gray-700 rounded-lg p-1 md:p-3 w-80 md:w-auto flex flex-row"
                    >
                        <Image className="rounded-lg w-32 h-40"  width={100} height={100} alt="food" src="/images/porotta.jpeg"/>
                        <div className="m-2"> 
                            <h1 className=" text-xl md:text-3xl font-semibold" >porotta + beef combo</h1>
                            <p className="text-lg text-gray-500 mt-2">Wonderfull choice</p>
                            <a href="#" className="inline-flex self-baseline items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                </div>
                <div className="border border-gray-500  hover:bg-gray-700 rounded-lg p-1 md:p-3 w-80 md:w-auto flex flex-row"
                    >
                        <Image className="rounded-lg w-32 h-40"  width={100} height={100} alt="food" src="/images/porotta.jpeg"/>
                        <div className="m-2"> 
                            <h1 className=" text-xl md:text-3xl font-semibold" >porotta + beef combo</h1>
                            <p className="text-lg text-gray-500 mt-2">Wonderfull choice</p>
                            <a href="#" className="inline-flex self-baseline items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                </div>
                <div className="border border-gray-500  hover:bg-gray-700 rounded-lg p-1 md:p-3 w-80 md:w-auto flex flex-row"
                    >
                        <Image className="rounded-lg w-32 h-40"  width={100} height={100} alt="food" src="/images/porotta.jpeg"/>
                        <div className="m-2"> 
                            <h1 className=" text-xl md:text-3xl font-semibold" >porotta + beef combo</h1>
                            <p className="text-lg text-gray-500 mt-2">Wonderfull choice</p>
                            <a href="#" className="inline-flex self-baseline items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                </div>
                <div className="border border-gray-500  hover:bg-gray-700 rounded-lg p-1 md:p-3 w-80 md:w-auto flex flex-row"
                    >
                        <Image className="rounded-lg w-32 h-40"  width={100} height={100} alt="food" src="/images/porotta.jpeg"/>
                        <div className="m-2"> 
                            <h1 className=" text-xl md:text-3xl font-semibold" >porotta + beef combo</h1>
                            <p className="text-lg text-gray-500 mt-2">Wonderfull choice</p>
                            <a href="#" className="inline-flex self-baseline items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                </div>
            </div>

        </>
    )
};
