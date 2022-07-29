import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {ImEqualizer} from "react-icons/im"
import {BsPinterest,BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import Link from "next/link";
function ArtWorkDetail()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"flex items-center gap-4 bg-sub-header py-4 px-20 text-black"}>
                <span>Artwork</span>
                <span> <MdOutlineKeyboardArrowRight/></span>
                <span>Painting</span>
                <span> <MdOutlineKeyboardArrowRight/> </span>
                <span>Acrylic on Canvas</span>
            </section>
            <section className={"flex gap-6 my-8 px-20"}>
                <div>
                    <div className={"border-2 border-black p-1 rounded"}>
                        <img src="/images/sliderMain.png" className={"rounded"} alt=""/>
                    </div>
                    <div>
                        <ul className={"flex gap-4 mt-4"}>
                            <li><img src="/images/slide1.png" alt=""/></li>
                            <li><img src="/images/slide1.png" alt=""/></li>
                            <li><img src="/images/slide1.png" alt=""/></li>
                            <li><img src="/images/slide1.png" alt=""/></li>
                            <li><img src="/images/slide1.png" alt=""/></li>
                            <li><img src="/images/slide1.png" alt=""/></li>
                            <li><img src="/images/slide1.png" alt=""/></li>
                        </ul>

                    </div>
                </div>
                <div className={"flex flex-col"}>
                    <span className={"text-gold text-xl font-bold"}>Artwork Name</span>
                    <span className={"text-gray-400 mt-2"}>Acrylic on Canvas</span>
                    <span className={"text-black my-4"}>Edith Simonnet, Germany, 2022</span>
                    <hr className={""}/>
                    <div className={"flex gap-2 mt-4"}>
                        <span className={"text-gray-400"}>Size:</span>
                        <span className={"text-black"}>50 x 75 cm</span>
                    </div>
                    <div className={"flex gap-2"}>
                        <span className={"text-gray-400"}>Price:</span>
                        <span className={"text-black font-bold"}>2,500$</span>
                    </div>
                    <div className={"my-6"}>
                        <button className={"bg-secondary p-3 border border-secondary rounded"}>ACQUIRE THIS ARTWORK</button>
                        <button className={"text-secondary border-secondary border rounded p-3 ml-5"}>MAKE US AN OFFER</button>
                    </div>
                    <div className={"mb-4"}>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gold checked:border-gold focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label inline-block text-gray-800"
                                       htmlFor="flexCheckDefault">
                                    I would like to give this work as a gift and add a personal message.
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
            <section className={"flex gap-16  justify-center border-b-2 border-t-2 border-gray-300 my-20 py-2"}>
                <div className={"text-black w-2/12 flex flex-col items-center justify-center "}>
                    <span><AiFillTwitterCircle size={60}/></span>
                    <span>Original work delivered with a certificate of authenticity</span>
                </div>
                <div className={"text-black w-2/12"}>
                    <span className={"flex block items-center justify-center"}><AiFillTwitterCircle size={60}/></span>
                    <span>Shipping usually takes up to 7 days</span>
                </div>
                <div className={"text-black w-2/12"}>
                    <span className={"flex block items-center justify-center"}><AiFillTwitterCircle size={60}/></span>
                    <span>Free 14 day returns</span>
                </div>
            </section>
            <section className={"flex flex-col gap-y-6 text-black px-20"}>
                <span className={"font-black text-3xl"}>
                    About the artwork
                </span>
                <p>
                    A structured three-dimensional painting: the finest, highly pigmented acrylic paints, combined with real 24 carat gold on 4cm deep canvas, finally finished with the neutral
                    varnish, which enhances the luminosity of the colors and also protects the picture from dust and UV rays.
                    Thanks to the lively structured surface and the use of real gold, the
                    picture looks like a noble piece of jewelry and a statement in the room.
                    The painting is...
                </p>
                <Link href={""}>
                    <a className={"text-secondary border-b my-2"}>
                        Learn more
                    </a>
                </Link>
            </section>
            <section className={"flex gap-6 w-full px-20 bg-sub-header py-10"}>
                <div className={"flex flex-col gap-y-14  text-black"}>
                    <span className={"text-2xl font-bold"}>
                        Edith Simonnet
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
                <div>
                    <img src="/images/simopnet.png"  />
                </div>
            </section>

            <section className={"py-10 text-black px-20"}>
                <div className={" w-full justify-start items-center"}>
                    <div className={"float-left text-3xl font-bold pr-5"}>Other artworks by Edith  Simonnet</div>
                    <div className={"pt-5"}>
                        <hr className={"h-2px text-gold bg-gold"}/>
                    </div>
                </div>
                <div className={"clear-both"}></div>
                <section id={"galleryItems"}>
                    <header className={"flex justify-end my-8"}>
                        <button className={"py-2 px-4 bg-sub-header rounded text-gray-400"}>
                            See more
                        </button>
                    </header>
                    <section className={"flex gap-6 my-4"}>
                        <article>
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
                        <article>
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
                        <article>
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
                        <article>
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
                        <article>
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
                        <article>
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
                    </section>

                </section>
            </section>
            <section id={"galleryItems"} className={"bg-grayBG px-20"}>
                <span className={"text-title font-bold text-3xl py-8 block"}>
                    You could also like
                </span>
                <header className={"flex justify-end my-8"}>
                    <button className={"py-2 px-4 bg-sub-header rounded text-gray-400"}>
                        See more
                    </button>
                </header>
                <section className={"flex gap-6 my-4"}>
                    <article>
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
                    <article>
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
                    <article>
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
                    <article>
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
                    <article>
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
                    <article>
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
                </section>

            </section>
        </HomeLayout>
    )
}

export default ArtWorkDetail;
