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

                        <a href={"/Painting"}>
                            <a>
                                <span className={"text-gold font-bold border-b border-gold"}>
                                 Painting
                                </span>
                            </a>
                        </a>
                    </div>
                    <div>
                        <ul className={"flex flex-col gap-2 text-title font-semibold"}>
                            <li>
                                <a href={"/Sculpture"}>
                                    <a>Sculpture</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Photography"}>
                                    <a>Photography</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Drawing"}>
                                    <a>Drawing</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Work"}>
                                    <a>Work on paper</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/media"}>
                                    <a>Other media</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/latest"}>
                                    <a>Our latest works</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Explore"}>
                                    <a>Explore more</a>
                                </a>
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
                                <a href={"/Everyday-Life"}>
                                    <a>Everyday Life</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Landscape"}>
                                    <a>Landscape</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Nude"}>
                                    <a>Nude</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Portrait"}>
                                    <a>Portrait</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Still-Life"}>
                                    <a>Still Life</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Street-Art"}>
                                    <a>Street Art</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/see-more"}>
                                    <a>See more</a>
                                </a>
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
                                <a href={"/Abstract"}>
                                    <a>Abstract</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Fantasy"}>
                                    <a>Fantasy</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Figurative"}>
                                    <a>Figurative</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Fine-Art"}>
                                    <a>Fine Art</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Pop-Art"}>
                                    <a>Pop Art</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/Semi-abstract"}>
                                    <a>Semi - abstract</a>
                                </a>
                            </li>
                            <li>
                                <a href={"/see-more"}>
                                    <a>See more</a>
                                </a>
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
                            <a href={"/Sculpture"}>
                                <a>Sculpture</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Photography"}>
                                <a>Photography</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Drawing"}>
                                <a>Drawing</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/paper"}>
                                <a>Work on paper</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/media"}>
                                <a>Other media</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/works"}>
                                <a>Our latest works</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Explore"}>
                                <a>Explore more</a>
                            </a>
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
                            <a href={"/Life"}>
                                <a>Everyday Life</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Landscape"}>
                                <a>Landscape</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Nude"}>
                                <a>Nude</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Portrait"}>
                                <a>Portrait</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Still"}>
                                <a>Still Life</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Street"}>
                                <a>Street Art</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/see-more"}>
                                <a>See more</a>
                            </a>
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
                            <a href={"/Abstract"}>
                                <a>Abstract</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Fantasy"}>
                                <a>Fantasy</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Figurative"}>
                                <a>Figurative</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Fine"}>
                                <a>Fine Art</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Pop"}>
                                <a>Pop Art</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/Semi"}>
                                <a>Semi - abstract</a>
                            </a>
                        </li>
                        <li>
                            <a href={"/see-more"}>
                                <a>See more</a>
                            </a>
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
