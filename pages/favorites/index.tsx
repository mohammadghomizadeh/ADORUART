import React, {useEffect, useState} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import {FAVORITES} from "@/hooks/useApi";
function Favorites({cookie,data}:any)  {
    const [uuid,setUuid] = useState<any>("")
    const [isLogin,setIsLogin] = useState<any>(false)
    const [products,setProducts] = useState<any>(data.products)
    const [cookieValue,setCookieValue] = useState<any>(cookie)
    useEffect(()=>{
        console.log(products)
        if (typeof window !== 'undefined') {
            setUuid(localStorage.getItem("lksjfs24234auuid"))
            if(!localStorage.getItem("uuid")){
                setIsLogin(true)
            }
        }
    })
    return (
        <HomeLayout title={"ADORUART | Favorites"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>My Favorites</h1>
                </div>
                <div>
                    <p>Discover artwork selections curated especially for you by our Art Advisors</p>
                </div>
            </section>
            {
                uuid ? (
                    <section className={"bg-primary-dark flex gap-y-8 flex-col items-center justify-center py-10"}>
                        <button className={"w-72 h-16 bg-secondary"}>
                            My Account
                        </button>
                    </section>
                ):(
                    <section className={"bg-primary-dark flex gap-y-8 flex-col items-center justify-center py-10"}>
                        <a href="/auth/register">
                            <button  className={"w-72 h-16 bg-secondary"}>
                                CREATE AN ACCOUNT
                            </button>
                        </a>
                        <a href="/auth/login" className={"text-gold font-bold border-b border-gold"}>
                            ALREADY HAVE AN ACCOUNT? SIGN IN!
                        </a>
                    </section>
                )
            }



            {
                products ? (
                    <section className={"px-20 my-10 "}>
                        <div className={"grid grid-cols-3 gap-4 mt-12 "}>
                            {
                                products.map((item:any,i:number)=>
                                        <article key={i} className={"text-black flex flex-col gap-y-2 basis-2/6 mt-4"}>
                                            <div className={"border-4 border-black p-2"}>
                                                {
                                                    item.product.image ? (
                                                        <img src={item.product.image} width={"100%"} alt={item.product.title}/>
                                                    ):(
                                                        <img src="/images/mag.png" width={"100%"} alt=""/>
                                                    )
                                                }

                                            </div>
                                            <div className={"flex flex-col"}>
                                                <a href={"/artwork/detail/"+item.product.slug}>
                                                    <span className={"text-gold font-bold text-xl"}>
                                                    {item.product.title}
                                                </span>
                                                </a>
                                                <span className={"mt-2"}>
                                                    Acrylic on Canvas
                                                </span>
                                                {
                                                    item.product.custome_size && (
                                                        <div className={"mt-3 flex gap-2"}>
                                                            <span className={"text-gray-400"}>Size :</span>
                                                            <span className={"font-bold"}>{item.product.custome_size}</span>
                                                        </div>
                                                    )
                                                }

                                                <div className={"flex gap-2"}>
                                                    <span  className={"text-gray-400"}>Price :</span>
                                                    <span className={"text-black font-bold"}>{item.product.price}$</span>
                                                </div>
                                            </div>
                                        </article>
                                )
                            }
                        </div>
                    </section>
                ):(
                    <section className={"my-10 flex flex-col items-center justify-center text-black gap-y-4"}>
                        <span>
                            <AiOutlineExclamationCircle size={50}/>
                        </span>
                        <span>You don't have any favorites saved yet!</span>
                    </section>
                )
            }



        </HomeLayout>
    )
}
export async function getServerSideProps({ query }:any) {
        const res:any =  FAVORITES(query.c);
        const {data} = await res;
    return { props:
            {
                cookie:query.c ? query.c : null,
                data:data ? data : []
            } }
}
export default Favorites;
