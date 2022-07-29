import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
function BestSellers()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>BESTSELLERS</h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
                        viverra accumsan in nisl nisi.
                    </p>
                </div>
            </section>
            <section className={"flex items-center gap-2 bg-sub-header py-4 px-20 text-black"}>
                <span>Artist</span>
                <span> <MdOutlineKeyboardArrowRight/> </span>
                <span>BestSellers</span>

            </section>

            <section className={"grid grid-cols-2 gap-32 justify-between px-20 py-20"}>
                <article>
                    <div className={"flex justify-center items-center gap-8"}>
                        <div className={"flex gap-8"}>
                            <div>
                                <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                <span className={"font-bold"}>Marie Manon Corbeil</span>
                                <span>SPAIN</span>
                            </div>
                        </div>
                        <div>
                            <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                Follow this artist
                            </button>
                        </div>
                    </div>
                    <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                    </div>

                </article>
                <article>
                    <div className={"flex justify-center items-center gap-8"}>
                        <div className={"flex gap-8"}>
                            <div>
                                <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                <span className={"font-bold"}>Marie Manon Corbeil</span>
                                <span>SPAIN</span>
                            </div>
                        </div>
                        <div>
                            <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                Follow this artist
                            </button>
                        </div>
                    </div>
                    <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                    </div>

                </article>
                <article>
                    <div className={"flex justify-center items-center gap-8"}>
                        <div className={"flex gap-8"}>
                            <div>
                                <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                <span className={"font-bold"}>Marie Manon Corbeil</span>
                                <span>SPAIN</span>
                            </div>
                        </div>
                        <div>
                            <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                Follow this artist
                            </button>
                        </div>
                    </div>
                    <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                    </div>

                </article>
                <article>
                    <div className={"flex justify-center items-center gap-8"}>
                        <div className={"flex gap-8"}>
                            <div>
                                <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                <span className={"font-bold"}>Marie Manon Corbeil</span>
                                <span>SPAIN</span>
                            </div>
                        </div>
                        <div>
                            <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                Follow this artist
                            </button>
                        </div>
                    </div>
                    <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                    </div>

                </article>
                <article>
                    <div className={"flex justify-center items-center gap-8"}>
                        <div className={"flex gap-8"}>
                            <div>
                                <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                <span className={"font-bold"}>Marie Manon Corbeil</span>
                                <span>SPAIN</span>
                            </div>
                        </div>
                        <div>
                            <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                Follow this artist
                            </button>
                        </div>
                    </div>
                    <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                    </div>

                </article>
                <article>
                    <div className={"flex justify-center items-center gap-8"}>
                        <div className={"flex gap-8"}>
                            <div>
                                <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                <span className={"font-bold"}>Marie Manon Corbeil</span>
                                <span>SPAIN</span>
                            </div>
                        </div>
                        <div>
                            <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                Follow this artist
                            </button>
                        </div>
                    </div>
                    <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                        <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                    </div>

                </article>
            </section>
            <section className={"flex flex-col gap-y-8 justify-center items-center py-10"}>
                <span className={"text-secondary border-b border-secondary"}>
                    SHOW MORE ARTISTS
                </span>
                <span className={"text-gray-400"}>
                    10/100 Result
                </span>
            </section>

            <section className={"py-10 text-black "}>
                    <div className={" w-full justify-start items-center px-20"}>
                        <div className={"float-left text-3xl font-bold pr-5"}>Our Top Categories</div>
                        <div className={"pt-5"}>
                            <hr className={"h-2px text-gold bg-gold"}/>
                        </div>
                    </div>
                    <div className={"clear-both"}></div>
                    <section id={"galleryItems"} className={"w-full px-20"}>
                        <div className={"flex gap-6 w-full  py-16"}>
                            <section className={"w-3/6 flex flex-col gap-y-6"}>
                                <div className={"flex gap-6 w-full"}>
                                    <div>
                                        <img src="/images/cat1.png" className={"w-421px h-280px"} alt=""/>
                                    </div>
                                    <div>
                                        <img src="/images/cat2.png" className={"w-309px h-280px"} alt=""/>
                                    </div>
                                </div>
                                <div className={"w-full"}>
                                    <div>
                                        <img src="/images/cat3.png" className={"w-full h-280px"} alt=""/>
                                    </div>
                                </div>
                            </section>
                            <section className={"w-3/6"}>
                                <div>
                                    <img src="/images/cat4.png" className={"w-full h-584px"} alt=""/>
                                </div>
                            </section>
                        </div>
                    </section>
                </section>





        </HomeLayout>
    )
}

export default BestSellers;
