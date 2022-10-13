import React, {useEffect} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {RiArrowDropRightLine} from "react-icons/ri"
import {decode} from 'html-entities';
import {MAGAZINE} from "@/hooks/useApi";
import parse from 'html-react-parser'
import moment from "moment";
function Magazine()  {
    const [magazines,setMagazines] = React.useState<any>();
    const truncate = (str:any, max:any, suffix:any) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
    useEffect(()=>{
        MAGAZINE().then((res:any)=>{
            setMagazines(res.data.magazines)
        })
    },[])
    return (
        <HomeLayout title={"Home"}>
            <section className={"flex items-center justify-left  gap-2 bg-sub-header py-4 px-20 text-black"}>
                <span className={"text-gray-800"}>Magazines</span>
            </section>
            <section className={"px-20"}>
                <div className={"grid grid-cols-3 gap-4 mt-12"}>
                    {
                        magazines && (
                            magazines.map((mag:any,i:number)=>
                                    <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                        <div><img src={mag.logo} className={"w-96 h-96"} alt=""/></div>
                                        <div className={"flex gap-2"}>
                                            <span className={"font-bold text-title"}>Date:</span>
                                            <span className={"text-gray-400"}>{moment(mag.created_at).format('YYYY-MM-DD HH:MM')}</span>
                                        </div>
                                        <div className={"font-bold text-lg "}>
                                            <span>
                                                <a href={"/magazine/detail/"+mag.slug}>{mag.title}</a>
                                            </span>
                                        </div>
                                        {/*<div className={"text-lg"}>*/}
                                        {/*    <p>*/}
                                        {/*        {*/}
                                        {/*            parse(truncate(mag.short_description,40,'...'))*/}
                                        {/*        }*/}

                                        {/*    </p>*/}
                                        {/*</div>*/}
                                        <div>
                                           <span className={"text-gold border-b border-gold"}>
                                               <a href={"/magazine/detail/"+mag.slug}>Read more</a>
                                           </span>
                                        </div>
                                    </article>
                            )
                        )
                    }
                </div>
            </section>
            <section className={"w-full flex items-center justify-center my-20"}>
                <a href={"/magazine"} className={"text-secondary  rounded border-b"}>
                    SEE MORE
                </a>
            </section>
        </HomeLayout>
    )
}
export default Magazine;
