import React from "react";
import HomeLayout from "@/components/layouts/Home";
import {Usa} from "@/components/SVG/usa";
import Link from "next/link";
const Dscover = () =>  {

    return (
        <>
            <HomeLayout title={"Home"}>
                <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                    <div className={"mt-12 text-56 text-center"}>
                        <h1>Discover the best art galleries</h1>
                            <h2>in your neighbourhood</h2>
                    </div>

                </section>
                <section className={"px-20 bg-editbg py-4 text-black font-bold"}>
                    Art Galleries
                </section>
                <section className={"px-20"}>
                    <div className="relative flex py-10 items-center">
                        <span className="flex-shrink mr-4 text-black text-2xl font-bold">Art galleries in:</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>

                    <section className={"flex justify-between  items-center"}>
                        <div className={"w-3/6 relative"}>
                            <input type="text" placeholder={"Search by name..."} className={"bg-gray-200 pl-4 w-full placeholder-editbg border border-gray-300 rounded py-2"}/>
                            <button className={"absolute right-1 top-2"}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.6133 25.72L23.08 21.2C24.5427 19.3366 25.3363 17.0355 25.3333 14.6667C25.3333 12.557 24.7077 10.4947 23.5357 8.74059C22.3636 6.98646 20.6977 5.61929 18.7486 4.81196C16.7996 4.00462 14.6548 3.79339 12.5857 4.20496C10.5166 4.61654 8.61596 5.63244 7.1242 7.1242C5.63244 8.61596 4.61654 10.5166 4.20496 12.5857C3.79339 14.6548 4.00462 16.7996 4.81196 18.7486C5.61929 20.6977 6.98646 22.3636 8.74059 23.5357C10.4947 24.7077 12.557 25.3333 14.6667 25.3333C17.0355 25.3363 19.3366 24.5427 21.2 23.08L25.72 27.6133C25.844 27.7383 25.9914 27.8375 26.1539 27.9052C26.3164 27.9729 26.4907 28.0077 26.6667 28.0077C26.8427 28.0077 27.017 27.9729 27.1794 27.9052C27.3419 27.8375 27.4894 27.7383 27.6133 27.6133C27.7383 27.4894 27.8375 27.3419 27.9052 27.1794C27.9729 27.017 28.0077 26.8427 28.0077 26.6667C28.0077 26.4907 27.9729 26.3164 27.9052 26.1539C27.8375 25.9914 27.7383 25.844 27.6133 25.72ZM6.66667 14.6667C6.66667 13.0844 7.13586 11.5377 8.01491 10.2221C8.89397 8.90652 10.1434 7.88114 11.6052 7.27564C13.067 6.67013 14.6755 6.51171 16.2274 6.82039C17.7792 7.12907 19.2047 7.891 20.3235 9.00982C21.4423 10.1286 22.2043 11.5541 22.513 13.1059C22.8216 14.6578 22.6632 16.2663 22.0577 17.7281C21.4522 19.1899 20.4268 20.4394 19.1112 21.3184C17.7956 22.1975 16.2489 22.6667 14.6667 22.6667C12.5449 22.6667 10.5101 21.8238 9.00982 20.3235C7.50953 18.8232 6.66667 16.7884 6.66667 14.6667Z" fill="#7B7575"/>
                                    </svg>
                            </button>
                        </div>
                        <div className={"w-3/6"}>
                                <img src="/images/usa.png" className={"w-32 float-right"} alt=""/>
                        </div>
                        <div className={"both-clear"}></div>
                    </section>
                    <section className={"grid grid-cols-5 gap-4 my-20"}>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 bg-gold text-white text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                        <article className={"px-16 py-2 rounded-full border border-gray-300 text-black text-center"}>ALABAMA</article>
                    </section>
                    <section className={"flex flex-col justify-center items-center py-10"}>
                        <span className={"text-secondary underline"}>SEE MORE</span>
                    </section>
                </section>
                <section className={"px-20 bg-editbg"}>
                    <div className="relative flex py-10 items-center">
                        <div className="flex-grow border-t border-gold"></div>
                        <span className="flex-shrink mx-4 text-black text-2xl font-bold">Popular cities for the arts</span>
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






            </HomeLayout>
        </>
    )
}

export default Dscover;
