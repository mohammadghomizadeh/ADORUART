import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
function Colors()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>Colors</h1>
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
                <span>Colors</span>

            </section>


            <section className={"grid grid-cols-3 gap-y-10 pl-20"}>
                <article className={"text-black"}>
                   <section className={"flex flex-col gap-y-6"}>
                       <div className={"flex flex-row gap-6 h-94px"}>
                           <div className="basis-1/2 bg-red-200">03</div>
                           <div className="basis-1/4 bg-green-200">02</div>
                       </div>
                       <div className={"flex flex-row gap-6 h-94px"}>
                           <div className="basis-1/4 bg-green-200">02</div>
                           <div className="basis-1/2 bg-red-200">03</div>
                       </div>
                   </section>
                   <section className={"flex flex-col gap-y-2 mt-4"}>
                       <span className={"font-bold text-lg text-gold"}>
                           THE BLUE COLLECTIONS
                       </span>
                       <span className={"text-gray-400"}>
                           120 Artworks
                       </span>
                   </section>
                </article>
                <article className={"text-black"}>
                    <section className={"flex flex-col gap-y-6"}>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/2 bg-red-200">03</div>
                            <div className="basis-1/4 bg-green-200">02</div>
                        </div>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/4 bg-green-200">02</div>
                            <div className="basis-1/2 bg-red-200">03</div>
                        </div>
                    </section>
                    <section className={"flex flex-col gap-y-2 mt-4"}>
                       <span className={"font-bold text-lg text-gold"}>
                           THE BLUE COLLECTIONS
                       </span>
                        <span className={"text-gray-400"}>
                           120 Artworks
                       </span>
                    </section>
                </article>
                <article className={"text-black"}>
                    <section className={"flex flex-col gap-y-6"}>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/2 bg-red-200">03</div>
                            <div className="basis-1/4 bg-green-200">02</div>
                        </div>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/4 bg-green-200">02</div>
                            <div className="basis-1/2 bg-red-200">03</div>
                        </div>
                    </section>
                    <section className={"flex flex-col gap-y-2 mt-4"}>
                       <span className={"font-bold text-lg text-gold"}>
                           THE BLUE COLLECTIONS
                       </span>
                        <span className={"text-gray-400"}>
                           120 Artworks
                       </span>
                    </section>
                </article>
                <article className={"text-black"}>
                    <section className={"flex flex-col gap-y-6"}>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/2 bg-red-200">03</div>
                            <div className="basis-1/4 bg-green-200">02</div>
                        </div>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/4 bg-green-200">02</div>
                            <div className="basis-1/2 bg-red-200">03</div>
                        </div>
                    </section>
                    <section className={"flex flex-col gap-y-2 mt-4"}>
                       <span className={"font-bold text-lg text-gold"}>
                           THE BLUE COLLECTIONS
                       </span>
                        <span className={"text-gray-400"}>
                           120 Artworks
                       </span>
                    </section>
                </article>
                <article className={"text-black"}>
                    <section className={"flex flex-col gap-y-6"}>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/2 bg-red-200">03</div>
                            <div className="basis-1/4 bg-green-200">02</div>
                        </div>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/4 bg-green-200">02</div>
                            <div className="basis-1/2 bg-red-200">03</div>
                        </div>
                    </section>
                    <section className={"flex flex-col gap-y-2 mt-4"}>
                       <span className={"font-bold text-lg text-gold"}>
                           THE BLUE COLLECTIONS
                       </span>
                        <span className={"text-gray-400"}>
                           120 Artworks
                       </span>
                    </section>
                </article>
                <article className={"text-black"}>
                    <section className={"flex flex-col gap-y-6"}>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/2 bg-red-200">03</div>
                            <div className="basis-1/4 bg-green-200">02</div>
                        </div>
                        <div className={"flex flex-row gap-6 h-94px"}>
                            <div className="basis-1/4 bg-green-200">02</div>
                            <div className="basis-1/2 bg-red-200">03</div>
                        </div>
                    </section>
                    <section className={"flex flex-col gap-y-2 mt-4"}>
                       <span className={"font-bold text-lg text-gold"}>
                           THE BLUE COLLECTIONS
                       </span>
                        <span className={"text-gray-400"}>
                           120 Artworks
                       </span>
                    </section>
                </article>


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

export default Colors;
