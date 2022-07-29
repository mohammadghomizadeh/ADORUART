import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";
function Humanity()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>Events</h1>
                </div>
                <div>
                    <p>Discover artwork selections curated especially for you by our Art Advisors</p>
                </div>
            </section>
            <section className={"flex items-center gap-2 bg-sub-header py-4 px-20 text-black"}>
                <span>Events</span>
                <MdOutlineKeyboardArrowRight/>
                <span>Charity auction</span>
                <MdOutlineKeyboardArrowRight/>
                <span>Art for humanity</span>
            </section>


            <section className={"flex flex-col justify-left my-20 text-black px-20 gap-y-4"}>
                <span className={"font-bold text-xl"}>
                    About this Charity auction Art for humanity
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis
                    pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum
                </p>
                <button className={"text-secondary border border-secondary rounded py-4 w-424px mt-6"}>
                    Stay up to date on all of our events
                </button>
            </section>

            <section className={"px-20"}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <div className={"border-gold  border-b w-full"}> </div>
                    <div className={"text-title text-4xl  w-full text-center"}>Artworks of the Sale</div>
                    <div className={"border-gold  border-b w-full"}></div>
                </div>
                <section className={"grid grid-cols-4 gap-4 my-14"}>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div>
                            <img src="/images/artwork2.png" className={"border border-4 border-primary p-2 rounded"} alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-3"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                            <span className={"text-nft"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Size:</span>
                                <span className={"text-black"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>Price:</span>
                                <span className={"text-black"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                </section>
                <section className={"flex flex-col gap-y-6 justify-center items-center my-32"}>
                    <Link href={"/"}>
                        <a className={"text-secondary border-b border-secondary"}>
                            SHOW MORE ARTWORKS
                        </a>
                    </Link>
                    <span className={"text-nft"}>
                        10/100 Result
                    </span>
                </section>
            </section>

        </HomeLayout>
    )
}

export default Humanity;
