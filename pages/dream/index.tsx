import React from "react";
import HomeLayout from "@/components/layouts/Home";
function Dream()  {

    return (
       <>
           <HomeLayout title={"Home"}>
               <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                   <div className={"mt-12 text-56"}>
                       <h1>Can't find your dream work?</h1>
                   </div>
                   <div>
                       <p>
                           Discover artwork selections curated especially for you by our Art Advisors
                       </p>
                   </div>
                   <div className={"mt-8"}>
                       <button className={"bg-secondary py-4 px-20 rounded "}>
                           COMMISSION ONE
                       </button>
                   </div>

               </section>
               <section className={"px-20 bg-editbg py-4 text-black font-bold"}>
                   Can't find your dream work?
               </section>
               <section className={"px-20"}>
                   <article className={"py-10 w-full text-black"}>
                       <header className={" flex justify-between items-center"}>
                           <div className={"w-3/6"}>
                               <span className={"font-bold text-2xl"}>
                                   What is a commission piece ?
                               </span>
                           </div>
                           <div className={"w-3/6"}>
                               <div className={"border-b-2 border-gold"}></div>
                           </div>
                       </header>
                       <main className={" flex justify-between "}>
                           <div className={"w-3/6"}>
                               <p className={"mt-16 pr-32 leading-8"}>
                                   Think of Michelangelo! He lived mainly on commission works!
                                   On ADORUART and without being a patron, you can ask an artist to
                                   create a work especially for you.
                                   It will not be more expensive than buying a work that has already been
                                   created.
                               </p>
                           </div>
                           <div className={"w-3/6"}>
                               <div className={"mt-10"}>
                                   <img src="/images/dream1.png" alt=""/>
                               </div>
                           </div>
                       </main>
                   </article>
                   <article className={"py-10 w-full text-black"}>
                       <header className={" flex justify-between items-center gap-8"}>
                           <div className={"w-3/6"}>
                               <div className={"border-b-2 border-gold"}></div>
                           </div>
                           <div className={"w-3/6"}>
                               <span className={"font-bold text-2xl"}>
                                  When to commission an artist ?
                               </span>
                           </div>
                       </header>
                       <main className={" flex justify-between gap-8"}>
                           <div className={"w-3/6"}>
                               <div className={"mt-10"}>
                                   <img src="/images/dream1.png" alt=""/>
                               </div>
                           </div>
                           <div className={"w-3/6"}>
                               <p className={"mt-16 pr-32 leading-8"}>
                                   Think of Michelangelo! He lived mainly on commission works!
                                   On ADORUART and without being a patron, you can ask an artist to
                                   create a work especially for you.
                                   It will not be more expensive than buying a work that has already been
                                   created.
                               </p>
                           </div>
                       </main>
                   </article>
                   <article className={"py-10 w-full text-black"}>
                       <header className={" flex justify-between items-center gap-8"}>
                           <div className={"w-3/6"}>
                               <span className={"font-bold text-2xl"}>
                                   How does it work?
                               </span>
                           </div>
                           <div className={"w-3/6"}>
                               <div className={"border-b-2 border-gold"}></div>
                           </div>
                       </header>
                       <main className={" flex justify-between gap-8"}>
                           <div className={"w-3/6"}>
                               <p className={"mt-16 pr-32 leading-10"}>
                                   Think of Michelangelo! He lived mainly on commission works!
                                   On ADORUART and without being a patron, you can ask an artist to
                                   create a work especially for you.
                                   It will not be more expensive than buying a work that has already been
                                   created.
                               </p>
                               <div className={"mt-10"}>
                                   <ul className={"flex flex-col gap-8"}>
                                       <li className={"flex gap-2 justify-start items-center"}>
                                           <span>
                                               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="20" cy="20" r="20" fill="#D4A551"/>
                                                    <path d="M18.9 28V16.23L16.2 17.88V15.22L18.9 13.6H21.36V28H18.9Z" fill="white"/>
                                                    </svg>
                                           </span>
                                           <span>
                                               You contact our art advisory team to request a custom work
                                           </span>

                                       </li>
                                       <li className={"flex gap-2 justify-start items-center"}>
                                           <span>
                                               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#D4A551"/>
<path d="M15 27.98V25.88L21.16 20.39C21.64 19.9633 21.9733 19.56 22.16 19.18C22.3467 18.8 22.44 18.4333 22.44 18.08C22.44 17.6 22.3367 17.1733 22.13 16.8C21.9233 16.42 21.6367 16.12 21.27 15.9C20.91 15.68 20.4933 15.57 20.02 15.57C19.52 15.57 19.0767 15.6867 18.69 15.92C18.31 16.1467 18.0133 16.45 17.8 16.83C17.5867 17.21 17.4867 17.62 17.5 18.06H15.02C15.02 17.1 15.2333 16.2633 15.66 15.55C16.0933 14.8367 16.6867 14.2833 17.44 13.89C18.2 13.4967 19.0767 13.3 20.07 13.3C20.99 13.3 21.8167 13.5067 22.55 13.92C23.2833 14.3267 23.86 14.8933 24.28 15.62C24.7 16.34 24.91 17.17 24.91 18.11C24.91 18.7967 24.8167 19.3733 24.63 19.84C24.4433 20.3067 24.1633 20.7367 23.79 21.13C23.4233 21.5233 22.9667 21.96 22.42 22.44L18.05 26.31L17.83 25.71H24.91V27.98H15Z" fill="white"/>
</svg>

                                           </span>
                                               <span>
                                                   We contact your chosen artist* to negotiate the price and reach an
                                                agreement on your behalf.
                                               </span>
                                       </li>
                                       <li className={"flex gap-2 justify-start items-center"}>
                                           <span>
                                               <svg className={"invisible"} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20" r="20" fill="#D4A551"/>
                                                <path d="M15 27.98V25.88L21.16 20.39C21.64 19.9633 21.9733 19.56 22.16 19.18C22.3467 18.8 22.44 18.4333 22.44 18.08C22.44 17.6 22.3367 17.1733 22.13 16.8C21.9233 16.42 21.6367 16.12 21.27 15.9C20.91 15.68 20.4933 15.57 20.02 15.57C19.52 15.57 19.0767 15.6867 18.69 15.92C18.31 16.1467 18.0133 16.45 17.8 16.83C17.5867 17.21 17.4867 17.62 17.5 18.06H15.02C15.02 17.1 15.2333 16.2633 15.66 15.55C16.0933 14.8367 16.6867 14.2833 17.44 13.89C18.2 13.4967 19.0767 13.3 20.07 13.3C20.99 13.3 21.8167 13.5067 22.55 13.92C23.2833 14.3267 23.86 14.8933 24.28 15.62C24.7 16.34 24.91 17.17 24.91 18.11C24.91 18.7967 24.8167 19.3733 24.63 19.84C24.4433 20.3067 24.1633 20.7367 23.79 21.13C23.4233 21.5233 22.9667 21.96 22.42 22.44L18.05 26.31L17.83 25.71H24.91V27.98H15Z" fill="white"/>
                                                </svg>
                                           </span>
                                           <span className={"text-gray-300"}>
                                                   * We can also help you find your favorite artist if you don't already have
                                                    one in mind.
                                               </span>
                                       </li>
                                       <li className={"flex gap-2 justify-start items-center"}>
                                           <span>
                                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#D4A551"/>
<path d="M19.52 28.27C18.8 28.27 18.12 28.13 17.48 27.85C16.84 27.57 16.2833 27.1733 15.81 26.66C15.3433 26.1467 15.0067 25.54 14.8 24.84L17.13 24.21C17.2967 24.7833 17.6 25.2267 18.04 25.54C18.4867 25.8467 18.9767 25.9967 19.51 25.99C19.9833 25.99 20.4067 25.88 20.78 25.66C21.1533 25.44 21.4467 25.1433 21.66 24.77C21.8733 24.39 21.98 23.9667 21.98 23.5C21.98 22.7867 21.75 22.19 21.29 21.71C20.83 21.23 20.2367 20.99 19.51 20.99C19.29 20.99 19.0733 21.02 18.86 21.08C18.6533 21.14 18.4533 21.2233 18.26 21.33L17.16 19.43L22 15.29L22.21 15.87H15.36V13.6H24.19V15.88L20.3 19.62L20.28 18.91C21.1533 18.97 21.8967 19.2133 22.51 19.64C23.13 20.0667 23.6033 20.6167 23.93 21.29C24.2633 21.9633 24.43 22.7 24.43 23.5C24.43 24.4067 24.2067 25.22 23.76 25.94C23.32 26.66 22.7267 27.23 21.98 27.65C21.24 28.0633 20.42 28.27 19.52 28.27Z" fill="white"/>
</svg>
                                           </span>
                                           <span>
                                                   We confirm your commission and process your order - it'll soon be on its way.
                                           </span>
                                       </li>
                                       <li className={"flex gap-2 justify-start "}>
                                           <span>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#D4A551"/>
<path d="M20.38 28V25.62H14V23.37L18.61 13.6H21.36L16.75 23.37H20.38V19.62H22.82V23.37H24.17V25.62H22.82V28H20.38Z" fill="white"/>
</svg>
                                           </span>
                                           <span>
                                                   We supervise the creative process, sending you photographs of the
work in progress. The worldwide shipping is safe, and like any purchase
on SINGULART: if the final work does not suit you, the return is free of
charge.
                                           </span>
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
                       <span className="flex-shrink mx-4 text-black text-xl font-bold">SINGULART GUARANTEES</span>
                       <div className="flex-grow border-t border-gold"></div>
                   </div>
                   <section className={"grid grid-cols-4 px-10 py-10 text-black"}>
                       <article className={""}>
                           <div className={"flex justify-center items-center"}>
                               <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                   <path d="M43.2039 19H35.5227C35.2838 18.9998 35.0546 19.0942 34.8852 19.2625L19.5289 34.6188C19.1927 34.9566 19.0039 35.4139 19.0039 35.8906C19.0039 36.3673 19.1927 36.8246 19.5289 37.1625L26.8414 44.475C27.1793 44.8112 27.6366 45 28.1133 45C28.59 45 29.0473 44.8112 29.3852 44.475L44.7352 29.125C44.9035 28.9555 44.9978 28.7263 44.9977 28.4875V20.8C44.9988 20.5638 44.9533 20.3298 44.8636 20.1113C44.7739 19.8928 44.642 19.6941 44.4752 19.5268C44.3085 19.3596 44.1104 19.2269 43.8922 19.1365C43.674 19.046 43.4401 18.9997 43.2039 19V19Z" stroke="#7B7575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                   <path d="M40 26C39.6044 26 39.2178 25.8827 38.8889 25.6629C38.56 25.4432 38.3036 25.1308 38.1522 24.7654C38.0009 24.3999 37.9613 23.9978 38.0384 23.6098C38.1156 23.2219 38.3061 22.8655 38.5858 22.5858C38.8655 22.3061 39.2219 22.1156 39.6098 22.0384C39.9978 21.9613 40.3999 22.0009 40.7654 22.1522C41.1308 22.3036 41.4432 22.56 41.6629 22.8889C41.8827 23.2178 42 23.6044 42 24C42 24.5304 41.7893 25.0391 41.4142 25.4142C41.0391 25.7893 40.5304 26 40 26Z" fill="#7B7575"/>
                               </svg>
                           </div>
                           <div className={"text-center mt-4"}>
                               The commission will not be
                               more expensive
                               than the existing work in
                               question
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
                               Free returns
                               within 14 days
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
                               Safe delivery
                               all over the whole world
                           </div>
                       </article>
                       <article>
                           <div className={"flex justify-center items-center"}>
                               <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                   <path fillRule="evenodd" clipRule="evenodd" d="M20.0589 31.567C20.0589 38.0609 24.7671 42.4854 30.0557 43.4006C30.1995 43.4255 30.3371 43.4786 30.4604 43.5566C30.5838 43.6347 30.6906 43.7364 30.7747 43.8557C30.8588 43.9751 30.9185 44.1098 30.9505 44.2523C30.9826 44.3947 30.9862 44.5421 30.9613 44.6859C30.9363 44.8298 30.8833 44.9673 30.8052 45.0907C30.7271 45.2141 30.6255 45.3208 30.5062 45.4049C30.3868 45.489 30.2521 45.5488 30.1096 45.5808C29.9672 45.6128 29.8198 45.6165 29.6759 45.5915C23.4658 44.5163 17.8359 39.2811 17.8359 31.567C17.8359 28.2881 19.3271 25.711 21.0679 23.7526C22.3159 22.3489 23.7431 21.2075 24.8909 20.335H21.4007C21.1178 20.335 20.8465 20.2226 20.6465 20.0226C20.4465 19.8225 20.3341 19.5512 20.3341 19.2683C20.3341 18.9854 20.4465 18.7141 20.6465 18.5141C20.8465 18.314 21.1178 18.2017 21.4007 18.2017H27.8007C28.0836 18.2017 28.3549 18.314 28.555 18.5141C28.755 18.7141 28.8674 18.9854 28.8674 19.2683V25.6683C28.8674 25.9512 28.755 26.2225 28.555 26.4226C28.3549 26.6226 28.0836 26.735 27.8007 26.735C27.5178 26.735 27.2465 26.6226 27.0465 26.4226C26.8465 26.2225 26.7341 25.9512 26.7341 25.6683V21.7302L26.7319 21.7345C25.5117 22.6518 24.0226 23.7761 22.7319 25.2289C21.2066 26.9441 20.0589 29.0177 20.0589 31.5649V31.567ZM43.7559 32.4331C43.7559 26.0075 39.1479 21.6107 33.9277 20.6294C33.7822 20.6047 33.6431 20.5513 33.5184 20.4723C33.3938 20.3932 33.2861 20.2902 33.2018 20.1691C33.1174 20.048 33.0579 19.9114 33.0269 19.7671C32.9959 19.6228 32.994 19.4738 33.0212 19.3288C33.0484 19.1837 33.1042 19.0455 33.1853 18.9223C33.2665 18.799 33.3714 18.6932 33.4939 18.6109C33.6164 18.5286 33.7541 18.4716 33.8989 18.4431C34.0437 18.4145 34.1927 18.4152 34.3373 18.4449C40.4685 19.5969 45.9789 24.8022 45.9789 32.4331C45.9789 35.7121 44.4877 38.287 42.7469 40.2475C41.4989 41.6513 40.0717 42.7926 38.9239 43.6651H42.4141C42.697 43.6651 42.9683 43.7775 43.1683 43.9775C43.3684 44.1776 43.4807 44.4489 43.4807 44.7318C43.4807 45.0147 43.3684 45.286 43.1683 45.486C42.9683 45.6861 42.697 45.7985 42.4141 45.7985H36.0141C35.7312 45.7985 35.4599 45.6861 35.2598 45.486C35.0598 45.286 34.9474 45.0147 34.9474 44.7318V38.3318C34.9474 38.0489 35.0598 37.7776 35.2598 37.5775C35.4599 37.3775 35.7312 37.2651 36.0141 37.2651C36.297 37.2651 36.5683 37.3775 36.7683 37.5775C36.9684 37.7776 37.0807 38.0489 37.0807 38.3318V42.2678H37.085C38.3031 41.3462 39.7943 40.2241 41.0829 38.7691C42.6082 37.0561 43.7559 34.9825 43.7559 32.4331Z" fill="#7B7575"/>
                               </svg>
                           </div>
                           <div className={"text-center mt-4"}>
                               Bespoke production
                               and continuous updates
                           </div>
                       </article>
                   </section>
               </section>
               <section className={"px-20"}>
                   <div className="relative flex py-10 items-center">
                       <span className="flex-shrink mx-4 text-black text-2xl font-bold">Our success story</span>
                       <div className="flex-grow border-t border-gold"></div>
                   </div>
                   <section className={"flex justify-between items-center gap-20 mb-96"}>
                       <div className={"w-2/4"}>
                           <p className={"text-black mt-10"}>
                               "One of my leads (Sam from China) is a big fan of Brian Nash's work, and is
                               requesting a commission piece similar to Van Gogh's Dogs, but with his 2 dogs,
                               his wife, and himself sitting under the stars.
                               The artist asked for a reference photo of the back of the dogs (see attached
                               images). Little did I or the artist know that this was a surprise for Sam's wife, so
                               he had to trick her into taking the photos of the backs of their dogs, without
                               knowing what it was for!"
                           </p>
                           <div className={"flex gap-4 items-center my-20"}>
                               <div>
                                   <img src="/images/collectors.png" alt=""/>
                               </div>
                               <div className={"flex flex-col gap-4"}>
                                   <span className={"text-black font-bold"}>Philip</span>
                                   <span className={"text-gold"}>ART ADVISOR</span>
                               </div>
                           </div>
                       </div>
                       <div className={"w-2/4 relative flex justify-end"}>
                           <img src="/images/dream2.png" className={"h-423px w-4/5"} alt=""/>
                           <img src="/images/artwork5.png" className={"absolute bg-white  top-17rem right-27rem h-423px w-4/5 p-2 border-4 border-primary  "} alt=""/>
                       </div>
                   </section>
               </section>

               <section className={"bg-gold flex flex-col justify-center items-center py-10"}>
                   <span className={"text-black font-black font-bold text-2xl"}>
                       What are you waiting for?
                   </span>
                   <button className={"bg-secondary py-4 text-center w-96 mt-10 rounded "}>
                       REQUEST YOUR COMMISSION
                   </button>
               </section>
                <section className={"px-20"}>
                    <div className="relative flex py-10 items-center">
                        <span className="flex-shrink mx-4 text-black text-2xl font-bold">Some of our artists who would be delighted to work on commission!</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                </section>
               <section className={"grid grid-cols-2 gap-32 justify-between p-20"}>
                   <article>
                       <div className={"flex justify-center items-center gap-8"}>
                           <div className={"flex gap-8"}>
                               <div>
                                   <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                               </div>
                               <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                   <span className={"font-bold"}>Marie Manon Corbeil</span>
                                   <span>SPAIN</span>
                               </div>
                           </div>
                           <div>
                               <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                   Follow this artist
                               </button>
                           </div>
                       </div>
                       <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                       </div>

                   </article>
                   <article>
                       <div className={"flex justify-center items-center gap-8"}>
                           <div className={"flex gap-8"}>
                               <div>
                                   <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                               </div>
                               <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                   <span className={"font-bold"}>Marie Manon Corbeil</span>
                                   <span>SPAIN</span>
                               </div>
                           </div>
                           <div>
                               <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                   Follow this artist
                               </button>
                           </div>
                       </div>
                       <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                       </div>

                   </article>
                   <article>
                       <div className={"flex justify-center items-center gap-8"}>
                           <div className={"flex gap-8"}>
                               <div>
                                   <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                               </div>
                               <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                   <span className={"font-bold"}>Marie Manon Corbeil</span>
                                   <span>SPAIN</span>
                               </div>
                           </div>
                           <div>
                               <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                   Follow this artist
                               </button>
                           </div>
                       </div>
                       <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                       </div>

                   </article>
                   <article>
                       <div className={"flex justify-center items-center gap-8"}>
                           <div className={"flex gap-8"}>
                               <div>
                                   <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                               </div>
                               <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                   <span className={"font-bold"}>Marie Manon Corbeil</span>
                                   <span>SPAIN</span>
                               </div>
                           </div>
                           <div>
                               <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                   Follow this artist
                               </button>
                           </div>
                       </div>
                       <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                       </div>

                   </article>
                   <article>
                       <div className={"flex justify-center items-center gap-8"}>
                           <div className={"flex gap-8"}>
                               <div>
                                   <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                               </div>
                               <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                   <span className={"font-bold"}>Marie Manon Corbeil</span>
                                   <span>SPAIN</span>
                               </div>
                           </div>
                           <div>
                               <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                   Follow this artist
                               </button>
                           </div>
                       </div>
                       <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                       </div>

                   </article>
                   <article>
                       <div className={"flex justify-center items-center gap-8"}>
                           <div className={"flex gap-8"}>
                               <div>
                                   <img src="/images/simopnet.png" className={"w-28 h-28 rounded-full"} alt=""/>
                               </div>
                               <div className={"flex flex-col gap-y-3 text-black justify-center"}>
                                   <span className={"font-bold"}>Marie Manon Corbeil</span>
                                   <span>SPAIN</span>
                               </div>
                           </div>
                           <div>
                               <button className={"text-white bg-secondary rounded py-2 px-6"}>
                                   Follow this artist
                               </button>
                           </div>
                       </div>
                       <div id="tags" className={"grid grid-cols-4 gap-4 text-black mt-4"}>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Photoghrapher  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                           <span className={"border rounded-3xl  px-3 py-2 text-center"}> Painter  </span>
                       </div>

                   </article>
               </section>

           </HomeLayout>
           </>
    )
}

export default Dream;
