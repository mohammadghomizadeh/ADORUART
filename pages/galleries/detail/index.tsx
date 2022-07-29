import React from "react";
import HomeLayout from "@/components/layouts/Home";
import {Usa} from "@/components/SVG/usa";
import Link from "next/link";
const Dscover = () =>  {

    return (
        <>
            <HomeLayout title={"Home"}>
                <section className={"px-20 bg-editbg py-4 text-black font-bold"}>
                    Art Galleries - Art Galleries in new york - Art Gallery Icosahedron Gallery
                </section>

                <section className={"px-20"}>
                    <div className="relative flex py-10 items-center">
                        <span className="flex-shrink mr-4 text-black text-2xl font-bold">Art Gallery Icosahedron Gallery</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>

                    <section className={"flex gap-4 items-center"}>
                        <div className={"w-3/6"}>
                            <img src="/images/decor/70-2.png" className={"w-full"} alt=""/>
                        </div>
                        <div className={"w-3/6 text-black flex flex-col gap-12"}>
                            <div>
                                <span className={"font-bold"}>
                                    Address:
                                </span>
                                <p className={"mt-2"}>606 W 26th St - 10001 New York - United States</p>
                            </div>
                            <div>
                                <span className={"font-bold"}>
                                    Phone number:
                                </span>
                                <p className={"mt-2"}>(212) 966-3897</p>
                            </div>
                            <div>
                                <span className={"font-bold"}>
                                    Website:
                                </span>
                                <p className={"mt-2"}>https://abcd.com</p>
                            </div>
                            <div>
                                <span className={"font-bold"}>
                                    Opening hours:
                                </span>
                                <div className={"flex gap-6 mt-2"}>
                                    <span>Monday</span>
                                    <span>Tuesday</span>
                                    <span>Wednesday</span>
                                    <span>Thursday</span>
                                    <span>Friday</span>
                                    <span>Saturday</span>
                                    <span>Sunday</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>











                <section className={"px-20"}>
                    <div className="relative flex py-10 items-center">
                        <span className="flex-shrink mx-4 text-black text-2xl font-bold">Some of our artists who would be delighted to work on commission!</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                </section>


                <section className={"grid grid-cols-2 gap-32 justify-between p-20"}>
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



                <section className={"bg-editbg px-20 "}>
                    <div className="relative flex py-10 items-center">
                        <div className="flex-grow border-t border-gold"></div>
                        <span className="flex-shrink mx-4 text-black text-2xl font-bold">Other art galleries nearby</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                    <section className={"grid grid-cols-4 gap-6 py-10 "}>
                        <article>
                            <div className={"w-312px h-343px relative flex justify-center"}>
                                <img src="/images/cat1.png" className={" w-full h-full rounded contrast-50"} alt=""/>
                                <div className={"flex flex-col justify-center items-center gap-y-4 absolute bottom-0 my-8"}>
                                <span className={"font-bold text-xl"}>
                                    Earth Hour
                                </span>
                                    <span className={"text-gold font-bold text-lg"}>
                                    Closed on 14 Aprill 2022
                                </span>

                                </div>
                            </div>
                        </article>
                        <article>
                            <div className={"w-312px h-343px relative flex justify-center"}>
                                <img src="/images/cat1.png" className={" w-full h-full rounded contrast-50"} alt=""/>
                                <div className={"flex flex-col justify-center items-center gap-y-4 absolute bottom-0 my-8"}>
                                <span className={"font-bold text-xl"}>
                                    Earth Hour
                                </span>
                                    <span className={"text-gold font-bold text-lg"}>
                                    Closed on 14 Aprill 2022
                                </span>

                                </div>
                            </div>
                        </article>
                        <article>
                            <div className={"w-312px h-343px relative flex justify-center"}>
                                <img src="/images/cat1.png" className={" w-full h-full rounded contrast-50"} alt=""/>
                                <div className={"flex flex-col justify-center items-center gap-y-4 absolute bottom-0 my-8"}>
                                <span className={"font-bold text-xl"}>
                                    Earth Hour
                                </span>
                                    <span className={"text-gold font-bold text-lg"}>
                                    Closed on 14 Aprill 2022
                                </span>

                                </div>
                            </div>
                        </article>
                        <article>
                            <div className={"w-312px h-343px relative flex justify-center"}>
                                <img src="/images/cat1.png" className={" w-full h-full rounded contrast-50"} alt=""/>
                                <div className={"flex flex-col justify-center items-center gap-y-4 absolute bottom-0 my-8"}>
                                <span className={"font-bold text-xl"}>
                                    Earth Hour
                                </span>
                                    <span className={"text-gold font-bold text-lg"}>
                                    Closed on 14 Aprill 2022
                                </span>

                                </div>
                            </div>
                        </article>
                        <article>
                            <div className={"w-312px h-343px relative flex justify-center"}>
                                <img src="/images/cat1.png" className={" w-full h-full rounded contrast-50"} alt=""/>
                                <div className={"flex flex-col justify-center items-center gap-y-4 absolute bottom-0 my-8"}>
                                <span className={"font-bold text-xl"}>
                                    Earth Hour
                                </span>
                                    <span className={"text-gold font-bold text-lg"}>
                                    Closed on 14 Aprill 2022
                                </span>

                                </div>
                            </div>
                        </article>
                        <article>
                            <div className={"w-312px h-343px relative flex justify-center"}>
                                <img src="/images/cat1.png" className={" w-full h-full rounded contrast-50"} alt=""/>
                                <div className={"flex flex-col justify-center items-center gap-y-4 absolute bottom-0 my-8"}>
                                <span className={"font-bold text-xl"}>
                                    Earth Hour
                                </span>
                                    <span className={"text-gold font-bold text-lg"}>
                                    Closed on 14 Aprill 2022
                                </span>

                                </div>
                            </div>
                        </article>
                        <article>
                            <div className={"w-312px h-343px relative flex justify-center"}>
                                <img src="/images/cat1.png" className={" w-full h-full rounded contrast-50"} alt=""/>
                                <div className={"flex flex-col justify-center items-center gap-y-4 absolute bottom-0 my-8"}>
                                <span className={"font-bold text-xl"}>
                                    Earth Hour
                                </span>
                                    <span className={"text-gold font-bold text-lg"}>
                                    Closed on 14 Aprill 2022
                                </span>

                                </div>
                            </div>
                        </article>
                        <article>
                            <div className={"w-312px h-343px relative flex justify-center"}>
                                <img src="/images/cat1.png" className={" w-full h-full rounded contrast-50"} alt=""/>
                                <div className={"flex flex-col justify-center items-center gap-y-4 absolute bottom-0 my-8"}>
                                <span className={"font-bold text-xl"}>
                                    Earth Hour
                                </span>
                                    <span className={"text-gold font-bold text-lg"}>
                                    Closed on 14 Aprill 2022
                                </span>

                                </div>
                            </div>
                        </article>
                    </section>


                </section>





            </HomeLayout>
        </>
    )
}

export default Dscover;
