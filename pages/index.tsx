import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {SliderShow} from "@/components/home/slider";
 const Home = ({ data,menus }:any) =>  {
     const truncate = (str:any, max:any, suffix:any) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
     return (
        <HomeLayout title={"Home"} menus={menus}>
            <section className={HomeStyle.head}>
                <div className={"w-3/6 pt-10"}>
                    <h1>ADORUART</h1>
                    <h2 className={""}>selects talented artists from all
                        over the world, for you</h2>
                    <button>APPLY NOW</button>
                </div>
                <div>
                    <div className={HomeStyle.slider}>
                        <div className={HomeStyle.sliderItem}>
                            <SliderShow data={data}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={HomeStyle.discover}>
                <h3>Buy Original Art Online on our Art Gallery</h3>
                <h4>A selection of Artworks and Paintings for Sale just for you</h4>
                <div>
                    <img src={"/images/slider1.png"} className={""} />
                    <img src={"/images/slider1.png"} className={""} />
                    <img src={"/images/slider1.png"} className={""} />
                </div>
                <div>
                    <button>DISCOVER OUR SELECTION</button>
                </div>
            </section>
            <section className={HomeStyle.artwork}>
                <div className={HomeStyle.artworktitle}>
                    <hr/>
                    <span>Find your next artwork to bring home</span>
                    <hr/>
                </div>
                <section className={HomeStyle.artworkgallery}>
                    {/*<img src={"/images/artwork1.png"} alt=""/>*/}
                    <div>
                        <div className={HomeStyle.hoverParent}>
                            <img src={"/images/artwork1.png"} alt=""/>
                            <span className={HomeStyle.hoverChild}> Abstraction </span>
                        </div>
                        <div className={"flex justify-between items-center gap-4 mt-4"}>
                            <div className={HomeStyle.hoverParent}><img src={"/images/artwork2.png"} alt=""/><span className={HomeStyle.hoverChild}> Pop Calture </span></div>
                            <div className={HomeStyle.hoverParent}><img src={"/images/artwork3.png"} alt=""/><span className={HomeStyle.hoverChild}> Urban </span></div>
                        </div>
                    </div>
                    <div>
                        <div className={"flex justify-between items-center gap-4"}>
                            <div className={HomeStyle.hoverParent}><img src={"/images/artwork4.png"} alt=""/><span className={HomeStyle.hoverChild}> Landscape </span></div>
                            <div className={HomeStyle.hoverParent}><img src={"/images/artwork5.png"} alt=""/><span className={HomeStyle.hoverChild}> Street Art </span></div>
                        </div>
                        <div className={ HomeStyle.hoverParent} style={{'marginTop':'15px'}}><img src={"/images/artwork6.png"} alt=""/><span className={HomeStyle.hoverChild}> Portrait </span></div>
                    </div>
                </section>
                <button>SEE MORE</button>
            </section>
            <section className={HomeStyle.nft}>
                <div className={HomeStyle.nfttitle}>
                    <hr/>
                    <span>NFT artworks & paintings</span>
                    <hr/>
                </div>
                <span className={"text-title text-xl py-4  block justify-center  mx-56 text-center mt-8"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua
                </span>
                <div className={HomeStyle.nftgallery}>
                    <div className={"flex justify-center items-center gap-6"}>
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
                        <div>
                            <div className={"border-2 border-black p-2 rounded"}>
                                <img src={"/images/artwork5.png"} alt=""/>
                            </div>
                            <div className={"flex flex-col text-left mt-6 text-black"}>
                                <span className={"text-gold text-lg"}>Artwork name</span>
                                <span className={"text-sm"}>Artist name</span>
                                <span className={"mt-4"}>Price: <b>1200$</b></span>
                            </div>
                        </div>
                        <div>
                            <div className={"border-2 border-black p-2 rounded"}>
                                <img src={"/images/artwork4.png"} alt=""/>
                            </div>
                            <div className={"flex flex-col text-left mt-6 text-black"}>
                                <span className={"text-gold text-lg font-bold"}>Artwork name</span>
                                <span className={"text-sm"}>Artist name</span>
                                <span className={"mt-4"}>Price: <b>1200$</b></span>
                            </div>
                        </div>
                    </div>
                </div>
                <button>SEE MORE</button>
            </section>
            <section className={HomeStyle.collections}>
                <div className={HomeStyle.collectionstitle}>
                    <hr/>
                    <span>Our latest collections of original artworks & paintings</span>
                    <hr/>
                </div>
                <section className={HomeStyle.collectionsgallery}>
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
                        <div className={"flex flex-col gap-y-2"}>
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
                        <div className={"flex flex-col gap-y-2"}>
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
                        <div className={"flex flex-col gap-y-2"}>
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
            <section className={HomeStyle.browse}>
                <div className={HomeStyle.browsetitle}>
                    <hr/>
                    <span>Browse by price</span>
                    <hr/>
                </div>
                <div className={"flex gap-6 mt-20"}>
                    <div className={"flex gap-6 w-6/12"}>
                        <div className={"flex flex-col items-center gap-y-6 text-title border-2 border-black  rounded w-6/12 p-17px"}>
                            <img src={"/images/slider1.png"}   alt=""/>
                            <span>Up to</span>
                            <span className={"font-bold"}>1000 $</span>
                            <button className={"bg-secondary text-lg py-4 px-20 rounded-sm text-white w-full "}>
                                SEE NOW
                            </button>
                        </div>
                        <div className={"flex flex-col items-center gap-y-6 text-title border-2 border-black  rounded w-6/12 p-17px"}>
                            <img src={"/images/slider1.png"}   alt=""/>
                            <span>Up to</span>
                            <span className={"font-bold"}>1000 $</span>
                            <button className={"bg-secondary text-lg py-4 px-20 rounded-sm text-white w-full "}>
                                SEE NOW
                            </button>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-y-4 w-6/12"}>
                        <div className={"flex  items-center gap-x-8 text-title border-2 border-black p-17px rounded "}>
                            <img src={"/images/slider1.png"} className={"h-40 w-6/12"}  alt=""/>
                            <div className={"flex flex-col gap-y-5 w-6/12"}>
                                 <span>From <b>1000 $</b></span>
                                 <span>Up to <b>2000 $</b></span>
                                <button className={"bg-secondary text-lg py-4 px-20 rounded-sm text-white w-full "}>
                                    SEE NOW
                                </button>
                            </div>
                        </div>
                        <div className={"flex  items-center gap-x-8 text-title border-2 border-black p-17px rounded"}>
                            <img src={"/images/slider1.png"} className={"h-40 w-6/12"}  alt=""/>
                            <div className={"flex flex-col gap-y-5 w-6/12"}>
                                <span>From <b>1000 $</b></span>
                                <span>Up to <b>2000 $</b></span>
                                <button className={"bg-secondary text-lg py-4 px-20 rounded-sm text-white w-full "}>
                                    SEE NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className={HomeStyle.sales}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <span className={"border-gold  border-b w-2/5"}/>
                    <h1 className={"text-title text-4xl  w-1/5 text-center block"}>New sales</h1>
                    <span className={"border-gold  border-b w-2/5"}/>
                </div>
                <section className={"flex gap-6 mt-10"}>
                    {/*<img src={"/images/artwork1.png"} alt=""/>*/}
                    <div className={"w-30%"}>
                        <div>
                            <img src={"/images/sale1.png"} className={"w-full"}  alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-6"}>
                            <span className={"text-gold font-bold"}>ASPIRATION</span>
                            <span className={"text-black font-bold"}>Mbaye Babacar Diouf</span>
                            <span className={"text-title"}>03/2022 - Senegal</span>
                        </div>
                    </div>
                    <div className={"w-3/6"}>
                        <div className={"flex flex-col"}>
                            <div className={""}>
                                <div>
                                    <img src={"/images/sale2.png"} className={"w-full h-44"} alt=""/>
                                </div>
                                <div className={"flex justify-between gap-y-3 mt-2"}>
                                    <div className={"flex flex-col"}>
                                        <span className={"text-gold font-bold"}>ASPIRATION</span>
                                        <span className={"text-black font-bold mt-2"}>Mbaye Babacar Diouf</span>
                                    </div>
                                    <div>
                                        <span className={"text-title"}>03/2022 - Senegal</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"mt-2"}>
                                <div>
                                    <img src={"/images/sale3.png"} className={"w-full h-44"} alt=""/>
                                </div>
                                    <div className={"flex flex-col mt-4"}>
                                        <span className={"text-gold font-bold"}>ASPIRATION</span>
                                        <span className={"text-black font-bold mt-2"}>Mbaye Babacar Diouf</span>
                                        <span className={"text-title mt-5"}>03/2022 - Senegal</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-1/5"}>
                        <div>
                            <img src={"/images/sale4.png"}  alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-10"}>
                            <span className={"text-gold font-bold"}>ASPIRATION</span>
                            <span className={"text-black font-bold"}>Mbaye Babacar Diouf</span>
                            <span className={"text-title"}>03/2022 - Senegal</span>
                        </div>
                    </div>
                </section>
            </section>
            <section className={HomeStyle.callectors}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <span className={"border-gold  border-b w-2/5"}/>
                    <h1 className={"text-title text-4xl  w-2/5 text-center block"}>The artists collectors</h1>
                    <span className={"border-gold  border-b w-2/5"}/>
                </div>
                <section className={"flex gap-6 mt-10"}>
                    <div className={"border-gold border py-4 px-6 flex items-center gap-4"}>
                        <div>
                            <img src="/images/collectors.png" alt=""/>
                        </div>
                        <div className={"text-black flex flex-col"}>
                            <span className={"font-bold text-lg"}>JAVIER TORICES</span>
                            <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                        </div>
                    </div>
                    <div className={"border-gold border py-4 px-6 flex items-center gap-4"}>
                        <div>
                            <img src="/images/collectors.png" alt=""/>
                        </div>
                        <div className={"text-black flex flex-col"}>
                            <span className={"font-bold text-lg"}>JAVIER TORICES</span>
                            <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                        </div>
                    </div>
                    <div className={"border-gold border py-4 px-6 flex items-center gap-4"}>
                        <div>
                            <img src="/images/collectors.png" alt=""/>
                        </div>
                        <div className={"text-black flex flex-col"}>
                            <span className={"font-bold text-lg"}>JAVIER TORICES</span>
                            <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                        </div>
                    </div>
                    <div className={"border-gold border py-4 px-6 flex items-center gap-4"}>
                        <div>
                            <img src="/images/collectors.png" alt=""/>
                        </div>
                        <div className={"text-black flex flex-col"}>
                            <span className={"font-bold text-lg"}>JAVIER TORICES</span>
                            <span className={"text-sm mt-2"}>SPAIN - PAINTER</span>
                        </div>
                    </div>
                </section>

            </section>
            <section className={"flex justify-center items-center overflow-hidden  w-full"}>
                <section className={"bg-collectorBG bg-no-repeat bg-right  h-96 border-2 w-full items-left justify-center flex flex-col"}>
                    <div className={"flex flex-col text-black pl-16"}>
                        <span className={"text-2xl"}>Get</span>
                        <span className={"font-bold text-3xl"}>free personalized advice</span>
                        <span className={"text-2xl"}>from</span>
                        <span className={"font-bold text-3xl"}>our expert art advisors</span>
                        <button className={"bg-secondary text-lg py-4 px-4 rounded-sm mt-20 w-56 text-white"}>SPEAK WITH US NOW</button>
                    </div>
                </section>
            </section>
            <section className={"flex px-44 py-20 gap-10 w-full"}>
                <div className={"w-8/12"}>
                    <img src="/images/slider1.png" className={"w-full border-4 border-black p-2"} alt=""/>
                </div>
                <div className={"w-6/12 flex flex-col w-full"}>
                    <div className={"flex gap-4"}>
                        <div>
                            <img src="/images/collectors.png" alt=""/>
                        </div>
                        <div className={"flex flex-col items-center justify-center"}>
                            <span className={"text-black text-lg font-bold"}>Philip</span>
                            <span className={"text-black text-base "}>SPAIN</span>
                        </div>
                    </div>
                    <div className={"flex gap-2 mt-4"}>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                        <span><img src="/images/star.png"width={"24"} alt=""/></span>
                    </div>
                    <div className={" mt-4"}>
                        <p className={"text-black"}>
                            The work arrived yesterday, in perfect condition - It is magnificent. I was
                            very happy with the product and the service. You have been really
                            helpful throughout the process.The next time I have an empty wall at
                            home, I'll be sure to visit Singulart.
                        </p>
                    </div>
                    <button className={"bg-secondary text-lg py-4 px-4 rounded-sm mt-10 w-56 text-white"}>SPEAK WITH US NOW</button>
                </div>

            </section>
            <section className={"px-20"}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <span className={"border-gold  border-b w-2/5"}/>
                    <h1 className={"text-title text-3xl font-bold   w-1/3 text-center block"}>ADORUART Magazine</h1>
                    <span className={"border-gold  border-b w-2/5"}/>
                </div>
                {/*{*/}
                {/*    data.blogs && (*/}
                {/*        data.blogs.length > 0 ?(*/}
                {/*            <div className={"flex gap-6 mt-12"}>*/}
                {/*                {*/}
                {/*                    data.blogs.map((blog:any,blogI:number)=>*/}
                {/*                            <article className={"text-black flex flex-col gap-y-2 w-3/12"}>*/}
                {/*                                <div><img src={"http://127.0.0.1:8000"+blog.logo} alt="" className={"w-312px h-312px"}/></div>*/}
                {/*                                <div className={"flex gap-2"}>*/}
                {/*                                    <span className={"font-bold text-title"}>Date:</span>*/}
                {/*                                    <span className={"text-gray-400"}>{blog.created_at}</span>*/}
                {/*                                </div>*/}
                {/*                                <div className={"font-bold text-lg h-51px"}>*/}
                {/*                                    <span>{truncate(blog.title,60,'...')}</span>*/}
                {/*                                </div>*/}
                {/*                                <div className={"text-lg h-51px"}>*/}
                {/*                                    <p>{truncate(blog.short_description,60,'...')}</p>*/}
                {/*                                </div>*/}
                {/*                                <div className={"mt-4"}>*/}
                {/*           <span className={"text-gold border-b border-gold"}>*/}
                {/*               <a href="">Read more</a>*/}
                {/*           </span>*/}
                {/*                                </div>*/}
                {/*                            </article>*/}
                {/*                    )*/}
                {/*                }*/}
                {/*            </div>*/}
                {/*        ):(*/}
                            <div className={"flex gap-6 mt-12"}>
                                <article className={"text-black flex flex-col gap-y-2 w-3/12"}>
                                    <div><img src="/images/mag.png" alt=""/></div>
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
                                <article className={"text-black flex flex-col gap-y-2 w-3/12"}>
                                    <div><img src="/images/mag.png" alt=""/></div>
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
                                <article className={"text-black flex flex-col gap-y-2 w-3/12"}>
                                    <div><img src="/images/mag.png" alt=""/></div>
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
                                <article className={"text-black flex flex-col gap-y-2 w-3/12"}>
                                    <div><img src="/images/mag.png" alt=""/></div>
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
                {/*        )*/}
                {/*    )*/}
                {/*}*/}

            </section>
            <section className={"w-full flex items-center justify-center my-20"}>
                <button className={"border-2 border-secondary bg-transparent text-secondary py-4 px-8 rounded"}>
                    Read all news
                </button>
            </section>
       </HomeLayout>
  )
}

// export  const getServerSideProps = async()=> {
//     // Fetch data from external API
//     const res = await fetch(`http://127.0.0.1:8000/api/home`)
//     const resMenus = await fetch(`http://127.0.0.1:8000/api/menus`)
//     const menus = await resMenus.json()
//     const data = await res.json()
//     // Pass data to the page via props
//     return { props: {
//         'data' :data,
//         'menus' :menus,
//         } }
// }

export default Home;


