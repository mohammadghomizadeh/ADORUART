import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import Link from "next/link";
function Testimonials()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>CUSTOMER TESTIMONIALS</h1>
                </div>

            </section>

            <section className={"px-20"}>
                <article className="flex gap-14 mt-4">
                    <div className={"w-30%"}>
                        <img src="/images/slider1.png" alt="image" className=" w-full h-60 ml-6 mt-8 border-2 border-black p-1"/>
                    </div>
                    <div className="w-70% flex flex-col mt-8" >
                        <div className="flex flex-row gap-3">
                            <img src="/images/collectors.png" alt="image2" className="rounded-full w-16 h-16" />
                            <div className="font-semibold text-black">Philip</div>
                        </div>
                        <div className="text-xs text-gray-500 font-semibold relative left-16 bottom-8 ml-3">SPAIN
                        </div>
                        <div className="flex gap-2 ml-2">
                    <span className="relative bottom-2">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                     fill="#D7AF00">
                <g id="icomoon-ignore">
              </g>
              <path
                  d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                </svg>
                    </span>
                            <span className="relative bottom-2">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                         fill="#D7AF00">
                    <g id="icomoon-ignore">
                      </g>
                      <path
                          d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                        </svg>
                      </span>
                            <span className="relative bottom-2">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                       fill="#D7AF00">
                    <g id="icomoon-ignore">
                      </g>
                    <path
                        d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                </svg>
                  </span>
                            <span className="relative bottom-2">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                         fill="#D7AF00">
                    <g id="icomoon-ignore">
                        </g>
                <path
                    d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                    </svg>
                    </span>
                            <span className="relative bottom-2">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                           fill="#D7AF00">
                      <g id="icomoon-ignore">
                        </g>
                    <path
                        d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                        </svg>
                        </span>
                        </div>
                        <p className={"text-black"}>
                            The work arrived yesterday, in perfect condition - It is magnificent. I was
                            very happy with the product and the service. You have been really
                            helpful throughout the process.The next time I have an empty wall at
                            home, I'll be sure to visit Singulart.
                        </p>
                        <button className="rounded text-white mt-3 w-72 p-4 bg-secondary text-sm font-semibold">READ
                            MORE ABOUT THIS ARTWORK
                        </button>
                    </div>
                </article>
                <article className="flex gap-14 mt-4">
                    <div className={"w-30%"}>
                        <img src="/images/slider1.png" alt="image" className=" w-full h-60 ml-6 mt-8 border-2 border-black p-1"/>
                    </div>
                    <div className="w-70% flex flex-col mt-8" >
                        <div className="flex flex-row gap-3">
                            <img src="/images/collectors.png" alt="image2" className="rounded-full w-16 h-16" />
                            <div className="font-semibold text-black">Philip</div>
                        </div>
                        <div className="text-xs text-gray-500 font-semibold relative left-16 bottom-8 ml-3">SPAIN
                        </div>
                        <div className="flex gap-2 ml-2">
                    <span className="relative bottom-2">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                     fill="#D7AF00">
                <g id="icomoon-ignore">
              </g>
              <path
                  d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                </svg>
                    </span>
                            <span className="relative bottom-2">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                         fill="#D7AF00">
                    <g id="icomoon-ignore">
                      </g>
                      <path
                          d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                        </svg>
                      </span>
                            <span className="relative bottom-2">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                       fill="#D7AF00">
                    <g id="icomoon-ignore">
                      </g>
                    <path
                        d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                </svg>
                  </span>
                            <span className="relative bottom-2">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                         fill="#D7AF00">
                    <g id="icomoon-ignore">
                        </g>
                <path
                    d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                    </svg>
                    </span>
                            <span className="relative bottom-2">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"
                           fill="#D7AF00">
                      <g id="icomoon-ignore">
                        </g>
                    <path
                        d="M354.192 314l157.808-122h-192l-64-192-64 192h-192l158 121.504-62 198.496 160.256-122.88 159.872 122.88z"></path>
                        </svg>
                        </span>
                        </div>
                        <p className={"text-black"}>
                            The work arrived yesterday, in perfect condition - It is magnificent. I was
                            very happy with the product and the service. You have been really
                            helpful throughout the process.The next time I have an empty wall at
                            home, I'll be sure to visit Singulart.
                        </p>
                        <button className="rounded text-white mt-3 w-72 p-4 bg-secondary text-sm font-semibold">READ
                            MORE ABOUT THIS ARTWORK
                        </button>
                    </div>
                </article>
            </section>
            <div className="px-20 flex justify-center items-center my-20">
                <div className="f border-b  ml-20 border-secondary text-secondary w-20">SEE MORE</div>
            </div>
        </HomeLayout>
    )
}

export default Testimonials;
