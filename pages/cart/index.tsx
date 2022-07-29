import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {ImEqualizer} from "react-icons/im"
import {BsPinterest,BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import Link from "next/link";
import {GrReturn,GrSort} from "react-icons/gr";
function Cart()  {

    return (
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







            <section id="CartItem" className={"px-20"}>
                <article className={"my-8 border rounded"}>
                    <section className={"flex justify-between  py-10  px-10"}>
                        <div className={"flex flex-col gap-y-6"}>
                            <div className={"flex gap-4"}>
                                <div>
                                    <img src="/images/slide1.png" className={"w-168px h-102px p-1 border-2 border-secondary rounded"} alt=""/>
                                </div>
                                <div className={"flex flex-col"}>
                                <span className={"text-gold font-bold"}>
                                    Artwork Name
                                </span>
                                    <span className={"text-title"}>
                                    Acrylic on Canvas
                                </span>
                                    <span className={"text-title"}>
                                    Edith Simonnet, Germany, 2022
                                </span>
                                    <div className={"flex gap-3"}>
                                        <span className={"text-nft"}>Size:</span>
                                        <span className={"black"}>50 x 75 cm</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"text-black flex gap-4"}>
                                <input type="checkbox"/>
                                <span>This artwork is a gift. I would like to add a personal message.</span>
                            </div>
                        </div>
                        <div className={"flex gap-6"}>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25.8461 11.6266C26.3968 11.6719 26.8075 12.1533 26.7635 12.7039C26.7555 12.7946 26.0328 21.7426 25.6168 25.4959C25.3581 27.8253 23.8195 29.2426 21.4968 29.2853C19.7195 29.3159 18.0048 29.3333 16.3288 29.3333C14.5221 29.3333 12.7608 29.3133 11.0181 29.2773C8.7888 29.2333 7.24613 27.7879 6.99413 25.5053C6.57413 21.7186 5.85547 12.7933 5.8488 12.7039C5.80347 12.1533 6.21413 11.6706 6.7648 11.6266C7.30747 11.6119 7.79813 11.9933 7.84213 12.5426C7.84639 12.6005 8.14019 16.2453 8.46035 19.8515L8.52465 20.5712C8.68591 22.3637 8.84937 24.0861 8.98213 25.2853C9.1248 26.5826 9.8248 27.2519 11.0595 27.2773C14.3928 27.3479 17.7941 27.3519 21.4608 27.2853C22.7728 27.2599 23.4821 26.6039 23.6288 25.2759C24.0421 21.5506 24.7621 12.6333 24.7701 12.5426C24.8141 11.9933 25.3008 11.6093 25.8461 11.6266ZM19.1272 2.66699C20.3512 2.66699 21.4272 3.49233 21.7432 4.67499L22.0819 6.35633C22.1913 6.90749 22.675 7.31 23.235 7.31884L27.6107 7.31899C28.1627 7.31899 28.6107 7.76699 28.6107 8.31899C28.6107 8.87099 28.1627 9.31899 27.6107 9.31899L23.2741 9.31879C23.2674 9.31893 23.2606 9.31899 23.2539 9.31899L23.2213 9.31766L9.38882 9.31883C9.37807 9.31894 9.36731 9.31899 9.35653 9.31899L9.336 9.31766L5 9.31899C4.448 9.31899 4 8.87099 4 8.31899C4 7.76699 4.448 7.31899 5 7.31899L9.37467 7.31766L9.50936 7.30913C10.0111 7.24404 10.428 6.86299 10.5299 6.35633L10.8539 4.73499C11.1832 3.49233 12.2592 2.66699 13.4832 2.66699H19.1272ZM19.1272 4.66699H13.4832C13.1632 4.66699 12.8819 4.88166 12.8005 5.18966L12.4899 6.74966C12.4504 6.94725 12.3929 7.13768 12.3193 7.31935H20.2915C20.2178 7.13768 20.1602 6.94725 20.1205 6.74966L19.7965 5.12833C19.7285 4.88166 19.4472 4.66699 19.1272 4.66699Z" fill="#7B7575"/>
                                    </svg>
                            </span>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.3146 5.38549C18.4826 4.01482 21.3626 3.63616 23.8506 4.43349C29.2626 6.17882 30.9426 12.0788 29.4399 16.7735C27.1212 24.1468 17.2186 29.6468 16.7986 29.8775C16.6492 29.9602 16.4839 30.0015 16.3186 30.0015C16.1532 30.0015 15.9892 29.9615 15.8399 29.8802C15.4226 29.6522 5.59191 24.2335 3.19591 16.7748C3.19458 16.7748 3.19458 16.7735 3.19458 16.7735C1.69058 12.0775 3.36524 6.17616 8.77191 4.43349C11.3106 3.61216 14.0772 3.97349 16.3146 5.38549ZM9.38524 6.33749C5.01058 7.74816 3.91191 12.4535 5.09991 16.1642C6.96924 21.9802 14.3546 26.6828 16.3172 27.8468C18.2866 26.6708 25.7252 21.9162 27.5346 16.1695C28.7226 12.4548 27.6199 7.74949 23.2386 6.33749C21.1159 5.65616 18.6399 6.07082 16.9306 7.39349C16.5732 7.66816 16.0772 7.67349 15.7172 7.40149C13.9066 6.04016 11.5412 5.64149 9.38524 6.33749ZM21.9586 8.98536C23.7759 9.57336 25.0492 11.1827 25.2052 13.0854C25.2492 13.636 24.8399 14.1187 24.2892 14.1627C24.2612 14.1654 24.2346 14.1667 24.2066 14.1667C23.6906 14.1667 23.2532 13.7707 23.2106 13.248C23.1226 12.152 22.3892 11.2267 21.3452 10.8894C20.8186 10.7187 20.5306 10.1547 20.6999 9.63069C20.8719 9.10536 21.4306 8.82002 21.9586 8.98536Z" fill="#7B7575"/>
                                </svg>
                            </span>
                        </div>
                    </section>
                    <footer className={"bg-editbg py-4 px-10 w-full flex justify-between"}>
                        <div className={"flex justify-between gap-24"}>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>
                                    Shipping from:
                                </span>
                                <span className={"text-black"}>
                                    Australia
                                </span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>
                                    Delivery costs:
                                </span>
                                <span className={"text-black"}>
                                    200$
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className={"text-nft"}>TOTAL:</span>
                            <span className={"text-black font-bold"}>200$</span>
                        </div>
                    </footer>
                </article>
                <article className={"my-8 border rounded"}>
                    <section className={"flex justify-between  py-10  px-10"}>
                        <div className={"flex flex-col gap-y-6"}>
                            <div className={"flex gap-4"}>
                                <div>
                                    <img src="/images/slide1.png" className={"w-168px h-102px p-1 border-2 border-secondary rounded"} alt=""/>
                                </div>
                                <div className={"flex flex-col"}>
                                <span className={"text-gold font-bold"}>
                                    Artwork Name
                                </span>
                                    <span className={"text-title"}>
                                    Acrylic on Canvas
                                </span>
                                    <span className={"text-title"}>
                                    Edith Simonnet, Germany, 2022
                                </span>
                                    <div className={"flex gap-3"}>
                                        <span className={"text-nft"}>Size:</span>
                                        <span className={"black"}>50 x 75 cm</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"text-black flex gap-4"}>
                                <input type="checkbox"/>
                                <span>This artwork is a gift. I would like to add a personal message.</span>
                            </div>
                        </div>
                        <div className={"flex gap-6"}>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25.8461 11.6266C26.3968 11.6719 26.8075 12.1533 26.7635 12.7039C26.7555 12.7946 26.0328 21.7426 25.6168 25.4959C25.3581 27.8253 23.8195 29.2426 21.4968 29.2853C19.7195 29.3159 18.0048 29.3333 16.3288 29.3333C14.5221 29.3333 12.7608 29.3133 11.0181 29.2773C8.7888 29.2333 7.24613 27.7879 6.99413 25.5053C6.57413 21.7186 5.85547 12.7933 5.8488 12.7039C5.80347 12.1533 6.21413 11.6706 6.7648 11.6266C7.30747 11.6119 7.79813 11.9933 7.84213 12.5426C7.84639 12.6005 8.14019 16.2453 8.46035 19.8515L8.52465 20.5712C8.68591 22.3637 8.84937 24.0861 8.98213 25.2853C9.1248 26.5826 9.8248 27.2519 11.0595 27.2773C14.3928 27.3479 17.7941 27.3519 21.4608 27.2853C22.7728 27.2599 23.4821 26.6039 23.6288 25.2759C24.0421 21.5506 24.7621 12.6333 24.7701 12.5426C24.8141 11.9933 25.3008 11.6093 25.8461 11.6266ZM19.1272 2.66699C20.3512 2.66699 21.4272 3.49233 21.7432 4.67499L22.0819 6.35633C22.1913 6.90749 22.675 7.31 23.235 7.31884L27.6107 7.31899C28.1627 7.31899 28.6107 7.76699 28.6107 8.31899C28.6107 8.87099 28.1627 9.31899 27.6107 9.31899L23.2741 9.31879C23.2674 9.31893 23.2606 9.31899 23.2539 9.31899L23.2213 9.31766L9.38882 9.31883C9.37807 9.31894 9.36731 9.31899 9.35653 9.31899L9.336 9.31766L5 9.31899C4.448 9.31899 4 8.87099 4 8.31899C4 7.76699 4.448 7.31899 5 7.31899L9.37467 7.31766L9.50936 7.30913C10.0111 7.24404 10.428 6.86299 10.5299 6.35633L10.8539 4.73499C11.1832 3.49233 12.2592 2.66699 13.4832 2.66699H19.1272ZM19.1272 4.66699H13.4832C13.1632 4.66699 12.8819 4.88166 12.8005 5.18966L12.4899 6.74966C12.4504 6.94725 12.3929 7.13768 12.3193 7.31935H20.2915C20.2178 7.13768 20.1602 6.94725 20.1205 6.74966L19.7965 5.12833C19.7285 4.88166 19.4472 4.66699 19.1272 4.66699Z" fill="#7B7575"/>
                                    </svg>
                            </span>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.3146 5.38549C18.4826 4.01482 21.3626 3.63616 23.8506 4.43349C29.2626 6.17882 30.9426 12.0788 29.4399 16.7735C27.1212 24.1468 17.2186 29.6468 16.7986 29.8775C16.6492 29.9602 16.4839 30.0015 16.3186 30.0015C16.1532 30.0015 15.9892 29.9615 15.8399 29.8802C15.4226 29.6522 5.59191 24.2335 3.19591 16.7748C3.19458 16.7748 3.19458 16.7735 3.19458 16.7735C1.69058 12.0775 3.36524 6.17616 8.77191 4.43349C11.3106 3.61216 14.0772 3.97349 16.3146 5.38549ZM9.38524 6.33749C5.01058 7.74816 3.91191 12.4535 5.09991 16.1642C6.96924 21.9802 14.3546 26.6828 16.3172 27.8468C18.2866 26.6708 25.7252 21.9162 27.5346 16.1695C28.7226 12.4548 27.6199 7.74949 23.2386 6.33749C21.1159 5.65616 18.6399 6.07082 16.9306 7.39349C16.5732 7.66816 16.0772 7.67349 15.7172 7.40149C13.9066 6.04016 11.5412 5.64149 9.38524 6.33749ZM21.9586 8.98536C23.7759 9.57336 25.0492 11.1827 25.2052 13.0854C25.2492 13.636 24.8399 14.1187 24.2892 14.1627C24.2612 14.1654 24.2346 14.1667 24.2066 14.1667C23.6906 14.1667 23.2532 13.7707 23.2106 13.248C23.1226 12.152 22.3892 11.2267 21.3452 10.8894C20.8186 10.7187 20.5306 10.1547 20.6999 9.63069C20.8719 9.10536 21.4306 8.82002 21.9586 8.98536Z" fill="#7B7575"/>
                                </svg>
                            </span>
                        </div>
                    </section>
                    <footer className={"bg-editbg py-4 px-10 w-full flex justify-between"}>
                        <div className={"flex justify-between gap-24"}>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>
                                    Shipping from:
                                </span>
                                <span className={"text-black"}>
                                    Australia
                                </span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>
                                    Delivery costs:
                                </span>
                                <span className={"text-black"}>
                                    200$
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className={"text-nft"}>TOTAL:</span>
                            <span className={"text-black font-bold"}>200$</span>
                        </div>
                    </footer>
                </article>
                <article className={"my-8 border rounded"}>
                    <section className={"flex justify-between  py-10  px-10"}>
                        <div className={"flex flex-col gap-y-6"}>
                            <div className={"flex gap-4"}>
                                <div>
                                    <img src="/images/slide1.png" className={"w-168px h-102px p-1 border-2 border-secondary rounded"} alt=""/>
                                </div>
                                <div className={"flex flex-col"}>
                                <span className={"text-gold font-bold"}>
                                    Artwork Name
                                </span>
                                    <span className={"text-title"}>
                                    Acrylic on Canvas
                                </span>
                                    <span className={"text-title"}>
                                    Edith Simonnet, Germany, 2022
                                </span>
                                    <div className={"flex gap-3"}>
                                        <span className={"text-nft"}>Size:</span>
                                        <span className={"black"}>50 x 75 cm</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"text-black flex gap-4"}>
                                <input type="checkbox"/>
                                <span>This artwork is a gift. I would like to add a personal message.</span>
                            </div>
                        </div>
                        <div className={"flex gap-6"}>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25.8461 11.6266C26.3968 11.6719 26.8075 12.1533 26.7635 12.7039C26.7555 12.7946 26.0328 21.7426 25.6168 25.4959C25.3581 27.8253 23.8195 29.2426 21.4968 29.2853C19.7195 29.3159 18.0048 29.3333 16.3288 29.3333C14.5221 29.3333 12.7608 29.3133 11.0181 29.2773C8.7888 29.2333 7.24613 27.7879 6.99413 25.5053C6.57413 21.7186 5.85547 12.7933 5.8488 12.7039C5.80347 12.1533 6.21413 11.6706 6.7648 11.6266C7.30747 11.6119 7.79813 11.9933 7.84213 12.5426C7.84639 12.6005 8.14019 16.2453 8.46035 19.8515L8.52465 20.5712C8.68591 22.3637 8.84937 24.0861 8.98213 25.2853C9.1248 26.5826 9.8248 27.2519 11.0595 27.2773C14.3928 27.3479 17.7941 27.3519 21.4608 27.2853C22.7728 27.2599 23.4821 26.6039 23.6288 25.2759C24.0421 21.5506 24.7621 12.6333 24.7701 12.5426C24.8141 11.9933 25.3008 11.6093 25.8461 11.6266ZM19.1272 2.66699C20.3512 2.66699 21.4272 3.49233 21.7432 4.67499L22.0819 6.35633C22.1913 6.90749 22.675 7.31 23.235 7.31884L27.6107 7.31899C28.1627 7.31899 28.6107 7.76699 28.6107 8.31899C28.6107 8.87099 28.1627 9.31899 27.6107 9.31899L23.2741 9.31879C23.2674 9.31893 23.2606 9.31899 23.2539 9.31899L23.2213 9.31766L9.38882 9.31883C9.37807 9.31894 9.36731 9.31899 9.35653 9.31899L9.336 9.31766L5 9.31899C4.448 9.31899 4 8.87099 4 8.31899C4 7.76699 4.448 7.31899 5 7.31899L9.37467 7.31766L9.50936 7.30913C10.0111 7.24404 10.428 6.86299 10.5299 6.35633L10.8539 4.73499C11.1832 3.49233 12.2592 2.66699 13.4832 2.66699H19.1272ZM19.1272 4.66699H13.4832C13.1632 4.66699 12.8819 4.88166 12.8005 5.18966L12.4899 6.74966C12.4504 6.94725 12.3929 7.13768 12.3193 7.31935H20.2915C20.2178 7.13768 20.1602 6.94725 20.1205 6.74966L19.7965 5.12833C19.7285 4.88166 19.4472 4.66699 19.1272 4.66699Z" fill="#7B7575"/>
                                    </svg>
                            </span>
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.3146 5.38549C18.4826 4.01482 21.3626 3.63616 23.8506 4.43349C29.2626 6.17882 30.9426 12.0788 29.4399 16.7735C27.1212 24.1468 17.2186 29.6468 16.7986 29.8775C16.6492 29.9602 16.4839 30.0015 16.3186 30.0015C16.1532 30.0015 15.9892 29.9615 15.8399 29.8802C15.4226 29.6522 5.59191 24.2335 3.19591 16.7748C3.19458 16.7748 3.19458 16.7735 3.19458 16.7735C1.69058 12.0775 3.36524 6.17616 8.77191 4.43349C11.3106 3.61216 14.0772 3.97349 16.3146 5.38549ZM9.38524 6.33749C5.01058 7.74816 3.91191 12.4535 5.09991 16.1642C6.96924 21.9802 14.3546 26.6828 16.3172 27.8468C18.2866 26.6708 25.7252 21.9162 27.5346 16.1695C28.7226 12.4548 27.6199 7.74949 23.2386 6.33749C21.1159 5.65616 18.6399 6.07082 16.9306 7.39349C16.5732 7.66816 16.0772 7.67349 15.7172 7.40149C13.9066 6.04016 11.5412 5.64149 9.38524 6.33749ZM21.9586 8.98536C23.7759 9.57336 25.0492 11.1827 25.2052 13.0854C25.2492 13.636 24.8399 14.1187 24.2892 14.1627C24.2612 14.1654 24.2346 14.1667 24.2066 14.1667C23.6906 14.1667 23.2532 13.7707 23.2106 13.248C23.1226 12.152 22.3892 11.2267 21.3452 10.8894C20.8186 10.7187 20.5306 10.1547 20.6999 9.63069C20.8719 9.10536 21.4306 8.82002 21.9586 8.98536Z" fill="#7B7575"/>
                                </svg>
                            </span>
                        </div>
                    </section>
                    <footer className={"bg-editbg py-4 px-10 w-full flex justify-between"}>
                        <div className={"flex justify-between gap-24"}>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>
                                    Shipping from:
                                </span>
                                <span className={"text-black"}>
                                    Australia
                                </span>
                            </div>
                            <div className={"flex gap-3"}>
                                <span className={"text-nft"}>
                                    Delivery costs:
                                </span>
                                <span className={"text-black"}>
                                    200$
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className={"text-nft"}>TOTAL:</span>
                            <span className={"text-black font-bold"}>200$</span>
                        </div>
                    </footer>
                </article>
            </section>
            <section className={"px-20 my-8"}>
                <section className={"border rounded flex justify-start gap-24 items-center py-10 px-10 "}>
                    <span className={"text-black font-bold"}>
                        Do you have a VIP access code?
                    </span>
                    <input type="text" placeholder={"VIP access code"} className={"border-gray-300 rounded border px-4 py-4 w-536px placeholder:text-nft text-black"}/>

                </section>
            </section>
            <section className={"px-20 my-10 "}>
                <section className={"bg-editbg rounded py-10 px-10 flex justify-between items-center"}>
                    <div className={"flex flex-col gap-4"}>
                        <span className={"text-black text-sm"}>TOTAL:</span>
                        <span className={"text-black font-bold text-lg"}>50000$</span>
                    </div>
                    <div>
                        <button className={"bg-secondary py-4 px-8 rounded text-white"}>CONTINUE</button>
                    </div>
                </section>
            </section>
        </HomeLayout>
    )
}

export default Cart;
