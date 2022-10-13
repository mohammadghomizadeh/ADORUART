import React, {useState,useMemo,useEffect} from "react";
import HomeLayout from "@/components/layouts/Home";
import {CARTS,SHIPPING} from "@/hooks/useApi";
import parse from 'html-react-parser'
import countryList from 'react-select-country-list'
function Shipping({cookie,data}:any)  {

    const [uuid,setUuid] = useState<any>("")
    const [carts,setCarts] = useState<any>(data.carts)
    const [total,setTotal] = useState<any>(data.total)
    const [cookieValue,setCookieValue] = useState<any>(cookie)
    const [fullName,setFullName] = useState<any>("")
    const [address1,setAddress1] = useState<any>("")
    const [address2,setAddress2] = useState<any>("")
    const [apartment,setApartment] = useState<any>("")
    const [city,setCity] = useState<any>("")
    const [country,setCountry] = useState<any>("")
    const [stateCountry,setStateCountry] = useState<any>("")
    const [code,setCode] = useState<any>("")
    const [comment,setComment] = useState<any>("")
    const options = useMemo(() => countryList().getData(), [])
    const handlerShipping = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        const ISHIPPINGDATA = {
            uuid:uuid,
            cookie:cookie,
            fullName:fullName,
            address1:address1,
            address2:address2,
            apartment:apartment,
            city:city,
            country:country,
            stateCountry:stateCountry,
            code:code,
            comment:comment,
        }
        SHIPPING(ISHIPPINGDATA,cookie).then((res:any)=>{
            window.location.href = "/checkout/payment?c="+cookie;
        })

    }
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            setUuid(localStorage.getItem("lksjfs24234auuid"))
            if(!localStorage.getItem("uuid")){
                window.location.href = "/checkout/info?c="+cookie;
            }
        }
    })
    return (
        <HomeLayout title={"Home"} showMenu={true}>
            <section id="wizard" className={"bg-primary-dark py-20 px-24"}>
                <header  className={"flex justify-between"}>
                    <div className={"w-full flex  items-center"}>
                        <div className={"relative"}>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#D4A551"/>
                                </svg>
                            </span>
                            <span className={"text-gold absolute -left-2"}>
                                Cart
                            </span>
                        </div>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                    <div className={"w-full flex justify-center  items-center relative"}>
                        <div className="flex-grow border-t border-gold"></div>
                        <div className={"absolute"}>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#D4A551"/>
                            </svg>
                            </span>
                            <span className={"absolute w-96 -left-24 top-4"}>
                                Shipping and billing addresses
                            </span>
                        </div>
                    </div>
                    <div className={"w-full flex items-center "}>
                        <div className="flex-grow border-t border-gold"></div>
                        <div className={"relative"}>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#D4A551"/>
                            </svg>
                            </span>
                            <span className={"absolute w-96 -left-6 top-4"}>
                                Payment
                            </span>
                        </div>
                    </div>
                </header>
            </section>


            <section className={"w-full flex gap-6 px-16 my-20"}>
                <section className={"w-3/5 border border-gray-300 rounded text-title   "}>
                    <section className={"flex flex-col gap-12 px-14 py-10   "}>
                        <div className={"flex flex-col"}>
                            <label htmlFor="" className={"text-gray-400"}>Full Name</label>
                            <input onChange={(e:any)=>setFullName(e.target.value)} className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Recipient name for delivery"}/>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <label htmlFor=""   className={"text-gray-400"}>Address</label>
                            <input onChange={(e:any)=>setAddress1(e.target.value)} className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Address line 2"}/>
                            <input onChange={(e:any)=>setAddress2(e.target.value)} className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Address line 2"}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label htmlFor=""  className={"text-gray-400"}>APARTMENT, BUILDING...</label>
                            <input onChange={(e:any)=>setApartment(e.target.value)} className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Apartment, Building..."}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label htmlFor=""  className={"text-gray-400"}>CITY</label>
                            <input onChange={(e:any)=>setCity(e.target.value)} className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"City"}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label  className={"text-gray-400"}>STATE/COUNTY</label>
                            <input onChange={(e:any)=>setStateCountry(e.target.value)} className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"STATE/COUNTY"}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label  className={"text-gray-400"}>STATE/ZIP CODE/POSTCODE</label>
                            <input onChange={(e:any)=>setCode(e.target.value)} className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"ZIP CODE/POSTCODE"}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label  className={"text-gray-400"}>COUNTRY</label>
                            {/*<Select options={options} value={value} onChange={changeHandler} />*/}
                            <select className={"w-490px border border-gray-300 py-3 px-4 rounded"} onChange={(e:any)=>setCountry(e.target.value)} >
                                <option  className={"text-gray-500"}>Select Country</option>
                                {
                                    options.map((option:any,key:number)=>
                                        <option value={option.label} className={"text-gray-500"}>{option.label}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className={"flex flex-col"}>
                            <label  className={"text-gray-400"}>COMMENTS</label>
                            <textarea onChange={(e:any)=>setComment(e.target.value)} className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} placeholder={"Additional information to ensure safe delivery"}>

                    </textarea>
                        </div>
                        <div className={"flex gap-4 items-center"}>
                            <input type="checkbox"/>
                            <span>This artwork is a gift. I would like to add a personal message.</span>
                        </div>
                    </section>
                    <div className={"px-14 py-10"}>
                        <button onClick={(e:any)=>handlerShipping(e)} className={"bg-secondary text-white py-4 px-10 rounded "}>
                            CONTINUE
                        </button>
                    </div>
                </section>
                <section className={"w-2/5 "}>
                    <article className={" border-b-0  border border-gray-300 rounded  "}>
                        {
                            carts && (
                                carts.map((cart:any,pKey:number)=>
                                        <div key={pKey}>
                                            <section className={"p-4"}>
                                                <div className={"text-black flex gap-4"}>
                                                    <div className={"w-6/12 h-118px"}>
                                                        {
                                                            cart.product.image ? (
                                                                <img src={cart.product.image} className={"w-full h-full border-2 border-primary p-2 rounded"} alt={cart.product.title}/>
                                                            ):(
                                                                <img src="/images/events.png" className={"w-full h-full border-2 border-primary p-2 rounded"} alt=""/>
                                                            )
                                                        }


                                                    </div>
                                                    <div className={"flex flex-col w-6/12 gap-2"}>
                                                        <span className="text-gold font-bold">{cart.product.title}</span>
                                                        <span className="text-title text-sm">Acrylic on Canvas</span>
                                                        <span className="text-title  text-xs">{cart.product.user && cart.product.user.name}, Germany, 2022</span>
                                                        {
                                                            cart.product.custome_size && (
                                                                <div className={"flex gap-2  text-sm"}>
                                                                    <span className={"text-nft"}>Size:</span>
                                                                    <span className={"text-black"}>{cart.product.custome_size}</span>
                                                                </div>
                                                            )
                                                        }

                                                    </div>
                                                </div>
                                                <div className={"text-title flex items-center gap-4 my-4"}>
                                                    <input type="checkbox"/>
                                                    <span className={"text-sm"}>{parse(cart.product.short_description)}</span>
                                                </div>

                                            </section>
                                            <div className={"bg-editbg p-4 flex flex-col gap-4"}>
                                                <div className={" flex justify-between items-center"}>
                                                    <span className={"text-gray-400"}>Shipping from:</span>
                                                    <span className={"text-black"}>Australia</span>
                                                </div>
                                                <div className={" flex justify-between items-center"}>
                                                    <span className={"text-gray-400"}>Ship to:</span>
                                                    <span className={"text-black"}>Iran</span>
                                                </div>

                                            </div>
                                            <div className={"flex justify-between p-4"}>
                                                <span className={"text-gray-400"}>Delivery costs:</span>
                                                <span className={"text-black"}>{cart.product.price}$</span>
                                            </div>
                                        </div>
                                )
                            )
                        }
                        <div className={"bg-nft flex justify-between p-4 rounded-b"}>
                            <span>TOTAL:</span>
                            <span >{total}$</span>
                        </div>
                    </article>
                    <article className={"border border-gray-300 rounded p-4 my-6"}>
                    <span className={"text-title font-bold"}>
                        ADORUART's guarantees
                    </span>
                        <ul className={"flex flex-col gap-2 text-black my-4 list-disc list-inside text-gray-400"}>
                            <li ><span className={"text-black"}>Selected artists</span></li>
                            <li ><span className={"text-black"}>Original artworks, certificate of authenticity</span></li>
                            <li ><span className={"text-black"}>Art market price</span></li>
                            <li ><span className={"text-black"}>Secure payment by credit card or bank transfer</span></li>
                            <li ><span className={"text-black"}>Safe shipping globally</span></li>
                            <li ><span className={"text-black"}>Free returns within 14 days after reception</span></li>
                        </ul>


                    </article>
                    <div>
                        <a href={"/checkout/cart?c="+cookieValue} className={"block text-center border-2 border-gray-300 py-4 text-secondary w-full rounded"}>
                            BACK TO CART
                        </a>
                    </div>



                </section>
            </section>


        </HomeLayout>
    )
}
export async function getServerSideProps({ query }:any) {
    const res:any =  CARTS(query.c);
    const {data} = await res;
    return { props:
            {
                cookie:query.c,
                data:data
            } }
}
export default Shipping;
