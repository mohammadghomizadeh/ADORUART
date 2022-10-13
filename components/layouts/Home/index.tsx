import React, {ReactNode} from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import {random} from "nanoid";
interface Props {
    children?: ReactNode;
    menus?: any;
    title?: string;
    showMenu?: boolean;
}
export default function HomeLayout( props: Props ) {
    const DynamicHeader = dynamic(() => import('./partials/Header'), { ssr: false });
    const DynamicFooter = dynamic(() => import('./partials/Footer'), { ssr:false });
    const { children,title,menus,showMenu } = props
    var date:any = new Date();
    let cookie:any =  date.getDay()+random(1)+"CART-IPO"+random(2);
    if (typeof window !== 'undefined') {
        if(!localStorage.getItem("gustCookies")){
            localStorage.setItem("gustCookies",cookie)
        }
    }
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section className={"w-full h-screen relative"}>
                <DynamicHeader menus={menus} show={showMenu} />

                {children}
                <DynamicFooter />
            </section>
        </>
    )
}
