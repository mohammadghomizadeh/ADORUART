// @flow
import * as React from 'react';
import HomeLayout from "@/components/layouts/Home";
import parse from 'html-react-parser'
import moment from "moment";
type Props = {
data:any
};
export const HomeMagazine = (props: Props) => {
    const {data} = props;
    const truncate = (str:any, max:any, suffix:any) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
    return (
        <div>
            <section className={"px-20"}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <div className={"border-gold  border-b w-full hidden lg:block"}> </div>
                    <div className={"text-title text-4xl  w-full text-center"}>ADORUART Magazine</div>
                    <div className={"border-gold  border-b w-full hidden lg:block"}></div>
                </div>
                {
                    data && (
                        data.length > 0 ?(
                            <div className={"flex gap-6 mt-12"}>
                                {
                                    data.map((blog:any,blogI:number)=>
                                            <article key={blogI} className={"text-black flex flex-col gap-y-2 w-3/12"}>
                                                <div><img src={blog.logo} alt="" className={"w-312px h-312px"}/></div>
                                                <div className={"flex gap-2"}>
                                                    <span className={"font-bold text-title"}>Date:</span>
                                                    <span className={"text-gray-400"}>{moment(blog.created_at).format('YYYY-MM-DD HH:MM')}</span>
                                                </div>
                                                <div className={"font-bold text-lg "}>
                                                    <span><a href={"/magazine/detail/"+blog.slug}>{truncate(blog.title,60,'...')}</a></span>
                                                </div>
                                                {/*<div className={"text-lg h-51px"}>*/}
                                                {/*    <p>{truncate(blog.short_description,60,'...')}</p>*/}
                                                {/*</div>*/}
                                                <div className={""}>
                                                   <span className={"text-gold border-b border-gold"}>
                                                       <a href={"/magazine/detail/"+blog.slug}>Read more</a>
                                                   </span>
                                                </div>
                                            </article>
                                    )
                                }
                            </div>
                        ):(
                            <div className={"lg:flex gap-6 mt-12"}>
                                <article className={"text-black flex flex-col gap-y-2 lg:w-3/12"}>
                                    <div><img src="/images/mag.png" className={"w-full"} alt=""/></div>
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
                                <article className={"text-black flex flex-col gap-y-2 lg:w-3/12"}>
                                    <div><img src="/images/mag.png" className={"w-full"} alt=""/></div>
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
                                <article className={"text-black flex flex-col gap-y-2 lg:w-3/12"}>
                                    <div><img src="/images/mag.png" className={"w-full"} alt=""/></div>
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
                                <article className={"text-black flex flex-col gap-y-2 lg:w-3/12"}>
                                    <div><img src="/images/mag.png" className={"w-full"} alt=""/></div>
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
                        )
                    )
                }

            </section>
            <section className={"w-full flex items-center justify-center my-20"}>
                <a href={"/magazine"} className={"border-2 border-secondary bg-transparent text-secondary py-4 px-8 rounded"}>
                    Read all news
                </a>
            </section>
        </div>
    );
};
