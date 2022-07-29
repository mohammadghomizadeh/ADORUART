import React from "react";
import {BsTelephoneFill} from "react-icons/bs"
function Footer(){
    return (
        <footer>
            <section id="subscript" className={"w-full bg-gold flex items-center justify-center py-8"}>
                <div className={"flex flex-col p-8 bg-white w-4/6 my-24 items-center gap-y-16 rounded"}>
                    <span className={"text-black text-3xl font-bold "}>
                        Subscribe to the newsletter
                    </span>
                    <div className={"flex justify-center items-center w-full gap-6"}>
                        <div className={"w-70%  "}>
                            <input type="text" placeholder={"Email Address..."} className={"w-full rounded border border-gray-400 py-6 px-6"}/>
                        </div>
                        <div className={"w-30% "}>
                            <button className={"text-white font-bold text-xl bg-black w-full p-6 rounded"}>SEND</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="press" className={"px-20 py-10"}>
                <div className={"text-title flex items-center justify-center"}>
                    <span className={"text-2xl font-bold"}>
                        IN THE PRESS
                    </span>
                </div>
                <div className={"flex gap-24  mt-8"}>
                    <a href=""><img src="/images/forbes.png" alt=""/></a>
                    <a href=""><img src="/images/boston.png" alt=""/></a>
                    <a href=""><img src="/images/forbes.png" alt=""/></a>
                    <a href=""><img src="/images/boston.png" alt=""/></a>
                    <a href=""><img src="/images/forbes.png" alt=""/></a>
                    <a href=""><img src="/images/boston.png" alt=""/></a>
                    <a href=""><img src="/images/forbes.png" alt=""/></a>
                    <a href=""><img src="/images/boston.png" alt=""/></a>
                </div>
            </section>
            <section id="selected" className={"w-full bg-nft flex items-center justify-between font-Manrope text-white px-20 py-8"}>
               <article className={"flex flex-col justify-center items-center"}>
                   <span><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10.5V14H33.25V40.25H22.477C21.6965 37.2418 18.991 35 15.75 35C12.509 35 9.8035 37.2418 9.023 40.25H7V31.5H3.5V43.75H9.023C9.8035 46.7583 12.509 49 15.75 49C18.991 49 21.6965 46.7583 22.477 43.75H37.023C37.8035 46.7583 40.509 49 43.75 49C46.991 49 49.6965 46.7583 50.477 43.75H56V29.477L55.8898 29.2023L52.3898 18.7023L52.01 17.5H36.75V10.5H0ZM1.75 17.5V21H17.5V17.5H1.75ZM36.75 21H49.4917L52.5 29.9688V40.25H50.477C49.6965 37.2418 46.991 35 43.75 35C40.509 35 37.8035 37.2418 37.023 40.25H36.75V21ZM3.5 24.5V28H14V24.5H3.5ZM15.75 38.5C17.7048 38.5 19.25 40.0452 19.25 42C19.25 43.9548 17.7048 45.5 15.75 45.5C13.7952 45.5 12.25 43.9548 12.25 42C12.25 40.0452 13.7952 38.5 15.75 38.5ZM43.75 38.5C45.7048 38.5 47.25 40.0452 47.25 42C47.25 43.9548 45.7048 45.5 43.75 45.5C41.7952 45.5 40.25 43.9548 40.25 42C40.25 40.0452 41.7952 38.5 43.75 38.5Z" fill="white"/>
</svg>
</span>
                   <span className={"text-2xl font-bold mt-6"}>Selected artists</span>
                   <span className={"text-xl"}>from around the world</span>
               </article>
               <article className={"flex flex-col justify-center items-center"}>
                   <span><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.125 6.125H7.875C6.90703 6.125 6.125 6.90703 6.125 7.875V48.125C6.125 49.093 6.90703 49.875 7.875 49.875H27.5625C27.8031 49.875 28 49.6781 28 49.4375V46.375C28 46.1344 27.8031 45.9375 27.5625 45.9375H10.0625V10.0625H45.9375V27.5625C45.9375 27.8031 46.1344 28 46.375 28H49.4375C49.6781 28 49.875 27.8031 49.875 27.5625V7.875C49.875 6.90703 49.093 6.125 48.125 6.125ZM35.7273 32.7797L38.582 29.925C38.6399 29.8669 38.6802 29.7937 38.6985 29.7138C38.7168 29.6339 38.7123 29.5504 38.6855 29.4729C38.6588 29.3955 38.6108 29.327 38.547 29.2755C38.4833 29.2239 38.4064 29.1913 38.325 29.1812L28.5141 28.0328C28.2352 28 27.9945 28.2352 28.0273 28.5195L29.1758 38.3305C29.2195 38.6914 29.6625 38.8445 29.9195 38.5875L32.7852 35.7219L46.7961 49.7328C46.9656 49.9023 47.2445 49.9023 47.4141 49.7328L49.7328 47.4141C49.9023 47.2445 49.9023 46.9656 49.7328 46.7961L35.7273 32.7797Z" fill="white"/>
</svg>
</span>
                   <span className={"text-2xl font-bold mt-6"}>Safe shipping globally</span>
                   <span className={"text-xl"}>by professionals</span>
               </article>
               <article className={"flex flex-col justify-center items-center"}>
                   <span><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.25 22.75V29.75C40.25 30.2141 40.0656 30.6593 39.7374 30.9874C39.4092 31.3156 38.9641 31.5 38.5 31.5H21.7219L23.9969 33.7531C24.3255 34.0849 24.5098 34.533 24.5098 35C24.5098 35.467 24.3255 35.9151 23.9969 36.2469C23.6624 36.5703 23.2153 36.7511 22.75 36.7511C22.2847 36.7511 21.8376 36.5703 21.5031 36.2469L16.2531 30.9969C15.9245 30.6651 15.7402 30.217 15.7402 29.75C15.7402 29.283 15.9245 28.8349 16.2531 28.5031L21.5031 23.2531C21.8431 22.9741 22.2748 22.8315 22.7141 22.853C23.1535 22.8746 23.5691 23.0588 23.8801 23.3699C24.1912 23.6809 24.3754 24.0965 24.397 24.5359C24.4185 24.9752 24.2759 25.4069 23.9969 25.7469L21.7219 28H36.75V22.75C36.75 22.2859 36.9344 21.8408 37.2626 21.5126C37.5908 21.1844 38.0359 21 38.5 21C38.9641 21 39.4092 21.1844 39.7374 21.5126C40.0656 21.8408 40.25 22.2859 40.25 22.75ZM50.75 12.25V43.75C50.75 44.6783 50.3812 45.5685 49.7249 46.2249C49.0685 46.8812 48.1783 47.25 47.25 47.25H8.75C7.82174 47.25 6.9315 46.8812 6.27513 46.2249C5.61875 45.5685 5.25 44.6783 5.25 43.75V12.25C5.25 11.3217 5.61875 10.4315 6.27513 9.77513C6.9315 9.11875 7.82174 8.75 8.75 8.75H47.25C48.1783 8.75 49.0685 9.11875 49.7249 9.77513C50.3812 10.4315 50.75 11.3217 50.75 12.25ZM47.25 43.75V12.25H8.75V43.75H47.25Z" fill="white"/>
</svg>
</span>
                   <span className={"text-2xl font-bold mt-6"}>Free returns</span>
                   <span className={"text-xl"}>within 14 days after delivery.</span>
               </article>
               <article className={"flex flex-col justify-center items-center"}>
                   <span>
                       <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5 29.0325L19.9675 24.5L17.5 26.9675L24.5 33.9675L38.5 19.9675L36.0325 17.5L24.5 29.0325Z" fill="white"/>
<path d="M28 52.5L17.192 46.7373C14.1108 45.098 11.5342 42.6507 9.73862 39.658C7.94304 36.6653 6.9963 33.2401 7.00001 29.75V7C7.00094 6.07203 7.36998 5.18233 8.02616 4.52615C8.68234 3.86997 9.57204 3.50093 10.5 3.5H45.5C46.428 3.50093 47.3177 3.86997 47.9739 4.52615C48.63 5.18233 48.9991 6.07203 49 7V29.75C49.0037 33.2401 48.057 36.6653 46.2614 39.658C44.4658 42.6507 41.8892 45.098 38.808 46.7373L28 52.5ZM10.5 7V29.75C10.4971 32.6057 11.2719 35.4082 12.7413 37.8568C14.2108 40.3054 16.3192 42.3076 18.8405 43.6485L28 48.5327L37.1595 43.6503C39.681 42.3092 41.7897 40.3067 43.2591 37.8578C44.7285 35.4089 45.5032 32.606 45.5 29.75V7H10.5Z" fill="white"/>
</svg>

                       </span>
                   <span className={"text-2xl font-bold mt-6"}>Secure payments</span>
                   <span className={"text-xl"}>by credit card or bank transfer</span>
               </article>
            </section>
            <section id="paypal" className={"w-full flex items-center justify-center gap-10 font-Manrope text-white px-20 py-8"}>
               <article className={"flex flex-col  "}>
                   <span>
                       <img src="/images/pay/visa.svg" alt=""/>
                   </span>
               </article>
               <article className={"flex flex-col "}>
                   <span> <img src="/images/pay/visa.svg" alt=""/></span>
               </article>
               <article className={"flex flex-col justify-center items-center"}>
                   <span> <img src="/images/pay/visa.svg" alt=""/></span>
               </article>
               <article className={"flex flex-col justify-center items-center"}>
                   <span><img src="/images/pay/visa.svg" alt=""/></span>
               </article>
                <article className={"flex flex-col justify-center items-center"}>
                    <span><img src="/images/pay/visa.svg" alt=""/></span>
                </article>
                <article className={"flex flex-col justify-center items-center"}>
                    <span><img src="/images/pay/visa.svg" alt=""/></span>
                </article>
            </section>
            <section id="ADORUART" className={"w-full bg-primary flex flex-col items-left justify-between font-Manrope text-white px-20 py-8"}>
                <span className={"font-bold text-xl"}>
                    Art gallery online: buy original art on ADORUART
                </span>
                <p className={"mt-2"}>
                    Buying art made easy: SINGULART is an online gallery for contemporary art that allows collectors and art lovers alike to buy original works of art in complete security from nationally
                    recognized artists. From abstract canvases, figurative paintings, drawings or even street art and graffiti, we offer an international selection of work in a variety of styles and techniques.
                    SINGULART is also helping emerging artists from around the globe to sell their works to art lovers.
                </p>
                <span className={"font-bold text-xl mt-4"}>
                    Art for sale online: photographs and paintings can be purchased with guaranteed quality and ease
                </span>
                <p className={"mt-2"}>
                    Why buy photographs or paintings online? Because we carefully select artists from around the world using our rigorous guidelines: number of exhibitions, artist residencies, awards and
                    inclusion in public and private collections. We make the whole experience easy by taking care of the delivery, the customs and the framing of the work.
                </p>
                <span  className={"font-bold text-xl mt-4"}>
                    SINGULART, an online art gallery that brings contemporary artworks to everyone
                </span>
                <p className={"mt-2"}>
                    SINGULART believes that the digital world is an incredible tool for buying art, spreading art around the world and allowing people to purchase pieces that they love, whether it is by an
                    emerging African artist or a more established contemporary American painter or even a rising star of street art.
                </p>
            </section>
            <section id="menus" className={"w-full bg-title md:flex items-left md:gap-28 font-Manrope text-white px-20 py-8"}>
                <div>
                    <span className={"text-gold font-bold text-xl"}> Customer service</span>
                    <ul className={"flex flex-col gap-y-2 mt-4"}>
                        <li>Contact us</li>
                        <li>Legal notices</li>
                        <li>General Terms and Conditions</li>
                        <li>Customer testimonials</li>
                        <li>Offer a Gift Card</li>
                        <li>Free art advisory</li>
                        <li>Commission an artist</li>
                        <li>My profile</li>
                        <li>Art for Offices</li>
                        <li>Art for Interior Designers</li>


                    </ul>
                </div>
                <div>
                    <span className={"text-gold font-bold text-xl"}> Who are we?</span>
                    <ul className={"flex flex-col gap-y-2 mt-4"}>
                        <li>About us</li>
                        <li>Our artists</li>
                        <li>Art Magazine</li>
                        <li>The team</li>
                        <li>Our selection criteria</li>
                        <li>FAQ</li>
                        <li>Jobs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <span className={"text-gold font-bold text-xl"}> Are you an artist?</span>
                    <ul className={"flex flex-col gap-y-2 mt-4"}>
                        <li>How to join SINGULART?</li>
                        <li>Log in for artists (SINGULART artists only)</li>
                        <li>Art Galleries</li>
                        <li className={"flex text-gold gap-2 items-center mt-4"}>
                            <span><BsTelephoneFill/></span>
                            <span>+123-123456789</span>
                        </li>
                        <li className={"mt-4"}>
                            <ul className={"flex gap-4"}>
                                <li>
                                    <img src="/images/facebook.png" alt=""/>
                                </li>
                                <li><img src="/images/instagram.png" alt=""/></li>
                                <li><img src="/images/telegram.png" alt=""/></li>
                                <li><img src="/images/twitter.png" alt=""/></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="copy" className={"w-full bg-white md:flex items-center justify-center text-white px-20 py-8"}>
                <div>
                    <span className={"text-black font-bold text-xl"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                </div>
            </section>
        </footer>
    )
}
export default Footer;
