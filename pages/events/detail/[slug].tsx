import React, {useState} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";
import {EVENT_SLUG} from "@/hooks/useApi";
import parse from 'html-react-parser'
function EventDetail({data}:any)  {
    const [event,setEvent] = useState<any>(data)
    return (
        <HomeLayout title={"ADORUART | Event Detail"  + event.title && event.title}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>{event.title ? event.title : 'Event Detail'}</h1>
                </div>
                <div>
                    <p>Discover artwork selections curated especially for you by our Art Advisors</p>
                </div>
            </section>
            <section className={"flex items-center gap-2 bg-sub-header py-4 px-20 text-black"}>
                <span><a href="/events">Events</a></span>
                <MdOutlineKeyboardArrowRight/>
                <span><a href={"/events/category/"+event.category.slug}>{event.category && event.category.title}</a></span>
                <MdOutlineKeyboardArrowRight/>
                <span>{event.title && event.title}</span>
            </section>


            <section className={"flex flex-col justify-left my-20 text-black px-20 gap-y-4"}>
                <span className={"font-bold text-xl"}>
                    About this {event.category && event.category.title} {event.title && event.title}
                </span>
                {parse(event.description)}
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
export async function getServerSideProps({query}:any) {
    const res:any =  EVENT_SLUG(query.slug);
    const {data} = await res;
    console.log(data)
    return { props:data }
}
export default EventDetail;
