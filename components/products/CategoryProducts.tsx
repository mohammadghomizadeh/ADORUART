import React, {useState,useEffect} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {ImEqualizer} from "react-icons/im"
import {GrReturn} from "react-icons/gr"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {useRouter} from "next/router";
import {CATEGORY_SLUG,CATEGORIES_IN_PRODUCT_LIST} from "../../hooks/useApi";
type Props = {
    data?:any;
};
export const CategoryProducts = (props: Props) => {
    const {data} = props;
    const [categoryList,setCategoryList] = useState<any>("");
    const [cats,setCats] = useState<any>("");
    const [heightRange,setHeightRange] = useState<any>(0);
    const [widthRange,setWidthRange] = useState<any>(0);
    const [products,setProducts] = useState<any>("");
      useEffect(()=>{
        CATEGORY_SLUG(data).then((res:any)=>{
            setProducts(res.data.users);
            setCategoryList(res.data.categories);
            setCats(res.data.$cats);
        })
        // setTimeout(()=>{
           
        // },3000)
    }, [])
    const setCategoryFilter = (e:any,category:any) =>{
        e.target.checked = true;
        CATEGORIES_IN_PRODUCT_LIST(category.id).then((res:any)=>{
            setProducts(res.data.users);
        })
    }
    return (
        <section className={"lg:px-20 px-10 my-10"}>
                <div className={"flex gap-4"}>
                    <aside className={"lg:w-3/12 lg:block hidden text-black  border"}>
                        <header className={"flex items-center justify-between p-4 border-b"}>
                            <span><ImEqualizer/></span>
                            <span>FILTERS</span>
                            <span><GrReturn/></span>
                        </header>
                        <footer className={"px-6"}>
                            {
                                cats && (
                                    cats.children && (
                                        cats.children.map((child:any,i:number)=>
                                            <div key={i}  id={"filterMedium"}>
                                                <span className={"py-4 block"}>
                                                    {child.name}
                                                </span>
                                                <ul>
                                                    {
                                                        child.children && (
                                                            child.children.map((itemChild:any,key:number)=>
                                                                <li key={key}>
                                                                    <div className="form-check">
                                                                        <input
                                                                            onChange={(e:any)=>setCategoryFilter(e,itemChild)}
                                                                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                            type="radio"
                                                                            name={child.slug}
                                                                            id={itemChild.slug}/>
                                                                        <label className="form-check-label inline-block text-gray-800"
                                                                               htmlFor="Painting">
                                                                            {itemChild.name}
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    )

                                )
                            }
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


                        {
                            products && (
                                products.map((user:any,i:number)=>
                                        <section key={i}>
                                            <div className={"flex gap-4 mt-6 lg:mt-0"}>
                                                <div>
                                                    {
                                                        user.avatar ? (
                                                            <img src={user.avatar} alt=""/>
                                                        ):(
                                                            <img src="/images/collectors.png" alt=""/>
                                                        )
                                                    }
                                                   
                                                </div>
                                                <div className={"flex flex-col gap-y-3 mt-2"}>
                                                    <span className={"text-black font-bold"}>{user.name}</span>
                                                    <span>
                                                    <button className={"bg-secondary py-3 px-8 rounded"}>
                                                        Follow
                                                    </button>
                                                </span>
                                                </div>
                                            </div>
                                            <div className={"grid lg:grid-cols-3 gap-4 mt-12"}>

                                                {
                                                    user.products && (
                                                        user.products.map((product:any,ii:number)=>
                                                            <article key={ii} className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                                            <div className={"border-4 border-black p-2"}>
                                                                {
                                                                    product.image ? (
                                                                        <img src={product.image} width={"100%"} alt=""/>
                                                                    ):(
                                                                        <img src="/images/mag.png" width={"100%"} alt=""/>
                                                                    )
                                                                }

                                                            </div>
                                                            <div className={"flex flex-col"}>
                                                                <span className={"text-gold font-bold text-xl"}>
                                                                    <a href={"/artwork/detail/"+product.slug}>
                                                                        {product.title}
                                                                    </a>
                                                                </span>
                                                                {
                                                                    product.custom_size && (
                                                                        <div className={"mt-3 flex gap-2"}>
                                                                            <span className={"text-gray-400"}>Size :</span>
                                                                            <span className={"font-bold"}>50 x 75 cm</span>
                                                                        </div>
                                                                    )
                                                                }
                                                                <div className={"flex gap-2"}>
                                                                    <span  className={"text-gray-400"}>Price :</span>
                                                                    <span className={"text-black font-bold"}>{product.price}$</span>
                                                                </div>
                                                            </div>
                                                            </article>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </section>
                                                
                                )
                            )
                        }
                    </main>
                </div>
            </section>
    );
};
