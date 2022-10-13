// @flow
import * as React from 'react';
import HomeStyle from "@/styles/pages/Home.module.scss";

type Props = {
    data:any
};
export const HomeCollections = (props: Props) => {
    const {data} = props;
    return (
        <section className={HomeStyle.collections}>
            <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                <div className={"border-gold  border-b w-full hidden lg:block"}> </div>
                <div className={"text-title text-4xl  w-full text-center"}>Our latest collections of original artworks & paintings</div>
                <div className={"border-gold  border-b w-full hidden lg:block"}></div>
            </div>
            <section className={"lg:flex gap-40 mt-24"}>
                {/*<img src={"/images/artwork1.png"} alt=""/>*/}
                <div className={"flex flex-col "}>
                    <div>
                        <div className={"flex gap-6"}>
                            <img src={"/images/cbig1.png"} width={199} alt=""/>
                            <img src={"/images/csmall1.png"}  width={94} alt=""/>
                        </div>
                        <div className={"flex gap-6 mt-6"}>
                            <img src={"/images/artwork1.png"}  width={94} alt=""/>
                            <img src={"/images/cbig2.png"} width={199} alt=""/>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-y-2 py-10 lg:py-3"}>
                            <span className={"text-title"}>
                                SINGULART'S SELECTION
                            </span>
                        <span className={"text-gold font-bold text-xl mt-4"}>
                                Italian Art and Design
                            </span>
                        <span className={"text-nft"}>
                                Updated on 3/21/22
                            </span>
                    </div>
                </div>
                <div className={"flex flex-col "}>
                    <div>
                        <div className={"flex gap-6"}>
                            <img src={"/images/cbig1.png"} width={199} alt=""/>
                            <img src={"/images/csmall1.png"}  width={94} alt=""/>
                        </div>
                        <div className={"flex gap-6 mt-6"}>
                            <img src={"/images/artwork1.png"}  width={94} alt=""/>
                            <img src={"/images/cbig2.png"} width={199} alt=""/>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-y-2 py-10 lg:py-3"}>
                            <span className={"text-title"}>
                                SINGULART'S SELECTION
                            </span>
                        <span className={"text-gold font-bold text-xl mt-4"}>
                                Italian Art and Design
                            </span>
                        <span className={"text-nft"}>
                                Updated on 3/21/22
                            </span>
                    </div>
                </div>
                <div className={"flex flex-col "}>
                    <div>
                        <div className={"flex gap-6"}>
                            <img src={"/images/cbig1.png"} width={199} alt=""/>
                            <img src={"/images/csmall1.png"}  width={94} alt=""/>
                        </div>
                        <div className={"flex gap-6 mt-6"}>
                            <img src={"/images/artwork1.png"}  width={94} alt=""/>
                            <img src={"/images/cbig2.png"} width={199} alt=""/>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-y-2 py-10 lg:py-3"}>
                            <span className={"text-title"}>
                                SINGULART'S SELECTION
                            </span>
                        <span className={"text-gold font-bold text-xl mt-4"}>
                                Italian Art and Design
                            </span>
                        <span className={"text-nft"}>
                                Updated on 3/21/22
                            </span>
                    </div>
                </div>
            </section>
        </section>
    );
};
