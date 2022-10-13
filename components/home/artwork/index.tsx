// @flow
import * as React from 'react';
import HomeStyle from "@/styles/pages/Home.module.scss";
import Link from "next/link";

type Props = {
    data:any
};
export const HomeArtwork = (props: Props) => {
    const {data} = props;
    return (
        <section className={HomeStyle.artwork}>
            <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                <div className={"border-gold  border-b w-full hidden lg:block"}> </div>
                <div className={"text-title text-4xl  w-full text-center"}>Find your next artwork to bring home</div>
                <div className={"border-gold  border-b w-full hidden lg:block"}></div>
            </div>
            <section className={"w-full lg:flex  justify-center items-center px-20 gap-6 mt-20"}>
                {/*<img src={"/images/artwork1.png"} alt=""/>*/}
                <div className={"lg:w-1/2"}>
                    {
                        data && (
                            <Link href={data[0].name}>
                                <a>
                                    <div className={HomeStyle.hoverParent}>
                                        {
                                            data[0].logo ? (
                                                <img src={data[0].logo} alt={data[0].name} width={"100%"}/>
                                            ):(
                                                <img src={"/images/artwork1.png"} alt={data[0].name}/>
                                            )
                                        }
                                        <span className={HomeStyle.hoverChild}> {data[0].name} </span>
                                    </div>
                                </a>
                            </Link>
                        )
                    }
                            <div className={"lg:flex justify-between items-center gap-4 mt-4"}>
                                {
                                    data && (
                                        <Link href={data[1].name}>
                                            <a>
                                                <div className={HomeStyle.hoverParent}>
                                                    {
                                                        data[1].logo ? (
                                                            <img src={data[1].logo} alt={data[1].name}/>
                                                        ):(
                                                            <img src={"/images/artwork2.png"} alt={data[1].name}/>
                                                        )
                                                    }
                                                    <span className={HomeStyle.hoverChild}> {data[1].name} </span>
                                                </div>
                                            </a>
                                        </Link>
                                    )
                                }
                                {
                                    data && (
                                        <Link href={data[2].slug}>
                                            <a>
                                                <div className={HomeStyle.hoverParent}>
                                                    {
                                                        data[2].logo ? (
                                                            <img src={data[2].logo} alt={data[2].name}/>
                                                        ):(
                                                            <img src={"/images/artwork3.png"} alt={data[2].name}/>
                                                        )
                                                    }
                                                    <span className={HomeStyle.hoverChild}> {data[2].name} </span>
                                                </div>
                                            </a>
                                        </Link>
                                    )
                                }

                            </div>
                </div>
                <div className={"lg:w-1/2"}>
                    <div className={"flex justify-between items-center gap-4"}>
                        {
                            data && (
                                <Link href={data[3].slug}>
                                    <a>
                                        <div className={HomeStyle.hoverParent}>
                                            {
                                                data[3].logo ? (
                                                    <img src={data[3].logo} alt={data[3].name}/>
                                                ):(
                                                    <img src={"/images/artwork4.png"} alt={data[3].name}/>
                                                )
                                            }
                                            <span className={HomeStyle.hoverChild}> {data[3].name} </span>
                                        </div>
                                    </a>
                                </Link>
                            )
                        }
                        {
                            data && (
                                <Link href={data[4].slug}>
                                    <a>
                                        <div className={HomeStyle.hoverParent}>
                                            {
                                                data[4].logo ? (
                                                    <img src={data[4].logo} alt={data[4].name}/>
                                                ):(
                                                    <img src={"/images/artwork5.png"} alt={data[4].name}/>
                                                )
                                            }
                                            <span className={HomeStyle.hoverChild}> {data[4].name} </span>
                                        </div>
                                    </a>
                                </Link>
                            )
                        }

                    </div>
                    {
                        data && (
                            <Link href={data[5].slug}>
                                <a>
                                    <div className={HomeStyle.hoverParent} style={{'marginTop':'15px'}}>
                                        {
                                            data[5].logo ? (
                                                <img src={data[5].logo} alt={data[5].name}/>
                                            ):(
                                                <img src={"/images/artwork6.png"} alt={data[5].name}/>
                                            )
                                        }
                                        <span className={HomeStyle.hoverChild}> {data[5].name} </span>
                                    </div>
                                </a>
                            </Link>
                        )
                    }
                </div>
            </section>
            <button>SEE MORE</button>
        </section>
    );
};
