import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import Link from "next/link";
function Candle()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>Candle auctions</h1>
                </div>
                <div>
                    <p>Discover artwork selections curated especially for you by our Art Advisors</p>
                </div>
            </section>
            <section className={"bg-primary-dark flex gap-y-8 flex-col items-center justify-center py-10"}>
                <a href="" className={"flex flex-col gap-y-4 items-center justify-center text-gold font-bold "}>
                    <span>
                        No auctions are scheduled at this time.
                    </span>
                    <span>
                        Subscribe to be updated about the next one!
                    </span>
                </a>
                <button className={"px-16 h-16 bg-secondary uppercase"}>
                    Stay up to date on all of our events
                </button>

            </section>
            <section className={"text-black px-20 my-20 flex flex-col gap-y-6"}>
                <span className={"font-bold text-xl"}>
                    How does a candle auction work?
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis
                    pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum
                </p>
            </section>
            <section className={"px-20"}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6 my-10"}>
                    <div className={"border-gold  border-b w-full"}> </div>
                    <div className={"text-title text-4xl  w-full text-center"}>Search our past events</div>
                    <div className={"border-gold  border-b w-full"}></div>
                </div>
                <section className={"grid grid-cols-4 gap-4 my-20"}>
                    <article>
                        <div className={"w-312px h-400px relative flex justify-center"}>
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
                        <div className={"w-312px h-400px relative flex justify-center"}>
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
                        <div className={"w-312px h-400px relative flex justify-center"}>
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
                        <div className={"w-312px h-400px relative flex justify-center"}>
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
                <section className={"flex flex-col justify-center items-center my-32"}>
                    <Link href={"/"}>
                        <a className={"text-secondary border-b border-secondary"}>
                            SHOW PAST EVENTS
                        </a>
                    </Link>
                </section>
            </section>
            <section className={"py-10 text-black px-20 bg-editbg"}>
                <div className={" w-full justify-start items-center"}>
                    <div className={"float-left text-3xl font-bold pr-5"}>Beautiful lots sold at auction</div>
                    <div className={"pt-5"}>
                        <hr className={"h-2px text-gold bg-gold"}/>
                    </div>
                </div>
                <div className={"clear-both"}></div>
                <section id={"galleryItems"}>
                    <header className={"flex justify-end my-8"}>
                        <button className={"py-2 px-4 bg-sub-header rounded text-gray-400"}>
                            See more
                        </button>
                    </header>
                    <section className={"flex gap-6 my-4"}>
                        <article>
                            <div>
                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                    <span>
                                    50 x 75 cm
                                </span>
                                </div>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                    <span>
                                    2,500$
                                </span>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div>
                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                    <span>
                                    50 x 75 cm
                                </span>
                                </div>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                    <span>
                                    2,500$
                                </span>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div>
                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                    <span>
                                    50 x 75 cm
                                </span>
                                </div>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                    <span>
                                    2,500$
                                </span>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div>
                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                    <span>
                                    50 x 75 cm
                                </span>
                                </div>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                    <span>
                                    2,500$
                                </span>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div>
                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                    <span>
                                    50 x 75 cm
                                </span>
                                </div>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                    <span>
                                    2,500$
                                </span>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div>
                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                            </div>
                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                    <span>
                                    50 x 75 cm
                                </span>
                                </div>
                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                    <span>
                                    2,500$
                                </span>
                                </div>
                            </div>
                        </article>
                    </section>

                </section>
            </section>
        </HomeLayout>
    )
}

export default Candle;
