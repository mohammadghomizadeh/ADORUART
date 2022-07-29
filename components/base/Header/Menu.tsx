// @flow
import * as React from 'react';
import Link from "next/link";

type Props = {
customeClass?:string;
};
export const MenuArtwork = (props: Props) => {
    const {customeClass} = props;
    return (
            <nav className={"absolute flex top-20  z-50 " + customeClass}>
                <div className={"bg-menubg py-10 px-8"}>
                    <div className={"pb-4"}>
                                 <span className={"text-gold font-bold border-b border-gold"}>
                                 Painting
                                </span>
                    </div>
                    <div>
                        <ul className={"flex flex-col gap-2 text-title font-semibold"}>
                            <li>
                                <Link href={""}>
                                    <a>Sculpture</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Photography</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Drawing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Work on paper</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Other media</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Our latest works</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Explore more</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"bg-white py-10 px-8"}>
                    <div className={"pb-4"}>
                                 <span className={"text-gold font-bold border-b border-gold"}>
                                 PAINTING CATEGORIES
                                </span>
                    </div>
                    <div>
                        <ul className={"flex flex-col gap-2 text-title font-semibold"}>
                            <li>
                                <Link href={""}>
                                    <a>Everyday Life</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Landscape</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Nude</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Portrait</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Still Life</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Street Art</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>See more</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"bg-white py-10 px-8"}>
                    <div className={"pb-4"}>
                                 <span className={"text-gold font-bold border-b border-gold"}>
                                 PAINTING STYLES
                                </span>
                    </div>
                    <div>
                        <ul className={"flex flex-col gap-2 text-title font-semibold"}>
                            <li>
                                <Link href={""}>
                                    <a>Abstract</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Fantasy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Figurative</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Fine Art</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Pop Art</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>Semi - abstract</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>See more</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"bg-white pb-2 px-2 flex flex-col justify-end"}>
                    <img src="/images/artwork3.png" width={"190px"} height={"220px"} alt=""/>
                </div>
            </nav>
    );
};
export const MenuDesign = (props: Props) => {
    const {customeClass} = props;
    return (
        <nav className={"absolute flex   z-50 " + customeClass}>
            <div className={"bg-menubg py-10 px-8"}>
                <div className={"pb-4"}>
                    <Link href={""}>
                        <a>
                            <span className={"text-gold font-bold border-b border-gold"}>
                                 Painting
                            </span>
                        </a>
                    </Link>

                </div>
                <div>
                    <ul className={"flex flex-col gap-2 text-title font-semibold"}>
                        <li>
                            <Link href={""}>
                                <a>Sculpture</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Photography</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Drawing</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Work on paper</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Other media</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Our latest works</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Explore more</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"bg-white py-10 px-8"}>
                <div className={"pb-4"}>
                                 <span className={"text-gold font-bold border-b border-gold"}>
                                 PAINTING CATEGORIES
                                </span>
                </div>
                <div>
                    <ul className={"flex flex-col gap-2 text-title font-semibold"}>
                        <li>
                            <Link href={""}>
                                <a>Everyday Life</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Landscape</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Nude</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Portrait</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Still Life</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Street Art</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>See more</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"bg-white py-10 px-8"}>
                <div className={"pb-4"}>
                                 <span className={"text-gold font-bold border-b border-gold"}>
                                 PAINTING STYLES
                                </span>
                </div>
                <div>
                    <ul className={"flex flex-col gap-2 text-title font-semibold"}>
                        <li>
                            <Link href={""}>
                                <a>Abstract</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Fantasy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Figurative</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Fine Art</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Pop Art</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>Semi - abstract</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                <a>See more</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"bg-white pb-2 px-2 flex flex-col justify-end"}>
                <img src="/images/artwork3.png" width={"190px"} height={"220px"} alt=""/>
            </div>
        </nav>
    );
};
