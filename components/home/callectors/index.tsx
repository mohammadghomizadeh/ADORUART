// @flow
import * as React from 'react';
import HomeStyle from "@/styles/pages/Home.module.scss";

type Props = {
    data:any
};
export const HomeCollectors = (props: Props) => {
    const {data} = props;
    return (
        <section className={HomeStyle.callectors}>
            <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                <div className={"border-gold  border-b w-full hidden lg:block"}> </div>
                <div className={"text-title text-4xl  w-full text-center"}>The artists collectors</div>
                <div className={"border-gold  border-b w-full hidden lg:block"}></div>
            </div>
            <section className={"lg:flex gap-6 mt-10"}>
                {
                    data ? (
                        data.map((collector:any,i:number)=>
                            <div key={i} className={"border-gold border py-4 px-6 flex items-center gap-4 my-2 lg:m-0"}>
                                <div>
                                    <img src="/images/collectors.png" alt=""/>
                                </div>
                                <div className={"text-black flex flex-col"}>
                                    <span className={"font-bold text-lg"}>{collector.name ? (collector.name):('JAVIER TORICES')}</span>
                                    <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                                </div>
                            </div>
                        )
                    ):(
                        <>
                            <div className={"border-gold border py-4 px-6 flex items-center gap-4 my-2 lg:m-0"}>
                                <div>
                                    <img src="/images/collectors.png" alt=""/>
                                </div>
                                <div className={"text-black flex flex-col"}>
                                    <span className={"font-bold text-lg"}>JAVIER TORICES</span>
                                    <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                                </div>
                            </div>
                            <div className={"border-gold border py-4 px-6 flex items-center gap-4 my-2 lg:m-0"}>
                                <div>
                                    <img src="/images/collectors.png" alt=""/>
                                </div>
                                <div className={"text-black flex flex-col"}>
                                    <span className={"font-bold text-lg"}>JAVIER TORICES</span>
                                    <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                                </div>
                            </div>
                            <div className={"border-gold border py-4 px-6 flex items-center gap-4 my-2 lg:m-0"}>
                                <div>
                                    <img src="/images/collectors.png" alt=""/>
                                </div>
                                <div className={"text-black flex flex-col"}>
                                    <span className={"font-bold text-lg"}>JAVIER TORICES</span>
                                    <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                                </div>
                            </div>
                            <div className={"border-gold border py-4 px-6 flex items-center gap-4 my-2 lg:m-0"}>
                                <div>
                                    <img src="/images/collectors.png" alt=""/>
                                </div>
                                <div className={"text-black flex flex-col"}>
                                    <span className={"font-bold text-lg"}>JAVIER TORICES</span>
                                    <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                                </div>
                            </div>
                        </>
                    )
                }



            </section>

        </section>
    );
};
