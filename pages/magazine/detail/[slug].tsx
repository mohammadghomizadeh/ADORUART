import React,{useState,useEffect} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {RiArrowDropRightLine} from "react-icons/ri"
import { useRouter } from "next/router";
import {MAGAZINE_SLUG} from "@/hooks/useApi"
import {json} from "stream/consumers";
import parse from 'html-react-parser'
import Link from "next/link";
function MagazineDetail()  {
    const truncate = (str:any, max:any, suffix:any) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
    const [content,setContents] = useState<any>("");
    const [latests,setLatests] = useState<any>("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            var slug:any = (url:any) => new URL(url).pathname.match(/[^\/]+/g)
            var blogSlug:any = slug(window.location.href);
            var singleSlug = blogSlug[2];
        }
        MAGAZINE_SLUG(singleSlug).then((result:any)=>{
            setContents(result.data.magazine);
            setLatests(result.data.latests);
        })
    }, []);
    return (
        <HomeLayout title={"Home"}>
            <section className={"flex items-center justify-left  gap-2 bg-sub-header py-4 px-20 text-black"}>
                <span className={"text-gray-400"}><a href="/magazine">Magazine</a></span>
                <span><RiArrowDropRightLine size={20} className={"text-gray-400"}/></span>
                <span className={"font-bold"}>{content && content.title}</span>
            </section>


            <section className="px-20">
                <div className="w-full py-10">
                    <h1 className={"text-black font-bold text-lg"}>
                        {content && content.title}
                    </h1>
                </div>
                <section className={"flex gap-6"}>
                    <article className={"w-3/5"}>
                        <div>
                            {
                                content ? (
                                    <Image
                                        src={content && content.logo}
                                        alt={content && content.title}
                                        width={800} height={400}
                                        sizes="(max-width: 768px) 100vw,
                                      (max-width: 1200px) 50vw,
                                      33vw"
                                    />
                                ):(
                                    <img src={""} alt={""} className={"w-full h-96"}/>
                                )
                            }

                            {/*<img src={content.logo} alt={content.title} className={"w-full h-96"}/>*/}
                        </div>
                        <div className={"text-black py-10 pl-8"}>
                            {content && parse(content.description)}
                        </div>

                    </article>
                    <aside className={"w-2/5"}>
                        <span className={"text-black font-bold"}>
                            Latest Posts
                        </span>
                        <div className={"mt-4"}>
                            {
                                latests ? (
                                    latests.map((last:any,i:number)=>
                                        <article key={i} className={"flex gap-4 pb-4 border-b mb-4"}>
                                            <div><img src={last.logo} className={"w-200px h-200px"} alt=""/></div>
                                            <div>
                                                <div className={"flex gap-2 text-black pb-3 text-sm"}>
                                                    <span>Date : </span>
                                                    <span>{last.created_at}</span>
                                                </div>
                                                <div className={" pb-3"}>
                                                    <span className={"text-black font-bold"}>{last.title}</span>
                                                </div>
                                                <div className={"pb-10"}>
                                                    <p className={"text-black text-sm"}>
                                                        {parse(truncate(last.short_description,40,'...'))}
                                                    </p>
                                                </div>
                                                <div>
                                                        <a href={"/magazine/detail/"+last.slug} className={"text-gold border-b border-gold"}>
                                                            Read More
                                                        </a>
                                                </div>
                                            </div>

                                        </article>
                                    )
                                ):(
                                    <article className={"flex gap-4 pb-4 border-b mb-4"}>
                                        <div><img src={content && content.logo} className={"w-200px h-200px"} alt=""/></div>
                                        <div>
                                            <div className={"flex gap-2 text-black pb-3"}>
                                                <span>Date</span>
                                                <span>10-20-30</span>
                                            </div>
                                            <div className={" pb-3"}>
                                                <span className={"text-black font-bold"}>How to start an art collection</span>
                                            </div>
                                            <div className={"pb-10"}>
                                                <p className={"text-black"}>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit...
                                                </p>
                                            </div>
                                            <div>
                                                <Link href={"#"}>
                                                    <a className={"text-gold border-b border-gold"}>
                                                        Read More
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>

                                    </article>
                                )
                            }
                        </div>
                        <div className={"mt-6"}>
                            <button className={"rounded border w-full border-secondary py-4 text-secondary"}>
                                SEE MORE POSTS
                            </button>
                        </div>

                    </aside>
                </section>
            </section>
        </HomeLayout>
    )
}
// This gets called on every request
// export async function getServerSideProps(context:any) {
//     const { slug } = context.query;
//     const res:any = await MAGAZINE_SLUG(slug)
//     const {data} = res;
//     return { props: { data } }
// }
export default MagazineDetail;
