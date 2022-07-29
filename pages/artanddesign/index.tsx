import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
function ArtDesign()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center  items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>Art and Design</h1>
                </div>
            </section>
            <section className={"bg-sub-header py-4 px-20 text-black"}>
                <span>Art and Design</span>
            </section>
            <section className={"bg-sub-header-p py-10 px-20 text-black"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in
                    nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
                    senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed
                    ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
                    tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna.
                </p>
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
            <section className={"my-20 flex flex-col items-center justify-center text-black gap-y-4"}>
                <span className={"text-primary border-b border-primary"}>
                    <a href="">
                        SHOW MORE ARTWORKS
                    </a>
                </span>
                <span>10/100 Result</span>
            </section>
        </HomeLayout>
    )
}

export default ArtDesign;
