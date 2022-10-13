import React, {useEffect} from "react";
import {HOME} from "@/hooks/useApi";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {SliderShow} from "@/components/home/slider";
import Link from "next/link";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {HomeArtwork} from "@/components/home/artwork";
import {NftCategory} from "@/components/home/nftCategory";
import {HomeCollections} from "@/components/home/collections";
import {HomeCollectors} from "@/components/home/callectors";
import {HomeMagazine} from "@/components/home/magazine";
 const Home = ({ data,menus }:any) =>  {
     const [collectors,setCollectors] = React.useState<any>()
     const [collections,setCollections] = React.useState<any>()
     const [blogs,setBlogs] = React.useState<any>()
     const [categoryArtworks,setCategoryArtworks] = React.useState<any>()
     const [sliders,setSliders] = React.useState<any>()
     const [products,setProducts] = React.useState<any>()
     const truncate = (str:any, max:any, suffix:any) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
     useEffect(()=>{
         HOME().then((res:any)=>{
             setCollections(res.data.collectors);
             setCollectors(res.data.collectors);
             setBlogs(res.data.blogs);
             setCategoryArtworks(res.data.categoryArtworks);
             setSliders(res.data.sliders);
             setProducts(res.data.products);

         })
     },[])
     return (
        <HomeLayout title={"Home"} menus={menus}  >
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            <section className={"bg-primary px-10  md:px-0 lg:flex pb-20 justify-center pt-10"}>
                <div className={"lg:w-3/6  pt-10"}>
                    <h1 className={"text-56"}>ADORUART</h1>
                    <h2 className={"text-40 md:text-xl"}>selects talented artists from all
                        over the world, for you</h2>
                    <button className={"bg-secondary text-xl lg:text-lg lg:py-5 lg:px-16 py-5 px-32 rounded-sm mt-20"}>APPLY NOW</button>
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
                <div className={"w-full md:flex py-20 gap-y-5 md:gap-6 px-10 md:px-0 items-center justify-center"}>
                    <img src={"/images/original/img1.png"} className={"w-full md:w-1/4 my-4"} />
                    <img src={"/images/original/img2.png"} className={"w-full md:w-1/4 my-4"} />
                    <img src={"/images/original/img3.png"} className={"w-full md:w-1/4 my-4"} />
                </div>
                <div className={"py-10"}>
                    <button>DISCOVER OUR SELECTION</button>
                </div>
            </section>
            <HomeArtwork data={categoryArtworks}/>
            <NftCategory data={products} />
            <HomeCollections data={collections} />
            <section className={"flex flex-col justify-center items-center bg-brows w-full py-32 px-20"}>
                <div className={"flex justify-center items-center pt-2 gap-6 w-full px-6"}>
                    <div className={"border-gold  border-b w-full hidden lg:block"}> </div>
                    <div className={"text-title text-4xl  w-full text-center"}>Browse by price</div>
                    <div className={"border-gold  border-b w-full hidden lg:block"}></div>
                </div>
                <div className={"lg:flex  gap-6 mt-20"}>
                    <div className={"flex lg:gap-6 gap-2 lg:w-6/12 "}>
                        <div className={"flex flex-col items-center gap-y-6 text-title border-2 border-black  rounded w-6/12 p-2 lg:p-17px"}>
                            <img src={"/images/slider1.png"}   alt=""/>
                            <span>Up to</span>
                            <span className={"font-bold"}>1000 $</span>
                            <button className={"bg-secondary text-lg py-4 px-20 rounded-sm text-white w-full "}>
                                SEE NOW
                            </button>
                        </div>
                        <div className={"flex flex-col items-center gap-y-6 text-title border-2 border-black  rounded w-6/12 p-2 lg:p-17px"}>
                            <img src={"/images/slider1.png"}   alt=""/>
                            <span>Up to</span>
                            <span className={"font-bold"}>1000 $</span>
                            <button className={"bg-secondary text-lg py-4 px-20 rounded-sm text-white w-full "}>
                                SEE NOW
                            </button>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-y-4 lg:w-6/12 mt-8 lg:mt-0"}>
                        <div className={"flex  items-center lg:gap-x-8 gap-2 text-title border-2 border-black p-2 lg:p-17px rounded "}>
                            <img src={"/images/slider1.png"} className={"h-40 w-6/12"}  alt=""/>
                            <div className={"flex flex-col gap-y-5 w-6/12"}>
                                 <span>From <b>1000 $</b></span>
                                 <span>Up to <b>2000 $</b></span>
                                <button className={"bg-secondary text-lg py-4 px-20 rounded-sm text-white w-full "}>
                                    SEE NOW
                                </button>
                            </div>
                        </div>
                        <div className={"flex  items-center lg:gap-x-8 gap-2 text-title border-2 border-black p-2 lg:p-17px rounded"}>
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
                    <div className={"border-gold  border-b w-full hidden lg:block"}> </div>
                    <div className={"text-title text-4xl  w-full text-center"}>New sales</div>
                    <div className={"border-gold  border-b w-full hidden lg:block"}></div>
                </div>
                <section className={"lg:flex gap-6 mt-10"}>
                    {/*<img src={"/images/artwork1.png"} alt=""/>*/}
                    <div className={"lg:w-30%"}>
                        <div>
                            <img src={"/images/sale1.png"} className={"w-full"}  alt=""/>
                        </div>
                        <div className={"flex flex-col gap-y-3 mt-6"}>
                            <span className={"text-gold font-bold"}>ASPIRATION</span>
                            <span className={"text-black font-bold"}>Mbaye Babacar Diouf</span>
                            <span className={"text-title"}>03/2022 - Senegal</span>
                        </div>
                    </div>
                    <div className={"lg:w-3/6"}>
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
                    <div className={"lg:w-1/5"}>
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
            <HomeCollectors data={collectors} />
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
            <section className={"lg:flex lg:px-44 px-10 py-20 gap-10 w-full"}>
                <div className={"lg:w-8/12"}>
                    <img src="/images/slider1.png" className={"w-full border-4 border-black p-2"} alt=""/>
                </div>
                <div className={"lg:w-6/12 flex flex-col w-full my-5 lg:my-0"}>
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
            <HomeMagazine data={blogs} />
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


