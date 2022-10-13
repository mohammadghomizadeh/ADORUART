// @flow 
import * as React from 'react';
import {Logo} from "@/components/SVG/Logo";
import {useEffect, useState} from "react";
import {REGISTERUSER,LOGINUSER,CARTS} from "@/hooks/useApi";

type Props = {
    
};
function CheckoutInfoIndex  ({cookie,data}:any)  {
    const [cookValue,setCookValue] = useState<any>(cookie)
    const [carts,setCarts] = useState<any>(data.carts)
    const [total,setTotal] = useState<any>(data.total)
    const [openLogin,setOpenLogin] = useState<any>(false)
    const [email,setEmail] = useState<any>("")
    const [password,setPassword] = useState<any>("")
    const [firstName,setFirstName] = useState<any>("")
    const [lastName,setLastName] = useState<any>("")
    const [mobile,setMobile] = useState<any>("")
    const openLoginForm = (e:any) =>{
        e.preventDefault();
        e.stopPropagation();
        setOpenLogin(!openLogin);
    }
    const handlerLogin = (e:any) =>{
        e.preventDefault();
        e.stopPropagation();
        const IDATALOGINCUSTOMER = {
            email:email,
            password:password,
        }
        LOGINUSER(IDATALOGINCUSTOMER).then((res:any)=>{
            if (typeof window !== 'undefined') {
                if(!localStorage.getItem("uuid")){
                    localStorage.setItem("uuid",res.data.user)
                    localStorage.setItem("lksjfs24234auuid",res.data.uuid)
                    window.location.href = "/checkout/shipping?c="+cookValue;
                }
            }
        })

    }
    const handlerRegister = (e:any) =>{
        e.preventDefault();
        e.stopPropagation();
        const IDATAREGISTERCUSTOMER = {
            email:email,
            firstName:firstName,
            lastName:lastName,
            mobile:mobile,
            type:"2",
        }
        REGISTERUSER(IDATAREGISTERCUSTOMER).then((res:any)=>{
            if(res.data.status === "200"){
                alert("Your Password Is Your Mobile Number")
                if (typeof window !== 'undefined') {
                    if(!localStorage.getItem("uuid")){
                        localStorage.setItem("uuid",res.data.user)
                        localStorage.setItem("lksjfs24234auuid",res.data.uuid)
                        window.location.href = "/checkout/shipping?c="+cookValue;
                    }
                }
            }

        })
    }

    return (
        <section>
            <header className={" bg-primary py-6 px-20 flex justify-between items-center"}>
                <div><Logo width="60" height="60"/></div>
                <div><span>A question? Contact us: +44 20 3695 2251</span></div>
            </header>
            <main className={"flex justify-center  w-full bg-gray-200 px-32 gap-2 py-32"}>
                <div className={"w-3/5 "}>
                    <h1 className={"text-black font-bold text-4xl"}>Secure checkout in 4 steps</h1>
                    <div className={"bg-white text-black mt-10"}>
                        <div className={"text-black flex flex-col justify-center items-center mx-10  border-b border-gray-300 py-6"}>
                            <span className={"text-black font-bold text-3xl"}>You have an account</span>
                            <span>If you have already registered with ADORUART, then sign in here</span>
                        </div>
                        {
                            !openLogin ? (
                                <div onClick={(e:any)=>openLoginForm(e)} className={"flex justify-center items-center mt-10"}>
                                    <button className={"bg-secondary text-white px-10 py-3 rounded"}>Login</button>
                                </div>
                            ):null
                        }

                        {
                            openLogin && (
                                <form>
                                    <div className={"px-10 flex mt-8"}>
                                        <div className={"flex flex-col"}>
                                            <span className={"py-4 px-4"}> Email</span>
                                            <span className={"py-4 px-4 mt-4"}>Password</span>
                                        </div>
                                        <div className={"flex flex-col"}>
                                            <input type="text" onChange={(e:any)=>setEmail(e.target.value)} placeholder={"Email Address"} className={"bg-gray-200 text-black py-4 px-4"}/>
                                            <input type="password" onChange={(e:any)=>setPassword(e.target.value)} placeholder={"Password"} className={"bg-gray-200 text-black py-4 px-4 mt-4"}/>
                                        </div>
                                    </div>
                                    <div className={"flex justify-start items-center mt-10 ml-44"}>
                                        <button onClick={(e:any)=>handlerLogin(e)} className={"bg-secondary text-white px-10 py-3 rounded"}>Login</button>
                                    </div>

                                </form>
                            )
                        }
                        <div className={"flex justify-center items-center pt-14 gap-6 w-full px-6 "}>
                            <div className={"border-gray-400  border-b w-full hidden lg:block"}> </div>
                            <div className={"text-title text-2xl  w-full text-center"}>OR</div>
                            <div className={"border-gray-400  border-b w-full hidden lg:block"}></div>
                        </div>
                        <section>
                            <div className={"text-black flex flex-col justify-center items-center mx-10 mt-10  border-b border-gray-300 py-6"}>
                                <span className={"text-black font-bold text-3xl"}>Check out as a guest</span>
                                <span>You can register to save your information and to add your favorite pieces to your wishlist</span>
                            </div>
                            <div className={"px-10 flex mt-8"}>
                                <div className={"flex flex-col"}>
                                    <span className={"py-4 px-4"}> Email</span>
                                    <span className={"py-4 px-4 mt-4"}>Last name</span>
                                    <span className={"py-4 px-4 mt-4"}>First name</span>
                                    <span className={"py-4 px-4 mt-4"}>Phone number</span>
                                </div>
                                <div className={"flex flex-col"}>
                                    <input type="text" onChange={(e:any)=>setEmail(e.target.value)} placeholder={"Email Address"} className={"bg-gray-200 text-black py-4 px-4"}/>
                                    <input type="text" onChange={(e:any)=>setLastName(e.target.value)} placeholder={"Last name"} className={"bg-gray-200 text-black py-4 px-4 mt-4"}/>
                                    <input type="text" onChange={(e:any)=>setFirstName(e.target.value)} placeholder={"First name"} className={"bg-gray-200 text-black py-4 px-4 mt-4"}/>
                                    <input type="text" onChange={(e:any)=>setMobile(e.target.value)} placeholder={"Phone number"} className={"bg-gray-200 text-black py-4 px-4 mt-4"}/>
                                </div>
                            </div>
                            <div className={"flex justify-center items-center mt-10 pb-10"}>
                                <button onClick={(e:any)=>handlerRegister(e)} className={"bg-secondary text-white px-10 py-3 rounded"}>CONTINUE</button>
                            </div>

                        </section>


                    </div>
                </div>
                <div className={"w-2/5 mt-4"}>
                    <h2 className={"text-black font-bold text-sm"}>
                        Cart details
                    </h2>
                    <div className={"bg-white text-black px-10 mt-11"}>
                        <div className={"text-black flex flex-col justify-center items-center mx-10  border-b border-gray-300 py-6"}>
                            <span className={"text-black font-bold text-3xl"}>You Cart</span>
                        </div>
                        {
                            carts ? (
                                carts.map((cart:any,key:number)=>
                                    <article key={key} className={"mt-10"}>
                                        <div className={"flex gap-4 "}>
                                            <div>
                                                {
                                                    cart.product && (
                                                        cart.product.image ? (
                                                            <img src={cart.product.image} width={150} alt=""/>
                                                        ):(
                                                            <img src="/images/cart.jpeg" width={150} alt=""/>
                                                           )
                                                        )
                                                }


                                            </div>
                                            <div className={"flex flex-col"}>
                                                <span className={"text-black"}>{cart.product && cart.product.title} </span>
                                                <span>{cart.product && cart.product.custome_size}</span>

                                            </div>
                                        </div>
                                        <div className={"flex justify-between py-4"}>
                                            <span className={"text-black font-bold"}>Shipped from</span>
                                            <span className={"text-gray-500"}>Germany</span>
                                        </div>
                                        <div className={"flex justify-between"}>
                                            <span className={"text-black font-bold"}>Delivery costs</span>
                                            <span className={"text-gray-500"}>{cart.product && cart.product.price}$</span>
                                        </div>
                                    </article>
                                )
                            ):(
                                <span>Loadding....</span>
                            )
                        }

                        <div className={"mt-20"}>
                            {/*<div className={"flex justify-between py-4"}>*/}
                            {/*    <span className={"text-black font-bold"}>Price</span>*/}
                            {/*    <span className={"text-gray-500"}>€13,000</span>*/}
                            {/*</div>*/}
                            {/*<div className={"flex justify-between "}>*/}
                            {/*    <span className={"text-black font-bold"}>Delivery costs</span>*/}
                            {/*    <span className={"text-gray-500"}>€1,450 </span>*/}
                            {/*</div>*/}
                            {/*<div className={"flex justify-between"}>*/}
                            {/*    <span className={"text-black font-bold"}>Ship to</span>*/}
                            {/*    <span className={"text-gray-500"}>€1,450 </span>*/}
                            {/*</div>*/}
                            <hr className={"my-2"}/>
                            <div className={"flex justify-between pt-8 pb-4"}>
                                <span className={"text-black font-bold"}>Total</span>
                                <span className={"text-gray-500"}>{total}$ </span>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={"bg-primary py-14  flex justify-center items-center"}>
                <div><Logo width="60" height="60"/></div>
            </footer>
        </section>
    );
};
export async function getServerSideProps({ query }:any) {
    const res:any =  CARTS(query.c);
    const {data} = await res;
    return { props: {
        data:data,
        cookie:query.c,
    } }
}
export default CheckoutInfoIndex;
