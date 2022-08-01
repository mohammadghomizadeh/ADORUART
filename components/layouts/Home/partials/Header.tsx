import React, {ReactNode} from "react";
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
interface Props {
    menus?: any;
}
function Header({menus}:Props)  {

    return (
        <header className={"bg-primary px-4 md:px-16 lg:px-20"}>
            <nav  className={"flex items-center justify-between py-6"}>
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
                                <li><a href="/Events" target="_blank">Events</a></li>
                            </ul>
                        </div>
                </div>
                <div><Logo width="60" height="60"/></div>
                <div className={"relative w-full justify-center items-center gap-10 hidden lg:flex"}>
                    <div className={HeaderStyle.menuHoverArtwork}><span>Artwork</span><span><Down /></span> <MenuArtwork customeClass={HeaderStyle.artwork}/> </div>
                    <div className={HeaderStyle.menuHoverDesign}><span>Design</span><span><Down/></span><MenuDesign customeClass={HeaderStyle.design}/></div>
                    <div className={HeaderStyle.menuHoverArtist}><span>Artists</span><span><Down/></span><MenuDesign customeClass={HeaderStyle.artist}/></div>
                    <div className={HeaderStyle.menuHoverCollections}><span>Collections</span><span><Down/></span><MenuDesign customeClass={HeaderStyle.collection}/></div>
                    <div className={"flex items-center gap-2"}><span>NFT</span></div>
                    <div className={"flex items-center gap-2"}><span>Events</span></div>
                </div>

                <div className={"flex justify-center items-center lg:gap-6 gap-1"}>
                    <SearchIcon width="32" height="32"/>
                    <UserIcon width="32" height="32"/>
                    <HeartIcon width="32" height="32" />
                    <BasketIcon width="32" height="32"/>
                </div>
            </nav>
        </header>
    )
}
export default Header;
