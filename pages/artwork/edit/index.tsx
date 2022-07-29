import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {ImEqualizer} from "react-icons/im"
import {BsPinterest,BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import Link from "next/link";
import {GrReturn,GrSort} from "react-icons/gr";
function EditPage()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"flex items-center gap-2 bg-sub-header py-4 px-20 text-black"}>
                <span>Artwork</span>
                <span> <MdOutlineKeyboardArrowRight/> </span>
                <span>Painting</span>
                <span> <MdOutlineKeyboardArrowRight/> </span>
                <span>Acrylic on Canvas</span>
            </section>
            <section className={"flex gap-6 w-full px-20 bg-editbg py-10"}>
                <div className={"flex flex-col w-3/6 text-black"}>
                    <span className={"text-xl font-bold"}>
                        I am motivated by large formats because the visual impact of
painted abstraction or figuration on the viewer is magnificent.
                    </span>
                    <p>
                        Maria Moretti is an established painter from Germany with international exposure.
                        Interested in art ever since she was a kid, Moretti has developed her unique style in
                        large scale paintings featuring abstract figures in motion. Working mainly in oil and
                        acrylic on canvas, she favors bright colors and whimsical patterns and intends for her
                        viewers to connect and identify themselves with the figures she paints.
                    </p>
                    <span className={"text-gold border-b border-gold mt-10"}>
                        CREDENTIALS
                    </span>
                    <div className={"pl-5 mt-10"}>
                        <ul className={"list-disc"}>
                            <li><a href="">Nationally Known</a></li>
                            <li><a href="">Established Artist</a></li>
                            <li><a href="">International Exposure</a></li>
                            <li><a href="">Works on commission</a></li>
                        </ul>
                    </div>
                    <div className={"flex gap-4 w-full mt-4"}>
                        <button className={"bg-secondary text-white w-3/6 py-4 rounded"}>
                            FOLLOW THIS ARTIST
                        </button>
                        <div className={"text-black flex gap-3 my-4"}>
                            <span> <BsPinterest size={20}/> </span>
                            <span> <AiFillTwitterCircle size={20}/> </span>
                            <span> <BsFacebook size={20}/> </span>
                        </div>
                    </div>
                </div>
                <div className={"w-3/6"}>
                    <img src="/images/simopnet.png"  />
                </div>
            </section>
            <section className={"px-20 my-10"}>
                <div className={"flex gap-4"}>
                    <aside className={"w-3/12 text-black border border"}>
                        <header className={"flex items-center justify-between p-4 border-b"}>
                            <span><ImEqualizer/></span>
                            <span>FILTERS</span>
                            <span><GrReturn/></span>
                        </header>
                        <footer className={"px-6"}>
                            <div id={"filterMedium"}>
                            <span className={"py-4 block"}>
                                MEDIUM
                            </span>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id={"filterCategory"}>
                            <span className={"py-4 block"}>
                                MEDIUM
                            </span>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id={"filterPrice"}>
                            <span className={"py-4 block"}>
                                MEDIUM
                            </span>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id={"filterSize"}>
                            <span className={"py-4 block"}>
                                MEDIUM
                            </span>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id={"filterHeight"}>
                            <span className={"py-4 block"}>
                                MEDIUM
                            </span>
                                <div>
                                    <input
                                        type="range"
                                        className="form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                        min="0"
                                        max="5"
                                        step="1"
                                        id="customRange3"
                                    />
                                </div>
                            </div>
                            <div id={"filterWidth"}>
                            <span className={"py-4 block"}>
                                MEDIUM
                            </span>
                                <div>
                                    <input
                                        type="range"
                                        className="form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                        min="0"
                                        max="5"
                                        step="1"
                                        id="customRange3"
                                    />
                                </div>
                            </div>
                            <div id={"filterWidth"}>
                            <span className={"py-4 block"}>
                                MEDIUM
                            </span>
                                <div className={"flex gap-2"}>
                                    <span className={"py-1 px-2 rounded border border-gray-300"}>6</span>
                                    <span className={"py-1 px-2 rounded border border-gray-300"}>6</span>
                                    <span className={"py-1 px-2 rounded border border-gray-300"}>6</span>
                                </div>
                            </div>
                            <div id={"filterColor"}>
                            <span className={"py-4 block"}>
                                MEDIUM
                            </span>
                                <div className={"flex gap-2"}>
                                    <span className={"px-2 bg-white border border-gray-300"}>&nbsp;</span>
                                    <span className={"px-2 bg-black border border-gray-300"}>&nbsp;</span>
                                    <span className={"px-2 bg-red-500 border border-gray-300"}>&nbsp;</span>
                                    <span className={"px-2 bg-yellow-500 border border-gray-300"}>&nbsp;</span>
                                </div>
                            </div>
                        </footer>
                    </aside>
                    <main className={"w-9/12 "} >
                        <div className={"flex justify-between items-center"}>
                            <div className={"flex gap-1 text-black"}>
                                <div>
                                    <span><GrSort/></span>
                                    <span>SERIES</span>
                                </div>
                                <div>
                                    <span><GrSort/></span>
                                    <span>SERIES</span>
                                </div>
                            </div>
                            <select className={"border py-5 px-16 text-black "}>
                                <option value="">Sort By</option>
                            </select>
                        </div>
                        <section>
                            <div className={"grid grid-cols-5 gap-4 mt-12 items-center"}>
                                <div className={"basis-2/6 text-black"}>
                                    <span className={"font-bold text-xl"}>
                                        Morphing
                                    </span>
                                    <p>
                                        Unstructured acrylic and
                                        ink portraits on large linen
                                        canvas
                                    </p>
                                </div>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <div className={"basis-2/6 text-black"}>
                                    <button className={"px-6 py-2 text-gray-400 bg-gray-300 rounded"}>
                                        See more
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className={"grid grid-cols-5 gap-4 mt-12 items-center"}>
                                <div className={"basis-2/6 text-black"}>
                                    <span className={"font-bold text-xl"}>
                                        Morphing
                                    </span>
                                    <p>
                                        Unstructured acrylic and
                                        ink portraits on large linen
                                        canvas
                                    </p>
                                </div>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <div className={"basis-2/6 text-black"}>
                                    <button className={"px-6 py-2 text-gray-400 bg-gray-300 rounded"}>
                                        See more
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className={"grid grid-cols-5 gap-4 mt-12 items-center"}>
                                <div className={"basis-2/6 text-black"}>
                                    <span className={"font-bold text-xl"}>
                                        Morphing
                                    </span>
                                    <p>
                                        Unstructured acrylic and
                                        ink portraits on large linen
                                        canvas
                                    </p>
                                </div>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <div className={"basis-2/6 text-black"}>
                                    <button className={"px-6 py-2 text-gray-400 bg-gray-300 rounded"}>
                                        See more
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className={"grid grid-cols-5 gap-4 mt-12 items-center"}>
                                <div className={"basis-2/6 text-black"}>
                                    <span className={"font-bold text-xl"}>
                                        Morphing
                                    </span>
                                    <p>
                                        Unstructured acrylic and
                                        ink portraits on large linen
                                        canvas
                                    </p>
                                </div>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <article className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                    <div className={"border-4 border-black p-2"}><img src="/images/mag.png" width={"100%"} alt=""/></div>
                                    <div className={"flex flex-col"}>
                            <span className={"text-gold font-bold text-xl"}>
                                Artwork Name
                            </span>
                                        <span className={"mt-2"}>
                                Acrylic on Canvas
                            </span>
                                        <div className={"mt-3 flex gap-2"}>
                                            <span className={"text-gray-400"}>Size :</span>
                                            <span className={"font-bold"}>50 x 75 cm</span>
                                        </div>
                                        <div className={"flex gap-2"}>
                                            <span  className={"text-gray-400"}>Price :</span>
                                            <span className={"text-black font-bold"}>2,500$</span>
                                        </div>
                                    </div>
                                </article>
                                <div className={"basis-2/6 text-black"}>
                                    <button className={"px-6 py-2 text-gray-400 bg-gray-300 rounded"}>
                                        See more
                                    </button>
                                </div>
                            </div>
                        </section>

                    </main>
                </div>
            </section>
            <section className={"my-20 flex flex-col items-center justify-center text-black gap-y-4"}>
                <ul className={"flex gap-4"}>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                </ul>
            </section>
            <section className={"bg-title text-white flex flex-col justify-center items-center py-20 gap-y-8"}>
                <span className={"font-bold text-4xl"}>
                    <img src="/images/simopnet.png"  className={"rounded-full w-28 h-28"} alt=""/>
                </span>
                <p className={"text-lg px-96 items-center justify-center text-center"}>
                    Follow Edith
                    Simonnet to receive exclusive news about her latest artworks!
                </p>
                <div className={"flex gap-8 w-full px-60"}>
                    <div className={"w-70%"}><input placeholder={"Email Address... "} type="text" className={"pl-10 py-4 w-full  border bg-white border-black"}/></div>
                    <div  className={"w-30%"}><button className={"text-white w-full py-4 bg-secondary rounded"}>SEND</button></div>
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

                    <section className={"flex gap-6 my-12"}>
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
            <section className={"flex flex-col items-center justify-center bg-secondary px-40"}>
                <span className={"text-white font-bold text-2xl py-10 block"}>
                    Credentials
                </span>
                <div className={"flex gap-28 mb-14"}>
                    <div className={"flex flex-col  gap-y-3"}>
                        <span className={"text-gold font-bold text-lg"}>
                            Solo exhibitions
                        </span>
                        <div>
                            <span className={"text-gray-400"}>
                                2020
                            </span>
                            <p>
                                The Gallery / 11 rue Honoré Henry -
                                Mougins, France
                            </p>
                        </div>
                        <div>
                            <span>
                                2020
                            </span>
                            <p>
                                The Gallery / 11 rue Honoré Henry -
                                Mougins, France
                            </p>
                        </div>
                    </div>
                    <div  className={"flex flex-col  gap-y-3"}>
                        <span className={"text-gold font-bold text-lg"}>
                           Group exhibition
                        </span>
                        <div>
                            <span>
                                2020
                            </span>
                            <p>
                                The Gallery / 11 rue Honoré Henry -
                                Mougins, France
                            </p>
                        </div>

                    </div>
                    <div  className={"flex flex-col  gap-y-3"}>
                        <span className={"text-gold font-bold text-lg"}>
                           Residency
                        </span>
                        <div>
                            <span>
                                2020
                            </span>
                            <p>
                                The Gallery / 11 rue Honoré Henry -
                                Mougins, France
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    )
}

export default EditPage;
