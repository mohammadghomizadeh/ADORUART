import React from "react";
import HomeLayout from "@/components/layouts/Home";
function Dream()  {

    return (
        <>
            <HomeLayout title={"Home"}>
                <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                    <div className={"mt-12 text-56"}>
                        <h1>Art for your office</h1>
                    </div>
                    <div>
                        <p>
                            AN ART COLLECTION FOR MY BUSINESS
                        </p>
                    </div>
                    <div className={"mt-8"}>
                        <button className={"bg-secondary py-4 px-20 rounded "}>
                            CONTACT US
                        </button>
                    </div>

                </section>
                <section className={"px-20 bg-editbg py-4 text-black font-bold"}>
                    Art for Offices
                </section>
                <section className={"px-20"}>
                    <div className="relative flex py-10 items-center">
                        <span className="flex-shrink mx-4 text-black text-xl font-bold">Why choose ADORUART?</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                </section>
                <section className={"px-20"}>
                    <article className={"py-10 w-full text-black"}>
                        <main className={" flex justify-between gap-8"}>
                            <div className={"w-3/6"}>
                                <p className={"mt-16 pr-32 leading-10"}>
                                    ADORUART is the first art gallery in Europe to offer full customer support for
                                    corporate art acquisition.
                                </p>
                                <div className={"mt-10"}>
                                    <ul className={"flex flex-col gap-8"}>
                                        <li className={"flex gap-2 justify-start items-center "}>
                                            <span>
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="20" cy="20" r="20" fill="#D4A551"/>
                                                    <path d="M18.9 28V16.23L16.2 17.88V15.22L18.9 13.6H21.36V28H18.9Z" fill="white"/>
                                                </svg>
                                           </span>
                                            <div className={"flex flex-col relative top-3"}>
                                                <span className={"font-bold"}>Specialised advice</span>
                                                <span className={"pt-1"}>from a qualified art advisor.</span>
                                           </div>
                                        </li>
                                        <li className={"flex gap-2 justify-start items-center"}>
                                           <span>
                                               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20" r="20" fill="#D4A551"/>
                                                <path d="M15 27.98V25.88L21.16 20.39C21.64 19.9633 21.9733 19.56 22.16 19.18C22.3467 18.8 22.44 18.4333 22.44 18.08C22.44 17.6 22.3367 17.1733 22.13 16.8C21.9233 16.42 21.6367 16.12 21.27 15.9C20.91 15.68 20.4933 15.57 20.02 15.57C19.52 15.57 19.0767 15.6867 18.69 15.92C18.31 16.1467 18.0133 16.45 17.8 16.83C17.5867 17.21 17.4867 17.62 17.5 18.06H15.02C15.02 17.1 15.2333 16.2633 15.66 15.55C16.0933 14.8367 16.6867 14.2833 17.44 13.89C18.2 13.4967 19.0767 13.3 20.07 13.3C20.99 13.3 21.8167 13.5067 22.55 13.92C23.2833 14.3267 23.86 14.8933 24.28 15.62C24.7 16.34 24.91 17.17 24.91 18.11C24.91 18.7967 24.8167 19.3733 24.63 19.84C24.4433 20.3067 24.1633 20.7367 23.79 21.13C23.4233 21.5233 22.9667 21.96 22.42 22.44L18.05 26.31L17.83 25.71H24.91V27.98H15Z" fill="white"/>
                                                </svg>

                                           </span>
                                            <div className={"flex flex-col relative top-3"}>
                                                <span className={"font-bold"}>Selected artworks</span>
                                                <span className={"pt-1"}>by 1200 artists from 50 countries.</span>
                                            </div>

                                        </li>

                                        <li className={"flex gap-2 justify-start items-center -mt-3"}>
                                           <span>
                                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#D4A551"/>
<path d="M19.52 28.27C18.8 28.27 18.12 28.13 17.48 27.85C16.84 27.57 16.2833 27.1733 15.81 26.66C15.3433 26.1467 15.0067 25.54 14.8 24.84L17.13 24.21C17.2967 24.7833 17.6 25.2267 18.04 25.54C18.4867 25.8467 18.9767 25.9967 19.51 25.99C19.9833 25.99 20.4067 25.88 20.78 25.66C21.1533 25.44 21.4467 25.1433 21.66 24.77C21.8733 24.39 21.98 23.9667 21.98 23.5C21.98 22.7867 21.75 22.19 21.29 21.71C20.83 21.23 20.2367 20.99 19.51 20.99C19.29 20.99 19.0733 21.02 18.86 21.08C18.6533 21.14 18.4533 21.2233 18.26 21.33L17.16 19.43L22 15.29L22.21 15.87H15.36V13.6H24.19V15.88L20.3 19.62L20.28 18.91C21.1533 18.97 21.8967 19.2133 22.51 19.64C23.13 20.0667 23.6033 20.6167 23.93 21.29C24.2633 21.9633 24.43 22.7 24.43 23.5C24.43 24.4067 24.2067 25.22 23.76 25.94C23.32 26.66 22.7267 27.23 21.98 27.65C21.24 28.0633 20.42 28.27 19.52 28.27Z" fill="white"/>
</svg>
                                           </span>
                                            <div className={"flex flex-col relative top-6"}>
                                                <span className={"font-bold"}>For all tastes:</span>
                                                <span className={"pt-1"}>A comprehensive selection in every style, from street and digital art to
photography and sculpture..</span>
                                            </div>
                                        </li>
                                        <li className={"flex gap-2 justify-start "}>
                                           <span>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#D4A551"/>
<path d="M20.38 28V25.62H14V23.37L18.61 13.6H21.36L16.75 23.37H20.38V19.62H22.82V23.37H24.17V25.62H22.82V28H20.38Z" fill="white"/>
</svg>
                                           </span>
                                            <div className={"flex flex-col relative top-2"}>
                                                <span className={"font-bold"}>Customer service from start to finish</span>
                                                <span className={"pt-1"}>making art accessible in just a few clicks.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"w-3/6"}>
                                <div className={"mt-10"}>
                                    <img src="/images/dream2.png" alt=""/>
                                </div>
                            </div>
                        </main>
                    </article>
                </section>
                <section className={"bg-editbg px-20 my-10"}>
                    <div className="relative flex py-10 items-center">
                        <div className="flex-grow border-t border-gold"></div>
                        <span className="flex-shrink mx-4 text-black text-2xl font-bold">Why bring art to your business?</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                    <section className={"grid grid-cols-3 px-10 py-10 text-black"}>
                        <article className={""}>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M43.2039 19H35.5227C35.2838 18.9998 35.0546 19.0942 34.8852 19.2625L19.5289 34.6188C19.1927 34.9566 19.0039 35.4139 19.0039 35.8906C19.0039 36.3673 19.1927 36.8246 19.5289 37.1625L26.8414 44.475C27.1793 44.8112 27.6366 45 28.1133 45C28.59 45 29.0473 44.8112 29.3852 44.475L44.7352 29.125C44.9035 28.9555 44.9978 28.7263 44.9977 28.4875V20.8C44.9988 20.5638 44.9533 20.3298 44.8636 20.1113C44.7739 19.8928 44.642 19.6941 44.4752 19.5268C44.3085 19.3596 44.1104 19.2269 43.8922 19.1365C43.674 19.046 43.4401 18.9997 43.2039 19V19Z" stroke="#7B7575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M40 26C39.6044 26 39.2178 25.8827 38.8889 25.6629C38.56 25.4432 38.3036 25.1308 38.1522 24.7654C38.0009 24.3999 37.9613 23.9978 38.0384 23.6098C38.1156 23.2219 38.3061 22.8655 38.5858 22.5858C38.8655 22.3061 39.2219 22.1156 39.6098 22.0384C39.9978 21.9613 40.3999 22.0009 40.7654 22.1522C41.1308 22.3036 41.4432 22.56 41.6629 22.8889C41.8827 23.2178 42 23.6044 42 24C42 24.5304 41.7893 25.0391 41.4142 25.4142C41.0391 25.7893 40.5304 26 40 26Z" fill="#7B7575"/>
                                </svg>
                            </div>
                            <div className={"text-center mt-4"}>
                                <span>Wellbeing at work</span>
                                <span>Art stimulates your
employees' creativity and
improves their sense of
wellbeing at work.</span>
                            </div>
                        </article>
                        <article>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M39 29V33C39 33.2652 38.8946 33.5196 38.7071 33.7071C38.5196 33.8946 38.2652 34 38 34H28.4125L29.7125 35.2875C29.9003 35.4771 30.0056 35.7332 30.0056 36C30.0056 36.2668 29.9003 36.5229 29.7125 36.7125C29.5214 36.8973 29.2659 37.0006 29 37.0006C28.7341 37.0006 28.4786 36.8973 28.2875 36.7125L25.2875 33.7125C25.0997 33.5229 24.9944 33.2668 24.9944 33C24.9944 32.7332 25.0997 32.4771 25.2875 32.2875L28.2875 29.2875C28.4818 29.128 28.7285 29.0465 28.9795 29.0589C29.2306 29.0712 29.4681 29.1765 29.6458 29.3542C29.8235 29.5319 29.9288 29.7694 29.9411 30.0205C29.9535 30.2715 29.872 30.5182 29.7125 30.7125L28.4125 32H37V29C37 28.7348 37.1054 28.4804 37.2929 28.2929C37.4804 28.1054 37.7348 28 38 28C38.2652 28 38.5196 28.1054 38.7071 28.2929C38.8946 28.4804 39 28.7348 39 29ZM45 23V41C45 41.5304 44.7893 42.0391 44.4142 42.4142C44.0391 42.7893 43.5304 43 43 43H21C20.4696 43 19.9609 42.7893 19.5858 42.4142C19.2107 42.0391 19 41.5304 19 41V23C19 22.4696 19.2107 21.9609 19.5858 21.5858C19.9609 21.2107 20.4696 21 21 21H43C43.5304 21 44.0391 21.2107 44.4142 21.5858C44.7893 21.9609 45 22.4696 45 23ZM43 41V23H21V41H43Z" fill="#7B7575"/>
                                </svg>
                            </div>
                            <div className={"text-center mt-4"}>
                                <span>
                                    Tax advantages
                                </span>
                                <span>
                                    You can take advantage of the
tax benefits available for
businesses when buying art.
                                </span>

                            </div>
                        </article>
                        <article>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M16 22V24H35V39H28.844C28.398 37.281 26.852 36 25 36C23.148 36 21.602 37.281 21.156 39H20V34H18V41H21.156C21.602 42.719 23.148 44 25 44C26.852 44 28.398 42.719 28.844 41H37.156C37.602 42.719 39.148 44 41 44C42.852 44 44.398 42.719 44.844 41H48V32.844L47.937 32.687L45.937 26.687L45.72 26H37V22H16ZM17 26V28H26V26H17ZM37 28H44.281L46 33.125V39H44.844C44.398 37.281 42.852 36 41 36C39.148 36 37.602 37.281 37.156 39H37V28ZM18 30V32H24V30H18ZM25 38C26.117 38 27 38.883 27 40C27 41.117 26.117 42 25 42C23.883 42 23 41.117 23 40C23 38.883 23.883 38 25 38ZM41 38C42.117 38 43 38.883 43 40C43 41.117 42.117 42 41 42C39.883 42 39 41.117 39 40C39 38.883 39.883 38 41 38Z" fill="#7B7575"/>
                                </svg>

                            </div>
                            <div className={"text-center mt-4"}>
                                <span>
                                    Improve your image
                                </span>
                                <span>
                                    Artworks showcase the
personality of a business and
the brand's values.
                                </span>

                            </div>
                        </article>
                    </section>
                </section>
                <section className={"px-20"}>
                    <div className="relative flex py-10 items-center">
                        <div className="flex-grow border-t border-gold"></div>
                        <span className="flex-shrink mx-4 text-black text-2xl font-bold">Art, a tool for communication</span>
                    </div>
                    <section className={"flex justify-between  gap-20 "}>
                        <div className={"w-2/4 relative flex justify-end"}>
                            <img src="/images/dream2.png" className={"h-423px w-4/5"} alt=""/>
                        </div>
                        <div className={"w-2/4 text-black"}>
                            <p className={"text-black "}>
                                Invite your associates and clients (both existing and potential) to a tailor
                                made event that highlights your company's values.
                            </p>
                            <span className={"font-bold mt-14 block"}>
                                Events
                            </span>
                            <p className={"text-black "}>
                                Have a made-to-fit work created before your eyes.
                            </p>
                            <span className={"font-bold  mt-14 block"}>
                                Private view
                            </span>
                            <p className={"text-black "}>
                                Invite your associates and clients to discover your new art collection
                            </p>
                            <button className={"text-white bg-primary py-3 px-6 rounded mt-24"}>
                                CONTACT US
                            </button>
                        </div>

                    </section>
                </section>
                <section className={"bg-editbg px-20 my-10"}>
                    <div className="relative flex py-10 items-center">
                        <div className="flex-grow border-t border-gold"></div>
                        <span className="flex-shrink mx-4 text-black text-2xl font-bold">How can you bring art to your business?</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                    <section className={"grid grid-cols-3 px-10 py-10 text-black"}>
                        <article className={""}>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M43.2039 19H35.5227C35.2838 18.9998 35.0546 19.0942 34.8852 19.2625L19.5289 34.6188C19.1927 34.9566 19.0039 35.4139 19.0039 35.8906C19.0039 36.3673 19.1927 36.8246 19.5289 37.1625L26.8414 44.475C27.1793 44.8112 27.6366 45 28.1133 45C28.59 45 29.0473 44.8112 29.3852 44.475L44.7352 29.125C44.9035 28.9555 44.9978 28.7263 44.9977 28.4875V20.8C44.9988 20.5638 44.9533 20.3298 44.8636 20.1113C44.7739 19.8928 44.642 19.6941 44.4752 19.5268C44.3085 19.3596 44.1104 19.2269 43.8922 19.1365C43.674 19.046 43.4401 18.9997 43.2039 19V19Z" stroke="#7B7575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M40 26C39.6044 26 39.2178 25.8827 38.8889 25.6629C38.56 25.4432 38.3036 25.1308 38.1522 24.7654C38.0009 24.3999 37.9613 23.9978 38.0384 23.6098C38.1156 23.2219 38.3061 22.8655 38.5858 22.5858C38.8655 22.3061 39.2219 22.1156 39.6098 22.0384C39.9978 21.9613 40.3999 22.0009 40.7654 22.1522C41.1308 22.3036 41.4432 22.56 41.6629 22.8889C41.8827 23.2178 42 23.6044 42 24C42 24.5304 41.7893 25.0391 41.4142 25.4142C41.0391 25.7893 40.5304 26 40 26Z" fill="#7B7575"/>
                                </svg>
                            </div>
                            <div className={"text-center mt-4"}>
                                <span>Purchase</span>
                                <span>100% tax-deductible</span>
                            </div>
                        </article>
                        <article>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M39 29V33C39 33.2652 38.8946 33.5196 38.7071 33.7071C38.5196 33.8946 38.2652 34 38 34H28.4125L29.7125 35.2875C29.9003 35.4771 30.0056 35.7332 30.0056 36C30.0056 36.2668 29.9003 36.5229 29.7125 36.7125C29.5214 36.8973 29.2659 37.0006 29 37.0006C28.7341 37.0006 28.4786 36.8973 28.2875 36.7125L25.2875 33.7125C25.0997 33.5229 24.9944 33.2668 24.9944 33C24.9944 32.7332 25.0997 32.4771 25.2875 32.2875L28.2875 29.2875C28.4818 29.128 28.7285 29.0465 28.9795 29.0589C29.2306 29.0712 29.4681 29.1765 29.6458 29.3542C29.8235 29.5319 29.9288 29.7694 29.9411 30.0205C29.9535 30.2715 29.872 30.5182 29.7125 30.7125L28.4125 32H37V29C37 28.7348 37.1054 28.4804 37.2929 28.2929C37.4804 28.1054 37.7348 28 38 28C38.2652 28 38.5196 28.1054 38.7071 28.2929C38.8946 28.4804 39 28.7348 39 29ZM45 23V41C45 41.5304 44.7893 42.0391 44.4142 42.4142C44.0391 42.7893 43.5304 43 43 43H21C20.4696 43 19.9609 42.7893 19.5858 42.4142C19.2107 42.0391 19 41.5304 19 41V23C19 22.4696 19.2107 21.9609 19.5858 21.5858C19.9609 21.2107 20.4696 21 21 21H43C43.5304 21 44.0391 21.2107 44.4142 21.5858C44.7893 21.9609 45 22.4696 45 23ZM43 41V23H21V41H43Z" fill="#7B7575"/>
                                </svg>
                            </div>
                            <div className={"text-center mt-4"}>
                                <span>
                                    Leasing
                                </span>
                                <span>
                                    The length of the lease period can be adapted to suit your needs
                                </span>
                                <span>
                                    Possibility to purchase the work in the future
                                </span>
                            </div>
                        </article>
                        <article>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M16 22V24H35V39H28.844C28.398 37.281 26.852 36 25 36C23.148 36 21.602 37.281 21.156 39H20V34H18V41H21.156C21.602 42.719 23.148 44 25 44C26.852 44 28.398 42.719 28.844 41H37.156C37.602 42.719 39.148 44 41 44C42.852 44 44.398 42.719 44.844 41H48V32.844L47.937 32.687L45.937 26.687L45.72 26H37V22H16ZM17 26V28H26V26H17ZM37 28H44.281L46 33.125V39H44.844C44.398 37.281 42.852 36 41 36C39.148 36 37.602 37.281 37.156 39H37V28ZM18 30V32H24V30H18ZM25 38C26.117 38 27 38.883 27 40C27 41.117 26.117 42 25 42C23.883 42 23 41.117 23 40C23 38.883 23.883 38 25 38ZM41 38C42.117 38 43 38.883 43 40C43 41.117 42.117 42 41 42C39.883 42 39 41.117 39 40C39 38.883 39.883 38 41 38Z" fill="#7B7575"/>
                                </svg>

                            </div>
                            <div className={"text-center mt-4"}>
                                <span>
                                    Art on commission
                                </span>
                                <span>
                                    Choice of local artist
                                </span>
                                <span>
                                    onception and creation of a
custom work
                                </span>
                            </div>
                        </article>
                    </section>
                </section>
                <section className={"bg-gold flex gap-4  justify-between items-center py-10 px-20"}>
                   <div className={""}>
                       <span className={"text-black font-black font-bold text-2xl"}>
                       What are you waiting for?
                        </span>
                       <p className={"text-black"}>
                           We're here to answer all tax-related questions and will help you find the
                           solution that best suits your needs.
                       </p>
                   </div>
                    <div className={"flex gap-4"}>
                        <div>
                            <img src="/images/collectors.png" alt=""/>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <span>
                                Philip
                            </span>
                            <span>
                                Cofounder
                            </span>
                            <div className={"flex gap-2 items-center justify-center"}>
                                <span>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.90676 2.37388C1.9081 2.37388 1.87476 2.40854 1.83276 2.44988C1.67143 2.60654 1.33743 2.93254 1.33406 3.61454C1.32876 4.56854 1.9561 6.33988 4.97676 9.35988C7.98343 12.3652 9.7521 12.9999 10.7081 12.9999H10.7221C11.4041 12.9965 11.7294 12.6619 11.8868 12.5012C11.9348 12.4519 11.9734 12.4159 12.0008 12.3932C12.6648 11.7252 13.0048 11.2279 13.0015 10.9092C12.9968 10.5839 12.5921 10.1992 12.0328 9.66721C11.8548 9.49788 11.6614 9.31388 11.4574 9.10988C10.9288 8.58254 10.6668 8.67254 10.0908 8.87521C9.2941 9.15454 8.20076 9.53454 6.5021 7.83521C4.80076 6.13521 5.18143 5.04321 5.4601 4.24654C5.66143 3.67054 5.75343 3.40788 5.2241 2.87854C5.01676 2.67188 4.83076 2.47588 4.65943 2.29588C4.13076 1.73988 3.74943 1.33788 3.4261 1.33321H3.42076C3.10143 1.33321 2.60543 1.67454 1.90343 2.37654C1.90543 2.37454 1.9061 2.37388 1.90676 2.37388ZM10.7088 13.9999C9.04743 13.9999 6.88143 12.6772 4.2701 10.0672C1.64876 7.44654 0.324096 5.27388 0.33404 3.60921C0.340096 2.50921 0.916763 1.94588 1.13343 1.73454C1.14476 1.72054 1.18343 1.68254 1.19676 1.66921C2.15276 0.712543 2.79743 0.325876 3.43876 0.333107C4.18343 0.343209 4.71343 0.900543 5.3841 1.60654C5.5501 1.78121 5.7301 1.97121 5.93076 2.17121C6.9041 3.14454 6.62676 3.93854 6.4041 4.57588C6.16143 5.27121 5.95143 5.87121 7.20876 7.12854C8.46743 8.38588 9.06743 8.17588 9.7601 7.93121C10.3981 7.70854 11.1901 7.42988 12.1648 8.40321C12.3621 8.60054 12.5494 8.77854 12.7221 8.94321C13.4314 9.61721 13.9914 10.1499 14.0009 10.8965C14.0088 11.5332 13.6221 12.1819 12.6674 13.1372L12.2448 12.8505L12.6021 13.1999C12.3908 13.4165 11.8281 13.9939 10.7274 13.9999H10.7088Z" fill="white"/>
                                    </svg>
                                </span>
                                <span>
                                    +33 (0)7 83 24 45 22
                                </span>
                            </div>
                            <div className={"flex gap-2 items-center justify-center"}>
                                <span>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.90676 2.37388C1.9081 2.37388 1.87476 2.40854 1.83276 2.44988C1.67143 2.60654 1.33743 2.93254 1.33406 3.61454C1.32876 4.56854 1.9561 6.33988 4.97676 9.35988C7.98343 12.3652 9.7521 12.9999 10.7081 12.9999H10.7221C11.4041 12.9965 11.7294 12.6619 11.8868 12.5012C11.9348 12.4519 11.9734 12.4159 12.0008 12.3932C12.6648 11.7252 13.0048 11.2279 13.0015 10.9092C12.9968 10.5839 12.5921 10.1992 12.0328 9.66721C11.8548 9.49788 11.6614 9.31388 11.4574 9.10988C10.9288 8.58254 10.6668 8.67254 10.0908 8.87521C9.2941 9.15454 8.20076 9.53454 6.5021 7.83521C4.80076 6.13521 5.18143 5.04321 5.4601 4.24654C5.66143 3.67054 5.75343 3.40788 5.2241 2.87854C5.01676 2.67188 4.83076 2.47588 4.65943 2.29588C4.13076 1.73988 3.74943 1.33788 3.4261 1.33321H3.42076C3.10143 1.33321 2.60543 1.67454 1.90343 2.37654C1.90543 2.37454 1.9061 2.37388 1.90676 2.37388ZM10.7088 13.9999C9.04743 13.9999 6.88143 12.6772 4.2701 10.0672C1.64876 7.44654 0.324096 5.27388 0.33404 3.60921C0.340096 2.50921 0.916763 1.94588 1.13343 1.73454C1.14476 1.72054 1.18343 1.68254 1.19676 1.66921C2.15276 0.712543 2.79743 0.325876 3.43876 0.333107C4.18343 0.343209 4.71343 0.900543 5.3841 1.60654C5.5501 1.78121 5.7301 1.97121 5.93076 2.17121C6.9041 3.14454 6.62676 3.93854 6.4041 4.57588C6.16143 5.27121 5.95143 5.87121 7.20876 7.12854C8.46743 8.38588 9.06743 8.17588 9.7601 7.93121C10.3981 7.70854 11.1901 7.42988 12.1648 8.40321C12.3621 8.60054 12.5494 8.77854 12.7221 8.94321C13.4314 9.61721 13.9914 10.1499 14.0009 10.8965C14.0088 11.5332 13.6221 12.1819 12.6674 13.1372L12.2448 12.8505L12.6021 13.1999C12.3908 13.4165 11.8281 13.9939 10.7274 13.9999H10.7088Z" fill="white"/>
                                    </svg>
                                </span>
                                <span>
                                    +33 (0)7 83 24 45 22
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"text-black flex flex-col items-center justify "}>
                    <span className={"mt-8 text-xl font-bold"}>
                        CLIENT TESTIMONIALS
                    </span>
                    <div className={"flex items-center gap-10 py-10"}>
                        <img src="/images/advisory.png" alt=""/>
                        <img src="/images/advisory.png" alt=""/>
                        <img src="/images/advisory.png" alt=""/>
                        <img src="/images/advisory.png" alt=""/>
                    </div>
                </section>







            </HomeLayout>
        </>
    )
}

export default Dream;
