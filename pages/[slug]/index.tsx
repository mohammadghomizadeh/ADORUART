import React, {useState} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {ImEqualizer} from "react-icons/im"
import {GrReturn} from "react-icons/gr"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {useRouter} from "next/router";
function index()  {
    const router = useRouter();
    const {slug}:any = router.query;
    const [heightRange,setHeightRange] = useState(0);
    const [widthRange,setWidthRange] = useState(0);

    return (
        <HomeLayout title={slug}>
            <section className={"bg-primary px-20 flex pb-20 justify-center  items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    {
                        slug && (
                            <h1>{slug}</h1>
                        )
                    }
                </div>
            </section>
            <section className={"flex items-center gap-3 bg-sub-header py-4 lg:px-20 px-10 text-black"}>
                <span>Art and Design</span>
                <span> <MdOutlineKeyboardArrowRight/> </span>
                <span>{slug}</span>
            </section>

            <section className={"lg:px-20 px-10 my-10"}>
                <div className={"flex gap-4"}>
                    <aside className={"lg:w-3/12 lg:block hidden text-black border border"}>
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
                                                type="radio"
                                                name="MEDIUM"
                                                id="Painting"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Painting">
                                                Painting
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="MEDIUM" id="Photogrephy"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Photogrephy">
                                                Photogrephy
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="MEDIUM" id="Drowing"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Drowing">
                                                Drowing
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="MEDIUM" id="Print"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Print">
                                                Print
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="MEDIUM" id="Work"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Work">
                                                Work on paper
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id={"filterCategory"}>
                            <span className={"py-4 block uppercase"}>
                                {slug} Category
                            </span>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="Category" id="Abstraction"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Abstraction">
                                                Abstraction
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="Category" id="Animals"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Animals">
                                                Animals
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="Category" id="Conceptual"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Conceptual">
                                                Conceptual
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="Category" id="Digital"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Digital">
                                                Digital Age
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="Category" id="Everyday"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Everyday">
                                                Everyday life
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id={"filterPrice"}>
                            <span className={"py-4 block"}>
                                PRICE
                            </span>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="PRICE" id="1000$"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="1000$">
                                                0 - 1000$
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="PRICE" id="5000$"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="5000$">
                                                1000$ - 5000$
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="PRICE" id="Up"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Up">
                                                Up to 5000$
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id={"filterSize"}>
                            <span className={"py-4 block"}>
                                SIZE
                            </span>
                                <ul>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="SIZE" id="Small"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Small">
                                                Small
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="SIZE" id="Medium"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Medium">
                                                Medium
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio" name="SIZE" id="Large"/>
                                            <label className="form-check-label inline-block text-gray-800"
                                                   htmlFor="Large">
                                                Large
                                            </label>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div id={"filterHeight"}>
                            <span className={"py-4 block"}>
                                HEIGHT
                            </span>
                                <div>
                                    <input
                                        type="range"
                                        className="form-range appearance-revert w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                        min="1"
                                        max="100"
                                        step="1"
                                        id="customRange3"
                                        onChange={(e:any)=>setHeightRange(e.target.value)}
                                        value={heightRange}
                                    />
                                    <div className={"flex justify-between"}>
                                        <span>{heightRange} cm</span>
                                        <span>{heightRange} cm</span>
                                    </div>
                                </div>
                            </div>
                            <div id={"filterWidth"}>
                            <span className={"py-4 block"}>
                                WIDTH
                            </span>
                                <div>
                                    <input
                                        type="range"
                                        className="form-range appearance-revert w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                        min="1"
                                        max="100"
                                        step="1"
                                        id="customRange3"
                                        onChange={(e:any)=>setWidthRange(e.target.value)}
                                        value={widthRange}
                                    />
                                    <div className={"flex justify-between"}>
                                        <span>{widthRange} cm</span>
                                        <span>{widthRange} cm</span>
                                    </div>
                                </div>
                            </div>
                            <div id={"filterWidth"}>
                            <span className={"py-4 block"}>
                                ORIENTATION
                            </span>
                                <div className={"flex gap-2"}>
                                    <span className={"py-1 px-2 rounded border border-gray-300"}>6</span>
                                    <span className={"py-1 px-2 rounded border border-gray-300"}>6</span>
                                    <span className={"py-1 px-2 rounded border border-gray-300"}>6</span>
                                </div>
                            </div>
                            <div id={"filterColor"}>
                            <span className={"py-4 block"}>
                                COLOR
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
                    <main className={"lg:w-9/12 w-full "} >
                        <div className={"flex lg:justify-end justify-center items-center"}>
                            <select className={"border py-5 px-16 text-black "}>
                                <option value="">Sort By</option>
                            </select>
                        </div>
                        <section>
                            <div className={"flex gap-4 mt-6 lg:mt-0"}>
                                <div>
                                    <img src="/images/collectors.png" alt=""/>
                                </div>
                                <div className={"flex flex-col gap-y-3 mt-2"}>
                                    <span className={"text-black font-bold"}>Edith Simonnet</span>
                                    <span>
                                    <button className={"bg-secondary py-3 px-8 rounded"}>
                                        Follow
                                    </button>
                                </span>
                                </div>
                            </div>
                            <div className={"grid lg:grid-cols-3 gap-4 mt-12"}>
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
                            </div>
                        </section>
                        <section className={"mt-10"}>
                            <div className={"flex gap-4"}>
                                <div>
                                    <img src="/images/collectors.png" alt=""/>
                                </div>
                                <div className={"flex flex-col gap-y-3 mt-2"}>
                                    <span className={"text-black font-bold"}>Edith Simonnet</span>
                                    <span>
                                    <button className={"bg-secondary py-3 px-8 rounded"}>
                                        Follow
                                    </button>
                                </span>
                                </div>
                            </div>
                            <div className={"grid lg:grid-cols-3 gap-4 mt-12"}>
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
                            </div>
                        </section>
                    </main>
                </div>
            </section>
            <section className={"my-20 flex flex-col items-center justify-center text-black gap-y-4"}>
                <ul className={"flex gap-4"}>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">1</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">2</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">3</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">4</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">5</a></li>
                    <li className={"py-2 px-4 hover:bg-gold  border rounded text-black"}><a href="">6</a></li>
                </ul>
            </section>
            <section className={"bg-sub-header text-black flex flex-col justify-center items-center py-20 gap-y-8"}>
                <span className={"font-bold text-4xl px-10 lg:px-0"}>
                    Would you like to see more artworks like these?
                </span>
                <p className={"text-lg lg:px-96 px-10 items-center justify-center text-center"}>
                    Send your E.mail to receive exclusive updates on new works
                    that match your search criteria
                </p>
                <div className={"lg:flex gap-8 w-full lg:px-60 px-10"}>
                    <div className={"lg:w-70%"}><input placeholder={"Email Address... "} type="text" className={"pl-10 py-4 w-full  border bg-transparent border-black"}/></div>
                    <div  className={"lg:w-30% mt-2 lg:mt-0"}><button className={"text-white w-full py-4 bg-secondary rounded"}>SEND</button></div>
                </div>
            </section>
            <section className={"flex flex-col bg-secondary text-white gap-y-4 px-20 py-10" }>

                <span className={"font-bold"}>
                    Contemporary Painting
                </span>
                <p>
                    Contemporary art is defined as the art of today, created in the late 20th and early 21st Century. It is characterized by its global nature, the diversity of cultures it represents and the influence of technology and the digital age. Contemporary art involves experimental and dynamic combinations of new materials. Modern art and contemporary art are often confused since there is an overlap between their two definitions. The key moment often described as the transition from modern art to contemporary art is after World War II. Since 1950, many movements such as Pop Art, Abstract Expressionism or even documentary photography have developed and are "encompassed" in what is perceived as contemporary art. On the other hand, the definition of this movement is not uniform and each artistic institution has its own vision of contemporary art. It is extremely vast and diverse, and today's contemporary artists are constantly pushing the established boundaries of art.
                </p>
                <span className={"font-bold"}>
                    Buy a contemporary painting on SINGULART
                </span>
                <p>
                    Contemporary painting - somewhat neglected by artists in the 1980s and 1990s, as they found the medium too deeply rooted in art historical traditions - has regained popularity in the past twenty or so years. The contemporary gallery, SINGULART, offers art lovers the opportunity to discover the breadth and richness of style developed by our contemporary artists. Contemporary painting is characterized by its great diversity: artists explore the boundaries of traditional painting by trying to exceed them, by using new mediums combined with paint in their paintings such as ink, sand, glass and even cement. Contemporary painting often oscillates between abstract painting and figurative painting: the artist François Pagé adopts a very figurative approach in his portraits, while the contemporary work of the Italian Francesco d'Adamo deploys a gestural and expressive touch, resulting in colorful abstract canvases. At SINGULART, discover a selection of diverse and high quality contemporary paintings.
                </p>
            </section>
        </HomeLayout>
    )
}

export default index;
