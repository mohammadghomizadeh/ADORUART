import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
function Magazin()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={HomeStyle.head}>
                <div className={"my-12"}>
                    <h1>ADORUART Magazine</h1>
                </div>
            </section>
            <section className={"bg-sub-header py-4 px-20 text-black"}>
                <span>Magazine</span>
            </section>
            <section className={"px-20"}>
                <div className={"grid grid-cols-3 gap-4 mt-12"}>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex gap-2"}>
                            <span className={"font-bold text-title"}>Date:</span>
                            <span className={"text-gray-400"}>3.28.2022</span>
                        </div>
                        <div className={"font-bold text-lg "}>
                            <span>10 International Designers to Follow on Instagram and Why</span>
                        </div>
                        <div className={"text-lg"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className={"mt-4"}>
                           <span className={"text-gold border-b border-gold"}>
                               <a href="">Read more</a>
                           </span>
                        </div>
                    </article>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex gap-2"}>
                            <span className={"font-bold text-title"}>Date:</span>
                            <span className={"text-gray-400"}>3.28.2022</span>
                        </div>
                        <div className={"font-bold text-lg "}>
                            <span>10 International Designers to Follow on Instagram and Why</span>
                        </div>
                        <div className={"text-lg"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className={"mt-4"}>
                           <span className={"text-gold border-b border-gold"}>
                               <a href="">Read more</a>
                           </span>
                        </div>
                    </article>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex gap-2"}>
                            <span className={"font-bold text-title"}>Date:</span>
                            <span className={"text-gray-400"}>3.28.2022</span>
                        </div>
                        <div className={"font-bold text-lg "}>
                            <span>10 International Designers to Follow on Instagram and Why</span>
                        </div>
                        <div className={"text-lg"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className={"mt-4"}>
                           <span className={"text-gold border-b border-gold"}>
                               <a href="">Read more</a>
                           </span>
                        </div>
                    </article>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex gap-2"}>
                            <span className={"font-bold text-title"}>Date:</span>
                            <span className={"text-gray-400"}>3.28.2022</span>
                        </div>
                        <div className={"font-bold text-lg "}>
                            <span>10 International Designers to Follow on Instagram and Why</span>
                        </div>
                        <div className={"text-lg"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className={"mt-4"}>
                           <span className={"text-gold border-b border-gold"}>
                               <a href="">Read more</a>
                           </span>
                        </div>
                    </article>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex gap-2"}>
                            <span className={"font-bold text-title"}>Date:</span>
                            <span className={"text-gray-400"}>3.28.2022</span>
                        </div>
                        <div className={"font-bold text-lg "}>
                            <span>10 International Designers to Follow on Instagram and Why</span>
                        </div>
                        <div className={"text-lg"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className={"mt-4"}>
                           <span className={"text-gold border-b border-gold"}>
                               <a href="">Read more</a>
                           </span>
                        </div>
                    </article>
                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                        <div><img src="/images/mag.png" width={"100%"} alt=""/></div>
                        <div className={"flex gap-2"}>
                            <span className={"font-bold text-title"}>Date:</span>
                            <span className={"text-gray-400"}>3.28.2022</span>
                        </div>
                        <div className={"font-bold text-lg "}>
                            <span>10 International Designers to Follow on Instagram and Why</span>
                        </div>
                        <div className={"text-lg"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className={"mt-4"}>
                           <span className={"text-gold border-b border-gold"}>
                               <a href="">Read more</a>
                           </span>
                        </div>
                    </article>
                </div>
            </section>
            <section className={"w-full flex items-center justify-center my-20"}>
                <a href={""} className={"text-secondary  rounded border-b"}>
                    SEE MORE
                </a>
            </section>
        </HomeLayout>
    )
}

export default Magazin;
