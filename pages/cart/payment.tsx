import React from "react";
import HomeLayout from "@/components/layouts/Home";
function CartPayment()  {

    return (
       <>
           <HomeLayout title={"Home"}>
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
                   <section className={"w-3/5 border border-gray-300 rounded text-title"}>
                       <section className={"flex flex-col gap-12 px-14 py-10"}>
                           <div className={"flex gap-10"}>
                               <span className={"text-black font-bold"}>
                                   Card payment:
                               </span>
                               <div>
                                   <img src="/images/payment.png" alt=""/>

                               </div>
                           </div>
                           <div className={"flex flex-col"}>
                               <label htmlFor="" className={"text-gray-400"}>Name of card holder</label>
                               <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Name of card holder"}/>
                           </div>
                           <div className={"flex flex-col"}>
                               <label htmlFor="" className={"text-gray-400"}>Card details</label>
                               <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Card number"}/>
                           </div>
                           <div className={"flex gap-4 items-center"}>
                               <input type="checkbox"/>
                               <span className={"text-sm"}>I have read and accept <span>the General Terms and Conditions</span> and the returns and withdrawal policy</span>
                           </div>
                       </section>
                       <div className={"px-14 py-10"}>
                           <button className={"bg-secondary text-white py-4 px-10 rounded "}>
                               PROCEED TO PAYMENT
                           </button>
                       </div>
                   </section>
                   <section className={"w-2/5 "}>
                       <article className={" border-b-0  border border-gray-300 rounded  "}>
                           <section className={"p-4"}>
                               <div className={"text-black flex gap-4"}>
                                   <div className={"w-6/12 h-118px"}>
                                       <img src="/images/events.png" className={"w-full h-full border-2 border-primary p-2 rounded"} alt=""/>
                                   </div>
                                   <div className={"flex flex-col w-6/12 gap-2"}>
                                       <span className="text-gold font-bold">Artwork Name</span>
                                       <span className="text-title text-sm">Acrylic on Canvas</span>
                                       <span className="text-title  text-xs">Edith Simonnet, Germany, 2022</span>
                                       <div className={"flex gap-2  text-sm"}>
                                           <span className={"text-nft"}>Size:</span>
                                           <span className={"text-black"}>50 x 75 cm</span>
                                       </div>
                                   </div>
                               </div>
                               <div className={"text-title flex items-center gap-4 my-4"}>
                                   <input type="checkbox"/>
                                   <span className={"text-sm"}>This artwork is a gift. I would like to add a personal message.</span>
                               </div>
                               <div className={"my-4"}>
                                <textarea rows={4} className={"placeholder-gray-300 w-full border border-gray-300 rounded p-2"} placeholder={"Insert your message here..."}>

                                </textarea>
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
                               <span className={"text-black"}>200$</span>
                           </div>
                           <div className={"bg-nft flex justify-between p-4 rounded-b"}>
                               <span>TOTAL:</span>
                               <span >2200$</span>
                           </div>
                       </article>
                       <article className={"border border-gray-300 rounded p-4 my-6"}>
                    <span className={"text-title font-bold"}>
                        ADORUART's guarantees
                    </span>
                           <p>
                               <ul className={"flex flex-col gap-2 text-black my-4 list-disc list-inside text-gray-400"}>
                                   <li className={""}><span className={"text-black"}>Selected artists</span></li>
                                   <li className={""}><span className={"text-black"}>Original artworks, certificate of authenticity</span></li>
                                   <li className={""}><span className={"text-black"}>Art market price</span></li>
                                   <li className={""}><span className={"text-black"}>Secure payment by credit card or bank transfer</span></li>
                                   <li className={""}><span className={"text-black"}>Safe shipping globally</span></li>
                                   <li className={""}><span className={"text-black"}>Free returns within 14 days after reception</span></li>
                               </ul>
                           </p>


                       </article>
                       <div>
                           <button className={"border-2 border-gray-300 py-4 text-secondary w-full rounded"}>
                               BACK TO CART
                           </button>
                       </div>



                   </section>
               </section>

           </HomeLayout>
       </>
    )
}

export default CartPayment;
