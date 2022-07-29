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

                        <Link href={"/Painting"}>
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
                                <Link href={"/Sculpture"}>
                                    <a>Sculpture</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Photography"}>
                                    <a>Photography</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Drawing"}>
                                    <a>Drawing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Work"}>
                                    <a>Work on paper</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/media"}>
                                    <a>Other media</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/latest"}>
                                    <a>Our latest works</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Explore"}>
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
                                <Link href={"/Everyday-Life"}>
                                    <a>Everyday Life</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Landscape"}>
                                    <a>Landscape</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Nude"}>
                                    <a>Nude</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Portrait"}>
                                    <a>Portrait</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Still-Life"}>
                                    <a>Still Life</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Street-Art"}>
                                    <a>Street Art</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/see-more"}>
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
                                <Link href={"/Abstract"}>
                                    <a>Abstract</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Fantasy"}>
                                    <a>Fantasy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Figurative"}>
                                    <a>Figurative</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Fine-Art"}>
                                    <a>Fine Art</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Pop-Art"}>
                                    <a>Pop Art</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/Semi-abstract"}>
                                    <a>Semi - abstract</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/see-more"}>
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
                    <Link href={"/Painting"}>
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
                            <Link href={"/Sculpture"}>
                                <a>Sculpture</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Photography"}>
                                <a>Photography</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Drawing"}>
                                <a>Drawing</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/paper"}>
                                <a>Work on paper</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/media"}>
                                <a>Other media</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/works"}>
                                <a>Our latest works</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Explore"}>
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
                            <Link href={"/Life"}>
                                <a>Everyday Life</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Landscape"}>
                                <a>Landscape</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Nude"}>
                                <a>Nude</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Portrait"}>
                                <a>Portrait</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Still"}>
                                <a>Still Life</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Street"}>
                                <a>Street Art</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/see-more"}>
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
                            <Link href={"/Abstract"}>
                                <a>Abstract</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Fantasy"}>
                                <a>Fantasy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Figurative"}>
                                <a>Figurative</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Fine"}>
                                <a>Fine Art</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Pop"}>
                                <a>Pop Art</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/Semi"}>
                                <a>Semi - abstract</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/see-more"}>
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
