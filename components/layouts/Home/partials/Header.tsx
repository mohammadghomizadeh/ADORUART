import React, {ReactNode, useState,useEffect} from "react";
import dynamic from "next/dynamic";
import HeaderStyle from "@/styles/components/Header.module.scss";
import {Logo} from "@/components/SVG/Logo";
import {SearchIcon} from "@/components/SVG/SearchIcon";
import {BasketIcon} from "@/components/SVG/BasketIcon";
import {HeartIcon} from "@/components/SVG/HeartIcon";
import {UserIcon} from "@/components/SVG/UserIcon";
import {Down} from "@/components/SVG/Arrows"
import Link from "next/link";
import {MenuArtwork,MenuDesign} from "@/components/base/Header/Menu";
import { FiAlignJustify } from 'react-icons/fi';
import {ModalLogin} from "@/components/modal/login";
import {ModalRegister} from "@/components/modal/register";
import {ModalCreateAccount} from "@/components/modal/createAccount";
import {CHECK_USER_AUHTONTICATION} from "../../../../hooks/useApi"

interface Props {
    menus?: any;
    show?:boolean;
}
function Header({menus,show}:Props)  {
const [auth,setAuth] = useState(false)
const [loginToggle,setLoginToggle] = useState(false)
const [registerToggle,setRegisterToggle] = useState(false)
const [searchToggle,setSearchToggle] = useState(false)
const [createAccountToggle,setCreateAccountToggle] = useState(false)




    const loginCloseModal = () =>{
        setLoginToggle(!loginToggle)
    }
    const registerCloseModal = () =>{
        setRegisterToggle(!registerToggle)
    }

    const createCloseModal = () =>{
        setCreateAccountToggle(!createAccountToggle)
    }
    const handlerLogin = () =>{
        setRegisterToggle(!registerToggle);
        setCreateAccountToggle(!createAccountToggle);
        setLoginToggle(!loginToggle);
    }
    const handlerCreateAccount = () =>{
        setLoginToggle(false);
        setRegisterToggle(false);
        setCreateAccountToggle(true);
    }
    const handlerloginModalOpen = () =>{
        setRegisterToggle(false);
        setCreateAccountToggle(false);
        setLoginToggle(true);
    }
    useEffect(()=>{
        if(localStorage.getItem("__to_ken")){
        //     CHECK_USER_AUHTONTICATION(localStorage.getItem("__to_ken")).then((res:any)=>{
        //         if(res.data == 200){
        //             setAuth(true);
        //         }else{
        //             setAuth(false);
        //         }
        // })
        }else{
            setAuth(false);
        }
          
    },[])





    return (
        <>

            {
                searchToggle ? (
                    <section id="search" className={"bg-menubg flex items-center px-10 py-4"}>
                <span>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M41.42 38.58L34.62 31.8C36.814 29.0049 38.0044 25.5533 38 22C38 18.8355 37.0616 15.7421 35.3035 13.1109C33.5454 10.4797 31.0466 8.42894 28.1229 7.21793C25.1993 6.00693 21.9823 5.69008 18.8786 6.30744C15.7749 6.92481 12.9239 8.44866 10.6863 10.6863C8.44866 12.9239 6.92481 15.7749 6.30744 18.8786C5.69008 21.9823 6.00693 25.1993 7.21793 28.1229C8.42894 31.0466 10.4797 33.5454 13.1109 35.3035C15.7421 37.0616 18.8355 38 22 38C25.5533 38.0044 29.0049 36.814 31.8 34.62L38.58 41.42C38.7659 41.6075 38.9871 41.7563 39.2309 41.8578C39.4746 41.9593 39.736 42.0116 40 42.0116C40.264 42.0116 40.5254 41.9593 40.7692 41.8578C41.0129 41.7563 41.2341 41.6075 41.42 41.42C41.6075 41.2341 41.7563 41.0129 41.8578 40.7692C41.9593 40.5254 42.0116 40.264 42.0116 40C42.0116 39.736 41.9593 39.4746 41.8578 39.2309C41.7563 38.9871 41.6075 38.7659 41.42 38.58ZM10 22C10 19.6266 10.7038 17.3066 12.0224 15.3332C13.3409 13.3598 15.2151 11.8217 17.4078 10.9135C19.6005 10.0052 22.0133 9.76756 24.3411 10.2306C26.6689 10.6936 28.8071 11.8365 30.4853 13.5147C32.1635 15.193 33.3064 17.3312 33.7694 19.6589C34.2325 21.9867 33.9948 24.3995 33.0866 26.5922C32.1783 28.7849 30.6402 30.6591 28.6669 31.9776C26.6935 33.2962 24.3734 34 22 34C18.8174 34 15.7652 32.7357 13.5147 30.4853C11.2643 28.2349 10 25.1826 10 22Z" fill="#3A3A3A"/>
                    </svg>
                </span>
                        <input type="text" placeholder={"Type your search here..."} className={"!outline-none w-full py-4 px-6 bg-menubg text-black "}/>
                <span onClick={()=>setSearchToggle(!searchToggle)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8799 16.0001L23.6133 10.2801C23.8643 10.029 24.0054 9.68849 24.0054 9.33342C24.0054 8.97835 23.8643 8.63782 23.6133 8.38675C23.3622 8.13568 23.0217 7.99463 22.6666 7.99463C22.3115 7.99463 21.971 8.13568 21.7199 8.38675L15.9999 14.1201L10.2799 8.38675C10.0288 8.13568 9.68832 7.99463 9.33325 7.99463C8.97818 7.99463 8.63766 8.13568 8.38659 8.38675C8.13551 8.63782 7.99446 8.97835 7.99446 9.33342C7.99446 9.68849 8.13551 10.029 8.38659 10.2801L14.1199 16.0001L8.38659 21.7201C8.26161 21.844 8.16242 21.9915 8.09473 22.154C8.02704 22.3165 7.99219 22.4907 7.99219 22.6667C7.99219 22.8428 8.02704 23.017 8.09473 23.1795C8.16242 23.342 8.26161 23.4895 8.38659 23.6134C8.51054 23.7384 8.658 23.8376 8.82048 23.9053C8.98296 23.973 9.15724 24.0078 9.33325 24.0078C9.50927 24.0078 9.68354 23.973 9.84602 23.9053C10.0085 23.8376 10.156 23.7384 10.2799 23.6134L15.9999 17.8801L21.7199 23.6134C21.8439 23.7384 21.9913 23.8376 22.1538 23.9053C22.3163 23.973 22.4906 24.0078 22.6666 24.0078C22.8426 24.0078 23.0169 23.973 23.1794 23.9053C23.3418 23.8376 23.4893 23.7384 23.6133 23.6134C23.7382 23.4895 23.8374 23.342 23.9051 23.1795C23.9728 23.017 24.0077 22.8428 24.0077 22.6667C24.0077 22.4907 23.9728 22.3165 23.9051 22.154C23.8374 21.9915 23.7382 21.844 23.6133 21.7201L17.8799 16.0001Z" fill="#3A3A3A"/>
                    </svg>
                </span>
                    </section>
                ):(
                    <header className={show ? "hidden" : "bg-primary px-4 md:px-16 lg:px-20"}>
                        <nav  className={" flex items-center justify-between py-6"}>
                            <div className={"lg:hidden flex"}>
                                {/*<FiAlignJustify size={40} className={"lg:hidden flex text-gold cursor-pointer"}/>*/}
                                <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
                                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                                    <div className="spinner diagonal part-1"></div>
                                    <div className="spinner horizontal"></div>
                                    <div className="spinner horizontal"></div>
                                    <div className="spinner diagonal part-2"></div>
                                </label>
                                <div id="sidebarMenu">
                                    <ul className="sidebarMenuInner">
                                        <li><a href="/Artwork" target="_blank">Artwork</a></li>
                                        <li><a href="/Design" target="_blank">Design</a></li>
                                        <li><a href="/Artists" target="_blank">Artists</a></li>
                                        <li><a href="/Collections" target="_blank">Collections</a></li>
                                        <li><a href="/NFT" target="_blank">NFT</a></li>
                                        <li><a href="/events" target="_blank">Events</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <a href="/">
                                    <Logo width="60" height="60"/>
                                </a>
                            </div>
                            <div className={"relative w-full justify-center items-center gap-10 hidden lg:flex"}>
                                <div className={HeaderStyle.menuHoverArtwork}><span>Artwork</span><span><Down /></span> <MenuArtwork customeClass={HeaderStyle.artwork}/> </div>
                                <div className={HeaderStyle.menuHoverDesign}><span>Design</span><span><Down/></span><MenuDesign customeClass={HeaderStyle.design}/></div>
                                <div className={HeaderStyle.menuHoverArtist}><span>Artists</span><span><Down/></span><MenuDesign customeClass={HeaderStyle.artist}/></div>
                                <div className={HeaderStyle.menuHoverCollections}><span>Collections</span><span><Down/></span><MenuDesign customeClass={HeaderStyle.collection}/></div>
                                <div className={"flex items-center gap-2"}><span>NFT</span></div>
                                <div className={"flex items-center gap-2"}><span><a href="/events">Events</a></span></div>
                            </div>
                            <div className={"flex justify-center items-center lg:gap-6 gap-1"}>
                                <span onClick={(e:any)=>setSearchToggle(!searchToggle)} className={"cursor-pointer"}><SearchIcon width="32" height="32"/></span>

                                {
                                    auth ? (
<a href="/profile" className={"cursor-pointer"}><UserIcon width="32" height="32" /></a>
                                    ):(
<span onClick={(e:any)=>setRegisterToggle(!registerToggle)} className={"cursor-pointer"}><UserIcon width="32" height="32" /></span>
                                    )
                                }


                                

                                <a href={"/favorites?c="+localStorage.getItem("gustCookies")}>
                                    <HeartIcon width="32" height="32" />
                                </a>
                                <a href={"/checkout/cart?c="+localStorage.getItem("gustCookies")}>
                                    <BasketIcon width="32" height="32"/>
                                </a>
                            </div>
                        </nav>

                        <ModalRegister loginAccount={handlerloginModalOpen} createAccount={handlerCreateAccount} toggle={registerToggle} close={registerCloseModal}/>
                        <ModalCreateAccount toggle={createAccountToggle} loginModalOpen={handlerloginModalOpen} close={createCloseModal} />
                        <ModalLogin toggle={loginToggle} createAccount={handlerCreateAccount} close={loginCloseModal} />
                    </header>
                )
            }
        </>
    )
}
export default Header;
