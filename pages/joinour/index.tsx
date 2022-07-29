import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineForm} from "react-icons/ai"
function JoinOur()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={HomeStyle.head}>
                <div className={"my-12"}>
                    <h1>Join our community</h1>
                       <h1> of valued artists</h1>
                </div>
            </section>
            <section className={"bg-sub-header py-4 px-20 text-black"}>
                <span>Join our community of  valued artists</span>
            </section>
            <section className={"flex flex-col gap-y-10 justify-center items-center px-20 py-20 text-black"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                </p>
                <button className={"bg-secondary py-3 px-8 text-white"}>
                    APPLY NOW
                </button>
            </section>
            <section className={"flex flex-col justify-center items-center bg-brows py-10 px-20"}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <div className={"border-gold  border-b w-full"}> </div>
                    <div className={"text-title text-4xl  w-full text-center"}>Four steps to get you closer to your first sale</div>
                    <div className={"border-gold  border-b w-full"}></div>
                </div>
                <section className={"flex my-10"}>
                    <article className={"w-1/3"}>
                        <div className={"flex flex-col items-center justify-center w-full"}>
                            <span className={"w-18 h-full rounded-full p-6 border-2 border-sub-border mr-16"}>
                                <AiOutlineForm size={50} className={"text-sub-border"}/>
                            </span>
                            <div className={"mt-4"}>
                                <span className={"text-black font-bold text-xl"}>1 . Apply to join ADORUART</span>
                                <p className={"text-sub-border mt-4"}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className={"w-1/3"}>
                        <div className={"flex flex-col items-center justify-center w-full"}>
                            <span className={"w-18 h-full rounded-full p-6 border-2 border-sub-border mr-16"}>
                                <AiOutlineForm size={50} className={"text-sub-border"}/>
                            </span>
                            <div className={"mt-4"}>
                                <span className={"text-black font-bold text-xl"}>1 . Apply to join ADORUART</span>
                                <p className={"text-sub-border mt-4"}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className={"w-1/3"}>
                        <div className={"flex flex-col items-center justify-center w-full"}>
                            <span className={"w-18 h-full rounded-full p-6 border-2 border-sub-border mr-16"}>
                                <AiOutlineForm size={50} className={"text-sub-border"}/>
                            </span>
                            <div className={"mt-4"}>
                                <span className={"text-black font-bold text-xl"}>1 . Apply to join ADORUART</span>
                                <p className={"text-sub-border mt-4"}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className={"w-1/3"}>
                        <div className={"flex flex-col items-center justify-center w-full"}>
                            <span className={"w-18 h-full rounded-full p-6 border-2 border-sub-border mr-16"}>
                                <AiOutlineForm size={50} className={"text-sub-border"}/>
                            </span>
                            <div className={"mt-4"}>
                                <span className={"text-black font-bold text-xl"}>1 . Apply to join ADORUART</span>
                                <p className={"text-sub-border mt-4"}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </article>

                </section>
            </section>
            <section className={"flex px-44 py-20 gap-10 w-full"}>
                <div className={"w-8/12"}>
                    <img src="/images/slider1.png" className={"w-full border-4 border-black p-2"} alt=""/>
                </div>
                <div className={"w-6/12 flex flex-col w-full"}>
                    <div className={"flex gap-4"}>
                        <div>
                            <img src="/images/collectors.png" alt=""/>
                        </div>
                        <div className={"flex flex-col items-center justify-center"}>
                            <span className={"text-black text-lg font-bold"}>Philip</span>
                            <span className={"text-black text-base "}>SPAIN</span>
                        </div>
                    </div>
                    <div className={"flex gap-2 mt-4"}>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                    </div>
                    <div className={" mt-4"}>
                        <p className={"text-black"}>
                            The work arrived yesterday, in perfect condition - It is magnificent. I was
                            very happy with the product and the service. You have been really
                            helpful throughout the process.The next time I have an empty wall at
                            home, I'll be sure to visit Singulart.
                        </p>
                    </div>
                    <button className={"bg-secondary text-lg py-4 px-4 rounded-sm mt-10 w-56 text-white"}>SPEAK WITH US NOW</button>
                </div>

            </section>
            <section className={"flex flex-col justify-center items-center bg-brows py-10 px-20"}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <div className={"border-gold  border-b w-full"}> </div>
                    <div className={"text-title text-4xl  w-full text-center"}>Exclusive services for talented artists</div>
                    <div className={"border-gold  border-b w-full"}></div>
                </div>
                <section className={"my-10"}>
                    <div className={"flex gap-6 items-center text-black"}>
                        <div className={"w-3/6"}>
                            <span className={"font-bold text-2xl"}>
                                Fair participation
                            </span>
                            <p className={"text-xl mt-4"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
                                accumsan in nisl nisi.
                            </p>
                        </div>
                        <div className={"w-3/6"}><img src="/images/service.png" alt=""/></div>
                    </div>
                    <div className={"flex gap-6 items-center text-black mt-16"}>
                        <div className={"w-3/6"}><img src="/images/service.png" alt=""/></div>
                        <div className={"w-3/6"}>
                            <span className={"font-bold text-2xl"}>
                                Fair participation
                            </span>
                            <p className={"text-xl mt-4"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
                                accumsan in nisl nisi.
                            </p>
                        </div>
                    </div>
                    <div className={"flex gap-6 items-center text-black mt-16"}>
                        <div className={"w-3/6"}>
                            <span className={"font-bold text-2xl"}>
                                Fair participation
                            </span>
                            <p className={"text-xl mt-4"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
                                accumsan in nisl nisi.
                            </p>
                        </div>
                        <div className={"w-3/6"}><img src="/images/service.png" alt=""/></div>
                    </div>
                </section>
            </section>

            <section className={"flex flex-col justify-center items-center bg-brows py-10 px-20"}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <div className={"border-gold  border-b w-full"}> </div>
                    <div className={"text-title text-4xl  w-full text-center"}>Top questions on artists</div>
                    <div className={"border-gold  border-b w-full"}></div>
                </div>
                <section className={"my-10"}>
                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button"
                                    className="flex justify-between items-center p-5 w-full font-medium text-left  border border-b-0 bg-white text-black "
                                    data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                    aria-controls="accordion-collapse-body-1">
                                <span>What is Flowbite?</span>
                                <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                            <div
                                className="p-5 border border-b-0 border-gray-200 bg-white">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library
                                    of interactive components built on top of Tailwind CSS including buttons, dropdowns,
                                    modals, navbars, and more.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                    className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and
                                    start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button"
                                    className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200  hover:bg-gray-100 bg-white"
                                    data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                                    aria-controls="accordion-collapse-body-2">
                                <span>Is there a Figma file available?</span>
                                <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized
                                    and designed using the Figma software so everything you see in the library has a
                                    design equivalent in our Figma file.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out the <a
                                    href="https://flowbite.com/figma/"
                                    className="text-blue-600 dark:text-blue-500 hover:underline">Figma design
                                    system</a> based on the utility classes from Tailwind CSS and components from
                                    Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button"
                                    className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200  hover:bg-gray-100 bg-white"
                                    data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                                    aria-controls="accordion-collapse-body-2">
                                <span>Is there a Figma file available?</span>
                                <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized
                                    and designed using the Figma software so everything you see in the library has a
                                    design equivalent in our Figma file.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out the <a
                                    href="https://flowbite.com/figma/"
                                    className="text-blue-600 dark:text-blue-500 hover:underline">Figma design
                                    system</a> based on the utility classes from Tailwind CSS and components from
                                    Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button"
                                    className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200  hover:bg-gray-100 bg-white"
                                    data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                                    aria-controls="accordion-collapse-body-2">
                                <span>Is there a Figma file available?</span>
                                <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized
                                    and designed using the Figma software so everything you see in the library has a
                                    design equivalent in our Figma file.</p>
                                <p className="text-gray-500 dark:text-gray-400">Check out the <a
                                    href="https://flowbite.com/figma/"
                                    className="text-blue-600 dark:text-blue-500 hover:underline">Figma design
                                    system</a> based on the utility classes from Tailwind CSS and components from
                                    Flowbite.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>










        </HomeLayout>
    )
}

export default JoinOur;
