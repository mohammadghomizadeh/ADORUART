import React, {ReactNode} from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
interface Props {
    children?: ReactNode;
    menus?: any;
    title?: string;
}
export default function HomeLayout( props: Props ) {
    const DynamicHeader = dynamic(() => import('./partials/Header'), { ssr: false });
    const DynamicFooter = dynamic(() => import('./partials/Footer'), { ssr:false });
    const { children,title,menus } = props
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section className={"w-full h-screen relative"}>
                <DynamicHeader menus={menus} />
                {children}
                <DynamicFooter />
            </section>
        </>
    )
}
