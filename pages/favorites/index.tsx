import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
function Favorites()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>My Favorites</h1>
                </div>
                <div>
                    <p>Discover artwork selections curated especially for you by our Art Advisors</p>
                </div>
            </section>
            <section className={"bg-primary-dark flex gap-y-8 flex-col items-center justify-center py-10"}>
                <button className={"w-72 h-16 bg-secondary"}>
                    CREATE AN ACCOUNT
                </button>
                <a href="" className={"text-gold font-bold border-b border-gold"}>
                    ALREADY HAVE AN ACCOUNT? SIGN IN!
                </a>

            </section>

            <section className={"px-20 my-10"}>
                <div className={"grid grid-cols-3 gap-4 mt-12"}>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                            <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"mt-3 flex gap-2"}>
                                <span className={"text-gray-400"}>Size :</span>
                                <span className={"font-bold"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-2"}>
                                <span  className={"text-gray-400"}>Price :</span>
                                <span className={"text-black font-bold"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                            <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"mt-3 flex gap-2"}>
                                <span className={"text-gray-400"}>Size :</span>
                                <span className={"font-bold"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-2"}>
                                <span  className={"text-gray-400"}>Price :</span>
                                <span className={"text-black font-bold"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                            <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                            <div className={"mt-3 flex gap-2"}>
                                <span className={"text-gray-400"}>Size :</span>
                                <span className={"font-bold"}>50 x 75 cm</span>
                            </div>
                            <div className={"flex gap-2"}>
                                <span  className={"text-gray-400"}>Price :</span>
                                <span className={"text-black font-bold"}>2,500$</span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section className={"my-10 flex flex-col items-center justify-center text-black gap-y-4"}>
                <span>
                    <AiOutlineExclamationCircle size={50}/>
                </span>
                <span>You don't have any favorites saved yet!</span>
            </section>
        </HomeLayout>
    )
}

export default Favorites;
