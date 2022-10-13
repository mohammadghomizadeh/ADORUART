// @flow
import * as React from 'react';
import HomeStyle from "@/styles/pages/Home.module.scss";
import Link from "next/link";

type Props = {
    data:any
};
export const NftCategory = (props: Props) => {
    const {data} = props;
    return (
        <section className={HomeStyle.nft}>
            <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                <div className={"border-gold  border-b w-full hidden lg:block"}> </div>
                <div className={"text-title text-4xl  w-full text-center"}>NFT artworks & paintings</div>
                <div className={"border-gold  border-b w-full hidden lg:block"}></div>
            </div>
            <span className={"text-title text-xl py-4  block justify-center  lg:mx-56 mx-10 text-center mt-8"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua
                </span>
            <div className={HomeStyle.nftgallery}>
                    {
                        data ?(
                            <div className={"lg:flex justify-center items-center gap-6"}>
                                {
                                    data.map((product:any,i:number)=>
                                        <Link href={"/artwork/detail/"+product.slug}>
                                            <a>
                                                <div>
                                                    <div className={"border-2 border-black p-2 rounded"}>
                                                        {
                                                            product.image ? (
                                                                <img src={product.image} alt=""/>
                                                            ):(
                                                                <img src={"/images/artwork1.png"} alt=""/>
                                                            )
                                                        }


                                                    </div>
                                                    <div className={"flex flex-col text-left mt-6 text-black"}>
                                                        <span className={"text-gold text-lg"}>{product.title}</span>
                                                        <span className={"text-sm"}>Artist : {product.user ? product.user.name : 'ADORUART'}</span>
                                                        <span className={"mt-4"}>Price: <b>{product.price}$</b></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    )
                                }
                            </div>
                        ):(
                            <div className={"lg:flex justify-center items-center gap-6"}>
                                <Link href={"/artwork/detail/Artwork-1"}>
                                    <a>
                                        <div>
                                            <div className={"border-2 border-black p-2 rounded"}>
                                                <img src={"/images/artwork1.png"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col text-left mt-6 text-black"}>
                                                <span className={"text-gold text-lg"}>Artwork name</span>
                                                <span className={"text-sm"}>Artist name</span>
                                                <span className={"mt-4"}>Price: <b>1200$</b></span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href={"/artwork/detail/Artwork-2"}>
                                    <a>
                                        <div>
                                            <div className={"border-2 border-black p-2 rounded"}>
                                                <img src={"/images/artwork2.png"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col text-left mt-6 text-black"}>
                                                <span className={"text-gold text-lg"}>Artwork name</span>
                                                <span className={"text-sm"}>Artist name</span>
                                                <span className={"mt-4"}>Price: <b>1200$</b></span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href={"/artwork/detail/Artwork-3"}>
                                    <a>
                                        <div>
                                            <div className={"border-2 border-black p-2 rounded"}>
                                                <img src={"/images/artwork3.png"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col text-left mt-6 text-black"}>
                                                <span className={"text-gold text-lg"}>Artwork name</span>
                                                <span className={"text-sm"}>Artist name</span>
                                                <span className={"mt-4"}>Price: <b>1200$</b></span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href={"/artwork/detail/Artwork-4"}>
                                    <a>
                                        <div>
                                            <div className={"border-2 border-black p-2 rounded"}>
                                                <img src={"/images/artwork4.png"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col text-left mt-6 text-black"}>
                                                <span className={"text-gold text-lg"}>Artwork name</span>
                                                <span className={"text-sm"}>Artist name</span>
                                                <span className={"mt-4"}>Price: <b>1200$</b></span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    }
            </div>
            <button>SEE MORE</button>
        </section>
    );
};
