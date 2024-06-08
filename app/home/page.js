'use client'
import '../globals.css'
import { motion } from "framer-motion"
import Image from 'next/image'
import { useInView } from "framer-motion"
import { useRef } from 'react'
import { useEffect } from 'react'

export default function HomePage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  
    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true });

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, { once: true });


    return (
        <>
            {/* Front facing page */}

            <div className='h-screen bg-cover overflow-y-scroll no-scrollbar' style={{
                backgroundImage: "url(/images/hero.jpg)",
                opacity: 10,
            }}>
                <div className="bg-gray-800 bg-opacity-50 flex justify-center  items-center h-screen">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="flex flex-col justify-center items-center">

                            <h1 className="font-extrabold text-7xl md:text-2xl text-center sm:text-xl">Eat With Us</h1><br />
                            <h1 className="capitalize font-extrabold text-center text-xl">Order your favourte food item from your favourte hotel
                                <br />and enjoy the spices</h1>
                            <button className="text-2xl mt-5 font-bold  rounded-lg py-3 px-6 border-2 border-green-600 filter drop-shadow-2xl hover:bg-green-600 hover:text-gray-800 ease-in duration-200">Order Food</button>

                        </div> </motion.div>


                </div>
            </div>
            {/* Body part */}
            <h1 ref={ref}
                style={{
                    transform: isInView ? "none" : "translateY(-30px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className="flex  flex-col justify-center items-center mt-11 font-bold text-5xl capitalize"> Try This Now</h1>

            <div id='container-all' className='container capitalize overflow-hidden mt-16 m-5'>
                <div id="row1" ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className='grid sm:grid-cols-3  gap-4 grid-cols-1 '
                >

                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ring-green-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/biriyani.jpeg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">try Biriyani</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">try biriyani and expoerience the wonders of spices</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ring-green-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/biriyani.jpeg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">try Biriyani</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">try biriyani and expoerience the wonders of spices</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ring-green-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/biriyani.jpeg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">try Biriyani</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">try biriyani and expoerience the wonders of spices</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>


                <div id="row2" ref={ref2}
                    style={{
                        transform: isInView2 ? "none" : "translateX(200px)",
                        opacity: isInView2 ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-4'
                >



                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ring-green-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/biriyani.jpeg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">try Biriyani</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">try biriyani and expoerience the wonders of spices</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ring-green-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/biriyani.jpeg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">try Biriyani</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">try biriyani and expoerience the wonders of spices</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:ring-green-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/biriyani.jpeg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">try Biriyani</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">try biriyani and expoerience the wonders of spices</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-bold text-center w-max text-white bg-green-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-700">
                                Order Now
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>


                </div>

            </div>
            {/* hotels */}
            <h1 ref={ref3}
                style={{
                    transform: isInView3 ? "none" : "translateY(-30px)",
                    opacity: isInView3 ? 1 : 0,
                    transition: "all2 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className="flex  flex-col justify-center items-center mt-16 font-bold text-5xl capitalize">
                order from your faveret hotel
            </h1>

            <div id='hotels' className='flex justify-center m-5 mt-26 capitalize'>

                <div className='grid grid-cols-2 gap-12'>
                    <div
                        ref={ref4}
                        style={{
                            transform: isInView4 ? "none" : "translateX(-200px)",
                            opacity: isInView4 ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order From Hyra mandhi</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">different verities of al-faham mandhi will be available here</p>
                        <div href="#" class="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            order food
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </div>
                    </div>

                    <div
                        ref={ref4}
                        style={{
                            transform: isInView4 ? "none" : "translateX(200px)",
                            opacity: isInView4 ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order From Hyra mandhi</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">different verities of al-faham mandhi will be available here</p>
                        <div href="#" className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            order food
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </div>
                    </div>
                    <div
                        ref={ref4}
                        style={{
                            transform: isInView4 ? "none" : "translateX(-200px)",
                            opacity: isInView4 ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                        }}
                        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order From Hyra mandhi</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">different verities of al-faham mandhi will be available here</p>
                        <div  className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            order food
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </div>
                    </div>
                    <div
                        ref={ref4}
                        style={{
                            transform: isInView4 ? "none" : "translateX(200px)",
                            opacity: isInView4 ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
                        }}
                        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order From Hyra mandhi</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">different verities of al-faham mandhi will be available here</p>
                        <div href="#" className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            order food
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </div>
                    </div>


                </div>
            </div>




        </>
    )
};
