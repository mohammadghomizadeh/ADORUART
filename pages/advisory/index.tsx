import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import Link from "next/link";
function Advisory()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>Free Art Advisory</h1>
                </div>
                <div>
                    <p>Discover artwork selections curated especially for you by our Art Advisors</p>
                </div>
                <div>
                    <button className={"px-16 h-16 bg-secondary uppercase mt-10"}>
                        CONTACT OUR ART ADVISORS
                    </button>
                </div>
            </section>
            <section className={"grid grid-cols-8 gap-6 bg-primary-dark py-10 px-20"}>
                <article className={"flex flex-col gap-2 justify-center items-center"}>
                    <div>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                     <span className={"font-bold"}>Angie Wright</span>
                     <span className={"text-gold"}>SPAIN</span>
                </article>
                <article className={"flex flex-col gap-2 justify-center items-center"}>
                    <div>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                    <span className={"font-bold"}>Angie Wright</span>
                    <span className={"text-gold"}>SPAIN</span>
                </article>
                <article className={"flex flex-col gap-2 justify-center items-center"}>
                    <div>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                    <span className={"font-bold"}>Angie Wright</span>
                    <span className={"text-gold"}>SPAIN</span>
                </article>
                <article className={"flex flex-col gap-2 justify-center items-center"}>
                    <div>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                    <span className={"font-bold"}>Angie Wright</span>
                    <span className={"text-gold"}>SPAIN</span>
                </article>
                <article className={"flex flex-col gap-2 justify-center items-center"}>
                    <div>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                    <span className={"font-bold"}>Angie Wright</span>
                    <span className={"text-gold"}>SPAIN</span>
                </article>
                <article className={"flex flex-col gap-2 justify-center items-center"}>
                    <div>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                    <span className={"font-bold"}>Angie Wright</span>
                    <span className={"text-gold"}>SPAIN</span>
                </article>
                <article className={"flex flex-col gap-2 justify-center items-center"}>
                    <div>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                    <span className={"font-bold"}>Angie Wright</span>
                    <span className={"text-gold"}>SPAIN</span>
                </article>
                <article className={"flex flex-col gap-2 justify-center items-center"}>
                    <div>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                    <span className={"font-bold"}>Angie Wright</span>
                    <span className={"text-gold"}>SPAIN</span>
                </article>

            </section>
            <section className={"px-20 my-20"}>
                <p className={"text-black text-lg text-center px-32"}>
                    SINGULART's Art Advisors ensure that buying art online is a seamless experience. To help you with your choice, we
                    start by talking to you about your taste and needs then we scour our vast collection of over 200,000+ original
                    artworks to present you with a hand-picked selection.
                </p>
            </section>
            <section className={"bg-editbg px-32 my-20 py-14" }>
                <div className={"grid grid-cols-4  gap-10 text-black"}>
                    <article className={"flex flex-col gap-4"}>
                        <div className={" flex items-center justify-center"}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                <path d="M37.6567 32.3232C38.4007 31.5812 38.9907 30.6995 39.3928 29.7287C39.795 28.7579 40.0013 27.7173 40 26.6665C40 22.2485 36.418 18.6665 32 18.6665C27.582 18.6665 24 22.2485 24 26.6665C24 28.8758 24.8953 30.8758 26.3433 32.3232" stroke="#7B7575" stroke-width="2" stroke-linecap="round"/>
                                <path d="M20 45.3332L20.6667 41.9998L28 36.6665L32 40.6665L36 36.6665L43.3333 41.9998L44 45.3332" stroke="#7B7575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.6602 30.0045C24.6688 27.2645 25.1148 25.2625 25.9982 23.9998C27.3235 22.1058 28.2562 22.2452 28.9348 22.5398C29.6142 22.8352 30.0135 24.7625 31.1475 25.3185C32.2808 25.8738 35.1835 25.9425 36.1775 26.6112C37.1708 27.2792 39.4442 28.5225 38.8775 30.6452" stroke="#7B7575" stroke-width="2"/>
                            </svg>
                        </div>
                        <div className={"text-center"}>
                            Advised over +9000 happy
                            collectors
                        </div>
                    </article>
                    <article className={"flex flex-col gap-4"}>
                        <div className={" flex items-center justify-center"}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                <path d="M39.5892 31.9998C39.5855 30.8045 39.4574 29.6129 39.2069 28.4442H42.4069C42.2421 27.9567 42.0431 27.4815 41.8114 27.022H38.8336C38.2738 25.1518 37.4056 23.3883 36.2647 21.8042C35.5358 21.4977 34.7758 21.2712 33.9981 21.1287C35.561 22.808 36.7408 24.8066 37.4558 26.9864H32.6647V20.9775H31.3314V26.9953H26.5403C27.2568 24.8115 28.4397 22.8097 30.0069 21.1287C29.2325 21.2688 28.4755 21.4924 27.7492 21.7953C26.6038 23.3728 25.7296 25.1302 25.1625 26.9953H22.1669C21.931 27.4632 21.729 27.9474 21.5625 28.4442H24.7892C24.5388 29.6129 24.4107 30.8045 24.4069 31.9998C24.4094 33.3071 24.5585 34.6101 24.8514 35.8842H21.7047C21.8886 36.3825 22.1085 36.8667 22.3625 37.3331H25.2336C25.7778 39.036 26.5846 40.6435 27.6247 42.0975C28.3696 42.417 29.1477 42.6525 29.9447 42.7998C28.494 41.2173 27.3783 39.3578 26.6647 37.3331H31.3403V42.9687H32.6736V37.3331H37.3314C36.6154 39.3587 35.4966 41.2183 34.0425 42.7998C34.8432 42.6475 35.6244 42.406 36.3714 42.0798C37.4099 40.6312 38.2166 39.0298 38.7625 37.3331H41.6069C41.8598 36.8753 42.0796 36.4 42.2647 35.9109H39.1092C39.416 34.6294 39.5771 33.3174 39.5892 31.9998V31.9998ZM31.3314 35.8842H26.2292C25.6034 33.4378 25.5759 30.8767 26.1492 28.4175H31.3314V35.8842ZM37.7669 35.8842H32.6647V28.4442H37.8469C38.1023 29.612 38.2275 30.8044 38.2203 31.9998C38.2275 33.3082 38.0753 34.6126 37.7669 35.8842V35.8842Z" fill="#7B7575"/>
                                <path d="M31.9996 17.7778C29.1867 17.7778 26.437 18.612 24.0981 20.1747C21.7593 21.7375 19.9364 23.9587 18.86 26.5574C17.7835 29.1562 17.5019 32.0158 18.0506 34.7747C18.5994 37.5335 19.9539 40.0677 21.9429 42.0567C23.932 44.0457 26.4661 45.4002 29.225 45.949C31.9838 46.4978 34.8434 46.2161 37.4422 45.1397C40.041 44.0632 42.2622 42.2403 43.8249 39.9015C45.3877 37.5627 46.2218 34.8129 46.2218 32.0001C46.2218 28.2281 44.7234 24.6106 42.0562 21.9434C39.389 19.2762 35.7715 17.7778 31.9996 17.7778V17.7778ZM31.9996 44.4445C29.5383 44.4445 27.1323 43.7146 25.0858 42.3472C23.0393 40.9798 21.4443 39.0363 20.5024 36.7623C19.5605 34.4884 19.3141 31.9862 19.7942 29.5723C20.2744 27.1583 21.4596 24.9409 23.2 23.2005C24.9404 21.4601 27.1578 20.2749 29.5718 19.7947C31.9858 19.3146 34.4879 19.561 36.7619 20.5029C39.0358 21.4448 40.9793 23.0398 42.3467 25.0863C43.7142 27.1328 44.444 29.5388 44.444 32.0001C44.444 35.3005 43.1329 38.4658 40.7991 40.7996C38.4653 43.1334 35.3 44.4445 31.9996 44.4445Z" fill="#7B7575"/>
                            </svg>
                        </div>
                        <div className={"text-center"}>
                            8,000 artists from over 100
                            countries on our platform
                        </div>
                    </article>
                    <article className={"flex flex-col gap-4"}>
                        <div className={" flex items-center justify-center"}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                <g clipPath="url(#clip0_384_412)">
                                    <circle cx="32" cy="31" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M44.5546 23.8887H19.4524C19.0092 23.8887 18.5841 24.0647 18.2707 24.3781C17.9573 24.6915 17.7812 25.1166 17.7812 25.5598V41.7731C17.7812 42.2163 17.9573 42.6414 18.2707 42.9548C18.5841 43.2682 19.0092 43.4442 19.4524 43.4442H44.5546C44.9978 43.4442 45.4228 43.2682 45.7362 42.9548C46.0496 42.6414 46.2257 42.2163 46.2257 41.7731V25.5598C46.2257 25.1166 46.0496 24.6915 45.7362 24.3781C45.4228 24.0647 44.9978 23.8887 44.5546 23.8887ZM44.4479 41.6665H19.559V25.6664H44.4479V41.6665Z" fill="#7B7575"/>
                                    <path d="M23.612 32.2889C24.1394 32.2889 24.655 32.1325 25.0935 31.8395C25.532 31.5465 25.8738 31.13 26.0757 30.6427C26.2775 30.1555 26.3303 29.6193 26.2274 29.102C26.1245 28.5847 25.8705 28.1096 25.4976 27.7366C25.1247 27.3637 24.6495 27.1097 24.1322 27.0068C23.6149 26.9039 23.0788 26.9567 22.5915 27.1586C22.1042 27.3604 21.6877 27.7022 21.3947 28.1407C21.1017 28.5792 20.9453 29.0948 20.9453 29.6222C20.9453 30.3295 21.2263 31.0078 21.7264 31.5079C22.2265 32.0079 22.9047 32.2889 23.612 32.2889ZM23.612 28.2C23.8947 28.1929 24.1731 28.2703 24.4116 28.4222C24.6501 28.5741 24.8379 28.7937 24.951 29.0529C25.0641 29.3121 25.0974 29.5991 25.0466 29.8773C24.9958 30.1554 24.8633 30.4122 24.6658 30.6146C24.4684 30.8171 24.2151 30.9561 23.9383 31.014C23.6615 31.0718 23.3738 31.0458 23.1118 30.9393C22.8499 30.8327 22.6256 30.6505 22.4677 30.4159C22.3098 30.1814 22.2254 29.905 22.2253 29.6222C22.2252 29.2511 22.3701 28.8947 22.6292 28.6289C22.8883 28.3632 23.241 28.2093 23.612 28.2Z" fill="#7B7575"/>
                                    <path d="M23.0256 39.8891L28.359 34.5558L31.1856 37.3824L28.679 39.8891H30.4567L37.0878 33.258L42.6701 38.7958V37.018L37.5145 31.8891C37.3963 31.7718 37.2366 31.7061 37.0701 31.7061C36.9036 31.7061 36.7438 31.7718 36.6256 31.8891L32.039 36.4758L28.7767 33.2224C28.6585 33.1052 28.4988 33.0394 28.3323 33.0394C28.1658 33.0394 28.0061 33.1052 27.8878 33.2224L21.2656 39.8891H23.0256Z" fill="#7B7575"/>
                                    <path d="M42.7943 17.6667C42.7943 17.431 42.7006 17.2049 42.5339 17.0382C42.3672 16.8715 42.1411 16.7778 41.9054 16.7778H22.3498C22.1141 16.7778 21.888 16.8715 21.7213 17.0382C21.5546 17.2049 21.4609 17.431 21.4609 17.6667V18.5556H42.7943V17.6667Z" fill="#7B7575"/>
                                    <path d="M44.553 21.2224C44.553 20.9866 44.4593 20.7605 44.2926 20.5938C44.1259 20.4271 43.8998 20.3335 43.6641 20.3335H20.553C20.3172 20.3335 20.0911 20.4271 19.9244 20.5938C19.7577 20.7605 19.6641 20.9866 19.6641 21.2224V22.1113H44.553V21.2224Z" fill="#7B7575"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_384_412">
                                        <rect width="32" height="32" fill="white" transform="translate(16 15)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className={"text-center"}>
                            Sold over 17,000 original
                            artworks
                        </div>
                    </article>
                    <article className={"flex flex-col gap-4"}>
                        <div className={" flex items-center justify-center"}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                <path d="M21 44.7583H43" stroke="#7B7575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M23.2031 21.8103L32.0031 19L40.8031 21.8103V25.4396H23.2031V21.8103Z" stroke="#7B7575" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M39.7008 25.4395V40.8946M24.3008 25.4395V40.8946V25.4395ZM28.1508 25.4395V40.8946V25.4395ZM32.0008 25.4395V40.8946V25.4395ZM35.8508 25.4395V40.8946V25.4395Z" stroke="#7B7575" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M22.6484 40.8945H41.3484V44.7583H22.6484V40.8945Z" stroke="#7B7575" strokeWidth="2" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className={"text-center"}>
                            Represented SINGULART at 8
                            International Art Fairs in 2019
                        </div>
                    </article>
                </div>

            </section>
            <section className={"px-20 my-20"}>
                <div className={" w-full justify-start items-center"}>
                    <div className={"float-left text-3xl font-bold text-black pr-5"}>Works of art that have found a home with our art collectors</div>
                    <div className={"pt-5"}>
                        <hr className={"h-2px text-gold bg-gold"}/>
                    </div>
                </div>
                <section className={"my-12 flex gap-6"}>
                    <div className={"w-70% flex flex-col gap-8"}>
                        <article className={"flex gap-8"}>
                            <div className={"w-30% "}>
                                <img src="/images/decor/30-1.png" className={"w-full h-328px"} alt=""/>
                            </div>
                            <div className={"w-70% "}>
                                <img src="/images/decor/70-1.png" className={"w-full h-328px"} alt=""/>
                            </div>
                        </article>
                        <article className={"flex gap-8"}>
                            <div className={"w-70% "}>
                                <img src="/images/decor/70-2.png" className={"w-full h-328px"} alt=""/>
                            </div>
                            <div className={"w-30% "}>
                                <img src="/images/decor/30-2.png" className={"w-full h-328px"} alt=""/>
                            </div>

                        </article>
                    </div>
                    <div className={"w-30%  flex flex-col gap-8"}>
                        <div className={"border border-gray-400 border-b-0 rounded text-black h-328px relative"}>
                            <div className={"py-6 px-4"}>
                                 <span className={"font-bold"}>
                                    Buying art for your interior?
                                </span>
                                <div>
                                    <ul className={"list-disc list-outside ml-4 mt-4 flex flex-col gap-3"}>
                                        <li className={"text-gray-400"}><span className={"text-black"}> Receive a personalized selection fit to your taste and requirements </span> </li>
                                        <li className={"text-gray-400"}><span className={"text-black"}>Commission a custom artwork</span> </li>
                                        <li className={"text-gray-400"}><span className={"text-black"}> Explore our various framing options</span> </li>
                                        <li className={"text-gray-400"}><span className={"text-black"}> Learn about the artwork you're interested in </span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"absolute bottom-0 w-full"}>
                                <button className={"text-white bg-secondary py-4 w-full"}>
                                    CONTACT OUR ART ADVISORS
                                </button>
                            </div>
                        </div>
                        <div className={"border border-gray-400 border-b-0 rounded text-black h-328px relative"}>
                            <div className={"py-6 px-4"}>
                                 <span className={"font-bold"}>
                                    Buying art for your interior?
                                </span>
                                <div>
                                    <ul className={"list-disc list-outside ml-4 mt-4 flex flex-col gap-3"}>
                                        <li className={"text-gray-400"}><span className={"text-black"}> Receive a personalized selection fit to your taste and requirements </span> </li>
                                        <li className={"text-gray-400"}><span className={"text-black"}>Commission a custom artwork</span> </li>
                                        <li className={"text-gray-400"}><span className={"text-black"}> Explore our various framing options</span> </li>
                                        <li className={"text-gray-400"}><span className={"text-black"}> Learn about the artwork you're interested in </span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"absolute bottom-0 w-full"}>
                                <button className={"text-white bg-secondary py-4 w-full"}>
                                    CONTACT OUR ART ADVISORS
                                </button>
                            </div>
                        </div>
                    </div>
                </section>




            </section>
            <section className={"bg-gold px-20 py-6 my-20"}>
                    <span className={"text-black font-bold text-2xl"}>
                        Chat with us
                    </span>
                    <p className={"text-black mt-6"}>
                        We're here 24 hours a day to help you find your favorite piece and answer any questions
                    </p>
                    <button className={"bg-gray-700 py-4 px-24 rounded mt-6"}>
                        CHAT WITH US
                    </button>
            </section>







            <section className={"py-10 text-black px-20 "}>
                <div className={" w-full justify-start items-center"}>
                    <div className={"float-left text-3xl font-bold pr-5"}>You could also like</div>
                    <div className={"pt-5"}>
                        <hr className={"h-2px text-gold bg-gold"}/>
                    </div>
                </div>
                <div className={"clear-both"}></div>
                <section id={"galleryItems"}>
                    <section className={"flex gap-6 my-14"}>
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
        </HomeLayout>
    )
}

export default Advisory;
