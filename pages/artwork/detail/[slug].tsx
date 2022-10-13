import React, {useEffect, useState} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {ImEqualizer} from "react-icons/im"
import {BsPinterest,BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import Link from "next/link";
import parse from 'html-react-parser'
import {PRODUCT_SLUG, ADD_TO_CART,EXIST_CART} from "@/hooks/useApi";
import {random} from "nanoid";
function ArtWorkDetail()  {
    const [product,setProduct] = useState<any>("");
    const [latests,setLatests] = useState<any>("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            var slug:any = (url:any) => new URL(url).pathname.match(/[^\/]+/g)
            var productSlug:any = slug(window.location.href);
            var singleSlug = productSlug[2];
        }
        PRODUCT_SLUG(singleSlug).then((result:any)=>{
            setProduct(result.data.product);
            setLatests(result.data.latests);
        })
    }, []);

    const AddToCartHandler = (e:any,data:any) =>{
        e.preventDefault();
        e.stopPropagation();
        const ICARTDATA = {
            'uuid':localStorage.getItem("uuid") ? localStorage.getItem("uuid") : null,
            'cookie':localStorage.getItem("gustCookies"),
            'product_id':data.id
        }
        EXIST_CART(ICARTDATA).then((res:any)=>{
            if(res.data.status === false){
                ADD_TO_CART(ICARTDATA).then((res:any)=>{
                    window.location.href = "/checkout/info?c="+localStorage.getItem("gustCookies")
                })
            }else{
                window.location.href = "/checkout/info?c="+localStorage.getItem("gustCookies")
            }
        })


    }



    return (
        <HomeLayout title={"Home"}>
            <section className={"flex items-center gap-4 bg-sub-header py-4 px-20 text-black"}>
                <span>Artwork</span>
                <span> <MdOutlineKeyboardArrowRight/></span>
                <span><a >{product && product.category.name}</a></span>
                <span> <MdOutlineKeyboardArrowRight/> </span>
                <span>{product && product.title}</span>
            </section>
            <section className={"lg:flex gap-6 my-8 lg:px-20 px-10"}>
                <div className={"w-3/5"}>
                    <div className={"border-2 border-black p-1 rounded"}>
                        {
                            product.image ? (
                                <img src={product.image} className={"rounded w-full h-full"} alt=""/>
                            ):(
                                <img src="/images/sliderMain.png" className={"rounded"} alt=""/>
                            )
                        }


                    </div>
                    <div>
                        <ul className={"flex gap-4 mt-4"}>
                            {
                                product.galleries ?(
                                    product.galleries.map((gallery:any,i:number)=>
                                        <li key={i}><img width={80} height={100} src={gallery.image} alt=""/></li>
                                    )
                                ):(
                                        <li className={"text-black"}>No Gallery...</li>
                                        // <li > <img width={150} src="/images/sliderMain.png" className={"rounded"} alt=""/></li>
                                )
                            }
                        </ul>

                    </div>
                </div>
                <div className={"flex flex-col w-2/5"}>
                    <span className={"text-gold text-xl font-bold"}>{product && product.title}</span>
                    <span className={"text-gray-400 mt-2"}>Acrylic on Canvas</span>
                    <span className={"text-black my-4"}>{product.user ? product.user.name : 'ADORUART'}, Germany, 2022</span>
                    <hr className={""}/>
                    {
                        product.custome_size && (
                            <div className={"flex gap-2 mt-4"}>
                                <span className={"text-gray-400"}>Size:</span>
                                <span className={"text-black"}>{product.custome_size}</span>
                            </div>
                        )
                    }

                    <div className={"flex gap-2"}>
                        <span className={"text-gray-400"}>Price:</span>
                        <span className={"text-black font-bold"}>2,500$</span>
                    </div>
                    <div className={"my-6"}>
                        <button onClick={(e:any)=>AddToCartHandler(e,product)} className={"bg-secondary p-3 border border-secondary rounded"}>ACQUIRE THIS ARTWORK</button>
                        <button className={"text-secondary border-secondary border rounded p-3 ml-5"}>MAKE US AN OFFER</button>
                    </div>
                    <div className={"mb-4"}>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gold checked:border-gold focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label inline-block text-gray-800"
                                       htmlFor="flexCheckDefault">
                                    {product && parse(product.short_description)}
                                </label>
                        </div>
                    </div>
                    <div className={"text-black flex gap-3 my-4"}>
                        <span> <BsPinterest size={20}/> </span>
                        <span> <AiFillTwitterCircle size={20}/> </span>
                        <span> <BsFacebook size={20}/> </span>
                    </div>
                    <div className={"my-7"}>
                            <a href="" className={"text-gold border-b border-gold"}>CONTACT US</a>
                    </div>
                    <div className={"flex justify-between items-center"}>
                        <div className={"flex flex-col gap-y-4"}>
                            <span className={"text-black"}>Would you like to add a frame to this artwork?</span>
                            <button className={"bg-gray-700 w-56 py-4 rounded"}>Choose a frame</button>
                        </div>
                        <div className={"border-4 border-gray-200 rounded p-2"}>
                            <span className={"bg-gray-300 rounded w-20 h-20 block"}>&nbsp;</span>
                        </div>
                    </div>


                </div>
            </section>
            <section className={"lg:flex gap-16  justify-center items-center border-b-2 border-t-2 border-gray-300 my-20 py-2"}>
                <div className={"text-black lg:w-2/12 flex flex-col items-center justify-center "}>
                    <span><AiFillTwitterCircle size={60}/></span>
                    <span>Original work delivered with a certificate of authenticity</span>
                </div>
                <div className={"text-black lg:w-2/12 flex flex-col items-center justify-center"}>
                    <span className={"flex block items-center justify-center"}><AiFillTwitterCircle size={60}/></span>
                    <span>Shipping usually takes up to 7 days</span>
                </div>
                <div className={"text-black lg:w-2/12 flex flex-col items-center justify-center"}>
                    <span className={"flex block items-center justify-center"}><AiFillTwitterCircle size={60}/></span>
                    <span>Free 14 day returns</span>
                </div>
            </section>
            <section className={"flex flex-col gap-y-6 text-black px-20"}>
                <span className={"font-black text-3xl"}>
                    About the artwork
                </span>
                <p>
                    {product && parse(product.description)}
                </p>
                {/*<Link href={""}>*/}
                {/*    <a className={"text-secondary border-b my-2"}>*/}
                {/*        Learn more*/}
                {/*    </a>*/}
                {/*</Link>*/}
            </section>
            <section className={"lg:flex flex-row-reverse gap-6 w-full lg:px-20 px-10 bg-sub-header py-10 mt-8"}>
                <div>


                    {
                        product.user ? (
                            product.user.avatar ? (
                                <img src={product.user.avatar}  />
                            ):(
                                <img src="/images/simopnet.png"  />
                            )
                        ):(
                            <img src="/images/simopnet.png"  />
                        )
                    }

                </div>
                <div className={"flex flex-col lg:gap-y-14 gap-y-6  text-black mt-5 lg:mt-0"}>
                    <span className={"text-2xl font-bold"}>
                        {product.user && product.user.name}
                    </span>
                    <p>
                        I believe color reveals the soul of the artist and can affect the viewer
                        in a similar way
                    </p>
                    <span className={"text-gold border-b border-gold"}>
                        CREDENTIALS
                    </span>
                    <div className={"pl-5"}>
                        <ul className={"list-disc"}>
                            <li><a href="">Nationally Known</a></li>
                            <li><a href="">Established Artist</a></li>
                            <li><a href="">International Exposure</a></li>
                            <li><a href="">Works on commission</a></li>
                        </ul>
                    </div>
                    <div className={"flex gap-4 w-full"}>
                        <button className={"bg-secondary text-white w-3/6 py-4 rounded"}>
                            FOLLOW THIS ARTIST
                        </button>
                        <button  className={"bg-transparent border border-secondary  rounded text-secondary w-3/6 py-4"}>
                            GO TO Edith
                            Simonnet'S PAGE
                        </button>
                    </div>
                </div>
            </section>



            <section className={"py-10 text-black lg:px-20 px-10"}>
                <div className={" w-full justify-start items-center"}>
                    <div className={"float-left text-3xl font-bold pr-5"}>Other artworks by {product.user && product.user.name}</div>
                    <div className={"pt-5"}>
                        <hr className={"h-2px text-gold bg-gold"}/>
                    </div>
                </div>
                <div className={"clear-both"}></div>

                <section id={"galleryItems"}>
                    <header className={"flex justify-end my-8"}>
                        <a href={"/artworks"} className={"py-2 px-4 bg-sub-header rounded text-gray-400"}>
                            See more
                        </a>
                    </header>
                    <section className={"lg:flex gap-6 my-4"}>
                        {
                            product.user && (
                                product.user.products ? (
                                    product.user.products.map((userPro:any,ii:number)=>
                                            <article key={ii} className={"flex flex-col items-center  justify-center lg:justify-start"}>
                                                <div>
                                                    {
                                                        userPro.image ? (
                                                            <img src={userPro.image} width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                                                        ) :(
                                                            <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                                                        )
                                                    }

                                                </div>
                                                <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                <a href={"/artwork/detail/"+userPro.slug}>{userPro && userPro.title}</a>
                            </span>
                                                    <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                                    {
                                                        userPro.custome_size && (
                                                            <div className={"flex gap-2"}>
                                   <span className={"text-gray-400"}>
                                       Size:
                                   </span>
                                                                <span>
                                                                    {userPro && userPro.custome_size}
                                    </span>
                                                            </div>
                                                        )
                                                    }

                                                    <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                                        <span>
                                    {userPro.price}$
                                </span>
                                                    </div>
                                                </div>
                                            </article>
                                    )
                                ):(
                                    <>
                                        <article className={"flex flex-col items-center  justify-center lg:justify-start"}>
                                            <div>
                                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                                    <span>
                                    50 x 75 cm
                                </span>
                                                </div>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                                    <span>
                                    2,500$
                                </span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className={"flex flex-col items-center  justify-center lg:justify-start"}>
                                            <div>
                                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                                    <span>
                                    50 x 75 cm
                                </span>
                                                </div>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                                    <span>
                                    2,500$
                                </span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className={"flex flex-col items-center  justify-center lg:justify-start"}>
                                            <div>
                                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                                    <span>
                                    50 x 75 cm
                                </span>
                                                </div>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                                    <span>
                                    2,500$
                                </span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className={"flex flex-col items-center  justify-center lg:justify-start"}>
                                            <div>
                                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                                    <span>
                                    50 x 75 cm
                                </span>
                                                </div>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                                    <span>
                                    2,500$
                                </span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className={"flex flex-col items-center  justify-center lg:justify-start"}>
                                            <div>
                                                <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                                            </div>
                                            <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                Artwork Name
                            </span>
                                                <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                                    <span>
                                    50 x 75 cm
                                </span>
                                                </div>
                                                <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                                    <span>
                                    2,500$
                                </span>
                                                </div>
                                            </div>
                                        </article>
                                    </>
                                )
                            )


                        }


                    </section>

                </section>
            </section>

            <section id={"galleryItems"} className={"bg-grayBG lg:px-20 px-10"}>
                <span className={"text-title font-bold text-3xl py-8 block"}>
                    You could also like
                </span>
                <header className={"flex justify-end my-8"}>
                    <a href={"/artworks"} className={"py-2 px-4 bg-sub-header rounded text-gray-400"}>
                        See more
                    </a>
                </header>
                <section className={"lg:flex gap-6 my-4"}>
                    {
                        latests && (
                            latests.map((lastPro:any,lastKey:number)=>
                                    <article key={lastKey}>
                                        <div>
                                            {
                                                lastPro.image ? (
                                                    <img src={lastPro.image} width={250} height={250} className={"rounded border-4 border-primary p-2"} alt={lastPro.title}/>
                                                ):(
                                                    <img src="/images/artwork2.png" width={250} height={250} className={"rounded border-4 border-primary p-2"} alt=""/>
                                                )
                                            }

                                        </div>
                                        <div className={"flex flex-col gap-y-2 mt-4"}>
                            <span className={"text-gold font-bold"}>
                                <a href={"/artwork/detail/"+lastPro.slug}>{lastPro && lastPro.title}</a>
                            </span>
                                            <span className={"text-gray-400"}>
                                Acrylic on Canvas
                            </span>
                                            {
                                                lastPro.custome_size && (
                                                    <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Size:
                               </span>
                                                        <span className={"text-black"}>
                                    {lastPro ? (lastPro.custome_size) : ('50 x 75 cm')}
                                </span>
                                                    </div>
                                                )
                                            }


                                            <div className={"flex gap-2"}>
                               <span className={"text-gray-400"}>
                                   Price:
                               </span>
                                                <span className={"text-black"}>
                                    {lastPro && lastPro.price}$
                                </span>
                                            </div>
                                        </div>
                                    </article>
                            )
                        )
                    }


                </section>

            </section>
        </HomeLayout>
    )
}

export default ArtWorkDetail;
