import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import Link from "next/link";
function Gift()  {

    return (
        <HomeLayout title={"Home"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>Offer a Gift Card</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
                        viverra accumsan in nisl nisi.
                    </p>
                </div>
            </section>
            <section className="flex flex-row font-semibold pl-8 pt-3.5 bg-neutral-300 w-full h-14">
                <div className="text-zinc-800">Offer a Gift Card</div>
            </section>
            <section className="w-full h-96 text-black">
                <div className="pl-8 pt-12 flex flex-row gap-3 font-semibold text-xl">
                   <span> How does it work?</span>
                    <div className="border-b-2 w-90 border-yellow-500 mb-3"> dsda</div>
                </div>
                <div className="flex flex-row justify-center items-center gap-20">
                    <div className="flex flex-col mt-5">
                        <span className="relative left-16 top-2">
                         <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="31.5" fill="white" stroke="#7B7575"/>
                        <path d="M39.0007 36.515C39.0007 31.9 35.2207 31.374 32.1837 30.952C28.8737 30.492 27.0007 30.092 27.0007 27.242C27.0007 24.85 29.5077 24 31.6547 24C32.7246 23.9654 33.7874 24.1857 34.7555 24.6426C35.7236 25.0995 36.5692 25.78 37.2227 26.628L38.7787 25.372C38.0789 24.4722 37.2082 23.7195 36.2166 23.1573C35.225 22.5951 34.1321 22.2344 33.0007 22.096V19H31.0007V22.022C27.3857 22.242 25.0007 24.282 25.0007 27.242C25.0007 31.972 28.8307 32.505 31.9077 32.932C35.1607 33.385 37.0007 33.774 37.0007 36.515C37.0007 39.547 33.8677 40 32.0007 40C28.5707 40 27.1227 39.036 25.7787 37.372L24.2227 38.628C25.0154 39.6727 26.0408 40.5182 27.2173 41.0975C28.3939 41.6767 29.6893 41.9737 31.0007 41.965V45H33.0007V41.955C36.7267 41.651 39.0007 39.628 39.0007 36.515V36.515Z" fill="#7B7575"/>
                        </svg>

                  </span>
                        <div className="flex flex-col gap-1 text-center text-sm mt-4">
                            <div>1</div>
                            <div>You choode the amount that</div>
                            <div>you want to offer</div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                  <span className="relative left-20 bottom-2">
                       <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="31.5" fill="white" stroke="#7B7575"/>
<path d="M21.356 39.788C21.5636 39.9964 21.7227 40.248 21.8219 40.5249C21.9211 40.8018 21.958 41.0972 21.93 41.39C21.7894 42.7452 21.523 44.0843 21.134 45.39C23.924 44.744 25.628 43.996 26.402 43.604C26.841 43.3816 27.3466 43.329 27.822 43.456C29.1849 43.8193 30.5895 44.0022 32 44C39.992 44 46 38.386 46 32C46 25.616 39.992 20 32 20C24.008 20 18 25.616 18 32C18 34.936 19.234 37.66 21.356 39.788ZM20.37 47.598C19.8961 47.6919 19.4207 47.778 18.944 47.856C18.544 47.92 18.24 47.504 18.398 47.132C18.5756 46.7132 18.7384 46.2883 18.886 45.858L18.892 45.838C19.388 44.398 19.792 42.742 19.94 41.2C17.486 38.74 16 35.52 16 32C16 24.268 23.164 18 32 18C40.836 18 48 24.268 48 32C48 39.732 40.836 46 32 46C30.4153 46.0021 28.8372 45.7964 27.306 45.388C26.266 45.914 24.028 46.872 20.37 47.598Z" fill="#7B7575"/>
</svg>

                  </span>
                        <div className="flex flex-col gap-1 text-center text-sm">
                            <div>2</div>
                            <div>You give us your personalized</div>
                            <div>message</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                  <span className="relative top-2">
                       <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="31.5" fill="white" stroke="#7B7575"/>
<path d="M37.5 33.3333C37.279 33.3333 37.067 33.4211 36.9107 33.5774C36.7545 33.7337 36.6667 33.9457 36.6667 34.1667C36.6667 34.3877 36.7545 34.5996 36.9107 34.7559C37.067 34.9122 37.279 35 37.5 35H40.5C40.721 35 40.933 34.9122 41.0893 34.7559C41.2455 34.5996 41.3333 34.3877 41.3333 34.1667C41.3333 33.9457 41.2455 33.7337 41.0893 33.5774C40.933 33.4211 40.721 33.3333 40.5 33.3333H37.5ZM20 22.6667V39.8333C20 40.9384 20.439 41.9982 21.2204 42.7796C22.0018 43.561 23.0616 44 24.1667 44H40.5C41.6051 44 42.6649 43.561 43.4463 42.7796C44.2277 41.9982 44.6667 40.9384 44.6667 39.8333V28.1667C44.6666 27.2062 44.3348 26.2752 43.7275 25.5312C43.1201 24.7871 42.2744 24.2757 41.3333 24.0833V22.8333C41.3333 22.0819 41.0348 21.3612 40.5035 20.8299C39.9721 20.2985 39.2514 20 38.5 20H22.8333C22.1107 19.9999 21.4153 20.276 20.8895 20.7717C20.3637 21.2674 20.0472 21.9453 20.0047 22.6667H20ZM39.6667 22.8333V24H22.8333C22.5239 24 22.2272 23.8771 22.0084 23.6583C21.7896 23.4395 21.6667 23.1428 21.6667 22.8333C21.6667 22.5239 21.7896 22.2272 22.0084 22.0084C22.2272 21.7896 22.5239 21.6667 22.8333 21.6667H38.5C39.1447 21.6667 39.6667 22.1893 39.6667 22.8333ZM21.6667 25.6667H40.5C41.163 25.6667 41.7989 25.9301 42.2678 26.3989C42.7366 26.8677 43 27.5036 43 28.1667V39.8333C43 40.4964 42.7366 41.1323 42.2678 41.6011C41.7989 42.0699 41.163 42.3333 40.5 42.3333H24.1667C23.5036 42.3333 22.8677 42.0699 22.3989 41.6011C21.9301 41.1323 21.6667 40.4964 21.6667 39.8333V25.6667Z" fill="#7B7575"/>
</svg>

                  </span>
                        <div className="flex flex-col gap-1 text-center text-sm mt-4">
                            <div>3</div>
                            <div>You pay through SINGULART</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-8">
                  <span className="relative top-12">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="31.5" fill="white" stroke="#7B7575"/>
<path d="M19.1992 26.7999C19.1992 25.6329 19.6628 24.5138 20.4879 23.6886C21.3131 22.8635 22.4323 22.3999 23.5992 22.3999H40.3992C41.5662 22.3999 42.6853 22.8635 43.5105 23.6886C44.3356 24.5138 44.7992 25.6329 44.7992 26.7999V37.1999C44.7992 38.3669 44.3356 39.486 43.5105 40.3112C42.6853 41.1363 41.5662 41.5999 40.3992 41.5999H23.5992C22.4323 41.5999 21.3131 41.1363 20.4879 40.3112C19.6628 39.486 19.1992 38.3669 19.1992 37.1999V26.7999ZM20.7992 31.9999V37.1999C20.7992 38.7455 22.0536 39.9999 23.5992 39.9999H27.1992V33.1311L24.5656 35.7663C24.4154 35.9165 24.2117 36.0009 23.9992 36.0009C23.7868 36.0009 23.583 35.9165 23.4328 35.7663C23.2826 35.6161 23.1982 35.4123 23.1982 35.1999C23.1982 34.9875 23.2826 34.7837 23.4328 34.6335L26.068 31.9999H20.7992ZM22.828 30.3999C22.4759 29.7899 22.3348 29.0807 22.4268 28.3823C22.5188 27.6839 22.8386 27.0354 23.3367 26.5374C23.8347 26.0393 24.4833 25.7195 25.1816 25.6275C25.88 25.5355 26.5892 25.6765 27.1992 26.0287V23.9999H23.5992C22.8566 23.9999 22.1444 24.2949 21.6193 24.82C21.0942 25.3451 20.7992 26.0573 20.7992 26.7999V30.3999H22.828ZM25.5992 30.3999H27.1992V28.7999C27.1992 28.4835 27.1054 28.1741 26.9296 27.911C26.7538 27.6479 26.5039 27.4428 26.2115 27.3217C25.9192 27.2006 25.5974 27.1689 25.2871 27.2306C24.9767 27.2924 24.6916 27.4448 24.4678 27.6685C24.2441 27.8923 24.0917 28.1774 24.03 28.4878C23.9682 28.7981 23.9999 29.1198 24.121 29.4122C24.2421 29.7046 24.4472 29.9544 24.7103 30.1303C24.9734 30.3061 25.2828 30.3999 25.5992 30.3999ZM28.7992 28.7999V30.3999H30.3992C30.7157 30.3999 31.025 30.3061 31.2881 30.1303C31.5513 29.9544 31.7563 29.7046 31.8774 29.4122C31.9985 29.1198 32.0302 28.7981 31.9685 28.4878C31.9067 28.1774 31.7544 27.8923 31.5306 27.6685C31.3068 27.4448 31.0217 27.2924 30.7114 27.2306C30.401 27.1689 30.0793 27.2006 29.7869 27.3217C29.4946 27.4428 29.2447 27.6479 29.0689 27.911C28.8931 28.1741 28.7992 28.4835 28.7992 28.7999ZM33.1704 30.3999H43.1992V26.7999C43.1992 26.0573 42.9042 25.3451 42.3791 24.82C41.854 24.2949 41.1418 23.9999 40.3992 23.9999H28.7992V26.0287C29.4093 25.6765 30.1185 25.5355 30.8168 25.6275C31.5152 25.7195 32.1637 26.0393 32.6618 26.5374C33.1598 27.0354 33.4797 27.6839 33.5716 28.3823C33.6636 29.0807 33.5226 29.7899 33.1704 30.3999ZM29.9304 31.9999L32.5656 34.6335C32.7158 34.7837 32.8002 34.9875 32.8002 35.1999C32.8002 35.4123 32.7158 35.6161 32.5656 35.7663C32.4154 35.9165 32.2117 36.0009 31.9992 36.0009C31.7868 36.0009 31.583 35.9165 31.4328 35.7663L28.7992 33.1311V39.9999H40.3992C41.1418 39.9999 41.854 39.7049 42.3791 39.1798C42.9042 38.6547 43.1992 37.9425 43.1992 37.1999V31.9999H29.9304Z" fill="#7B7575"/>
</svg>

                  </span>
                        <div className="flex flex-col gap-1 text-center text-sm pt-14">
                            <div>4</div>
                            <div>We take care of sending the</div>
                            <div>gift card, via the post in a</div>
                            <div>special gift box, at the time</div>
                            <div>you decided.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"bg-gold px-20 py-8"}>
                <p className={"text-lg"}>
                    *If the event is coming up very soon, don’t worry! We will send an email to the lucky recipient with your message and the code. Our advisory service still
                    stands.
                </p>
            </section>
            <section className={"px-20 my-10"}>
                <div className={"flex gap-4"}>
                    <span className={"text-black"}>
                    Any Questions?
                </span>
                    <span className={"text-gold"}>
                    CONTACT US
                </span>
                </div>
            </section>
            <section className={" px-20 my-16"}>
                <div className={" w-full justify-start items-center"}>
                    <div className={"float-left text-3xl font-bold pr-5 text-black"}>Offer a Gift Card</div>
                    <div className={"pt-5"}>
                        <hr className={"h-2px text-gold bg-gold"}/>
                    </div>
                </div>
            </section>

            <section>
                <article className={"bg-editbg py-12 my-6 px-20 flex flex-col gap-8"}>
                    <div>
                       <span className={"text-black font-bold text-xl"}>
                           1. How much would you like to offer?
                       </span>
                    </div>
                   <section>
                       <div>
                           <div className={"flex flex-col"}>
                               <label htmlFor="" className={"text-gray-400"}>Offered amount</label>
                               <div className={"flex gap-8"}>
                                   <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"100"}/>
                                   <select className={"w-56 border border-gray-300 py-3 px-4 rounded text-gray-300"}>
                                       <option value="fsdf" selected={true}>ERP</option>
                                   </select>
                               </div>
                           </div>
                       </div>
                       <div className={"mt-8"}>
                           <button className={"bg-secondary text-white rounded py-4 px-6"}>
                               PROCEED TO THE NEXT STEP
                           </button>
                       </div>
                   </section>
                </article>
                <article className={"bg-editbg py-12 my-6 px-20 flex flex-col gap-8"}>
                    <div>
                       <span className={"text-black font-bold text-xl"}>
                           2. Recipient's details
                       </span>
                    </div>
                    <section>
                        <div>
                            <div className={"flex flex-col"}>
                                <label htmlFor="" className={"text-gray-400"}>On which date would you like to offer this gift card?</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"mm/dd/yy"}/>
                            </div>
                            <div className={"flex flex-col mt-10"}>
                                <label htmlFor="" className={"text-gray-400"}>The full name of the recipient</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Recipient name for delivery"}/>
                            </div>
                            <div className={"flex flex-col mt-10"}>
                                <label htmlFor="" className={"text-gray-400"}>Recipient's email address</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"The email address where the recipient will receive their code"}/>
                            </div>
                            <span className={"block text-gray-400 my-10  text-lg uppercase font-bold"}>
                                The postal address where you want the gift to be sent to:
                            </span>
                            <div className={"flex flex-col gap-2 mt-10"}>
                                <label htmlFor="" className={"text-gray-400"}>Address</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Address line 1"}/>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Address line 2"}/>
                            </div>
                            <div className={"flex flex-col mt-10"}>
                                <label htmlFor="" className={"text-gray-400"}>APARTMENT, BUILDING...</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Apartment, Building..."}/>
                            </div>
                            <div className={"flex flex-col mt-10"}>
                                <label htmlFor="" className={"text-gray-400"}>CITY</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"Apartment, Building..."}/>
                            </div>
                            <div className={"flex flex-col mt-10"}>
                                <label htmlFor="" className={"text-gray-400"}>STATE/COUNTY</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"STATE/COUNTY"}/>
                            </div>
                            <div className={"flex flex-col mt-10"}>
                                <label htmlFor="" className={"text-gray-400"}>ZIP CODE/POSTCODE</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"ZIP CODE/POSTCODE"}/>
                            </div>
                            <div className={"flex flex-col mt-10"}>
                                <label htmlFor="" className={"text-gray-400"}>COUNTRY</label>
                                <input className={"w-490px border border-gray-300 py-3 px-4 rounded placeholder-gray-300"} type="text" placeholder={"COUNTRY"}/>
                            </div>
                        </div>
                        <div className={"mt-8"}>
                            <button className={"bg-secondary text-white rounded py-4 px-6"}>
                                PROCEED TO THE NEXT STEP
                            </button>
                        </div>
                    </section>
                </article>
            </section>











        </HomeLayout>
    )
}

export default Gift;
