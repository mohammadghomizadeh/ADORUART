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
interface Props {
    menus?: any;
}
function Header({menus}:Props)  {
    return (
        <header className={HeaderStyle.header}>
            <nav  className={HeaderStyle.nav}>
                <div><Logo width="60" height="60"/></div>
                <div className={HeaderStyle.menus}>
                    <div className={HeaderStyle.menuHoverArtwork}><span>Artwork</span><span><Down /></span> <MenuArtwork customeClass={HeaderStyle.artwork}/> </div>
                    <div className={HeaderStyle.menuHoverDesign}><span>Design</span><span><Down/></span><MenuDesign customeClass={HeaderStyle.design}/></div>
                    <div><span>Artists</span><span><Down/></span></div>
                    <div><span>Collections</span><span><Down/></span></div>
                    <div><span>NFT</span><span><Down/></span></div>
                    <div><span>Events</span><span><Down/></span></div>

                </div>
                <div className={HeaderStyle.icons}>
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
