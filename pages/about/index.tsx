import React, {useEffect, useState} from "react";
import HomeLayout from "@/components/layouts/Home";
import Link from "next/link";
import {ABOUT} from "@/hooks/useApi"
function About()  {
    const [about, setAbout] = React.useState<any>("")
    const [teams, setTeams] = React.useState<any>("")
    useEffect(()=>{
        ABOUT().then((res:any)=>{
            setAbout(res.data);
            setTeams(res.data.teams);
        })
    },[])
    return (
        <>
            <HomeLayout title={"Home"} >
                <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                    <div className={"mt-12 text-56"}>
                        <h1>ABOUT ADORUART</h1>
                    </div>
                    <div>
                        <p>Art is made to be seen, and sharedAN ART COLLECTION FOR MY BUSINESS
                        </p>
                    </div>
                </section>
                <section className={"px-20 bg-editbg py-4 text-black font-bold"}>
                    About us
                </section>
                <section className={"py-10 px-20 "}>
                    <p className={"text-black"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in
                        nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
                        senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum
                    </p>
                </section>
                <section className={"bg-editbg px-20"}>
                    <div className="relative flex py-10 items-center">
                        <div className="flex-grow border-t border-gold"></div>
                        <span className="flex-shrink mx-4 text-black text-xl font-bold">The ADORUART team</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                    <section   className={"grid grid-cols-2 px-20 gap-20"}>
                        {
                            teams && (
                                teams.map((team:any,key:number)=>
                                        <article key={key} className={"flex flex-col text-black"}>
                                            <div>
                                                {
                                                    team.avatar ? (
                                                        <img style={{'width':'100px','height':'100px','borderRadius':'100px'}} src={team.avatar} alt={team.name}/>
                                                    ):(
                                                        <img style={{'width':'100px','height':'100px','borderRadius':'100px'}} src="/images/collectors.png" alt={team.name}/>
                                                    )
                                                }

                                            </div>
                                            <span className={"mt-6"}>
                                                {team.name}
                            </span>
                                            <span className={"text-gray-400 mt-3"}>
                                {team.caption}
                            </span>
                                            <p className={"mt-3"}>
                                                {team.description}
                                            </p>
                                            <div className={"mt-3"}>
                                                <ul className={"flex gap-3"}>
                                                    <li>
                                                        <Link href={team.email}>
                                                            <a>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="12" cy="12" r="12" fill="#7B7575"/>
                                                                    <g clipPath="url(#clip0_407_1007)">
                                                                        <path d="M6.24862 8.23022C7.89557 9.62501 10.7855 12.0789 11.6348 12.844C11.7489 12.9473 11.8712 12.9998 11.9981 12.9998C12.1248 12.9998 12.2469 12.9477 12.3607 12.845C13.2108 12.0791 16.1007 9.62501 17.7476 8.23022C17.8502 8.14355 17.8658 7.9912 17.7828 7.88524C17.5909 7.64039 17.3048 7.5 16.9981 7.5H6.99812C6.69149 7.5 6.40534 7.64039 6.21346 7.88527C6.13045 7.9912 6.14608 8.14355 6.24862 8.23022Z" fill="white"/>
                                                                        <path d="M17.853 8.9862C17.7644 8.94495 17.6602 8.95934 17.5864 9.02234C15.76 10.5707 13.429 12.5553 12.6955 13.2162C12.2839 13.5878 11.7126 13.5878 11.3 13.2157C10.5183 12.5113 7.90061 10.286 6.40966 9.02232C6.33543 8.95932 6.23095 8.94542 6.14305 8.98617C6.0547 9.02721 5.99805 9.1156 5.99805 9.213V15.5001C5.99805 16.0516 6.44652 16.5001 6.99805 16.5001H16.9981C17.5496 16.5001 17.998 16.0516 17.998 15.5001V9.213C17.998 9.1156 17.9414 9.02698 17.853 8.9862Z" fill="white"/>
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_407_1007">
                                                                            <rect width="12" height="12" fill="white" transform="translate(5.99805 6)"/>
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </a>
                                                        </Link>

                                                    </li>
                                                </ul>
                                            </div>

                                        </article>
                                )
                            )
                        }
                    </section>
                    <section className={"flex flex-col justify-center items-center py-32"}>
                        <span className={"underline text-secondary text-xl"}>
                            SEE MORE
                        </span>
                    </section>
                </section>

                <section className={"px-20 my-10"}>
                    <div className="relative flex py-10 items-center">
                        <div className="flex-grow border-t border-gold"></div>
                        <span className="flex-shrink mx-4 text-black text-2xl font-bold">The selection of artists at ADORUART</span>
                        <div className="flex-grow border-t border-gold"></div>
                    </div>
                    <section className={"grid grid-cols-3 px-10 py-10 text-black"}>
                        <article className={""}>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M43.2039 19H35.5227C35.2838 18.9998 35.0546 19.0942 34.8852 19.2625L19.5289 34.6188C19.1927 34.9566 19.0039 35.4139 19.0039 35.8906C19.0039 36.3673 19.1927 36.8246 19.5289 37.1625L26.8414 44.475C27.1793 44.8112 27.6366 45 28.1133 45C28.59 45 29.0473 44.8112 29.3852 44.475L44.7352 29.125C44.9035 28.9555 44.9978 28.7263 44.9977 28.4875V20.8C44.9988 20.5638 44.9533 20.3298 44.8636 20.1113C44.7739 19.8928 44.642 19.6941 44.4752 19.5268C44.3085 19.3596 44.1104 19.2269 43.8922 19.1365C43.674 19.046 43.4401 18.9997 43.2039 19V19Z" stroke="#7B7575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M40 26C39.6044 26 39.2178 25.8827 38.8889 25.6629C38.56 25.4432 38.3036 25.1308 38.1522 24.7654C38.0009 24.3999 37.9613 23.9978 38.0384 23.6098C38.1156 23.2219 38.3061 22.8655 38.5858 22.5858C38.8655 22.3061 39.2219 22.1156 39.6098 22.0384C39.9978 21.9613 40.3999 22.0009 40.7654 22.1522C41.1308 22.3036 41.4432 22.56 41.6629 22.8889C41.8827 23.2178 42 23.6044 42 24C42 24.5304 41.7893 25.0391 41.4142 25.4142C41.0391 25.7893 40.5304 26 40 26Z" fill="#7B7575"/>
                                </svg>
                            </div>
                            <div className={"text-center mt-4"}>
                                <span>Wellbeing at work</span>
                                <span>Art stimulates your
employees' creativity and
improves their sense of
wellbeing at work.</span>
                            </div>
                        </article>
                        <article>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M39 29V33C39 33.2652 38.8946 33.5196 38.7071 33.7071C38.5196 33.8946 38.2652 34 38 34H28.4125L29.7125 35.2875C29.9003 35.4771 30.0056 35.7332 30.0056 36C30.0056 36.2668 29.9003 36.5229 29.7125 36.7125C29.5214 36.8973 29.2659 37.0006 29 37.0006C28.7341 37.0006 28.4786 36.8973 28.2875 36.7125L25.2875 33.7125C25.0997 33.5229 24.9944 33.2668 24.9944 33C24.9944 32.7332 25.0997 32.4771 25.2875 32.2875L28.2875 29.2875C28.4818 29.128 28.7285 29.0465 28.9795 29.0589C29.2306 29.0712 29.4681 29.1765 29.6458 29.3542C29.8235 29.5319 29.9288 29.7694 29.9411 30.0205C29.9535 30.2715 29.872 30.5182 29.7125 30.7125L28.4125 32H37V29C37 28.7348 37.1054 28.4804 37.2929 28.2929C37.4804 28.1054 37.7348 28 38 28C38.2652 28 38.5196 28.1054 38.7071 28.2929C38.8946 28.4804 39 28.7348 39 29ZM45 23V41C45 41.5304 44.7893 42.0391 44.4142 42.4142C44.0391 42.7893 43.5304 43 43 43H21C20.4696 43 19.9609 42.7893 19.5858 42.4142C19.2107 42.0391 19 41.5304 19 41V23C19 22.4696 19.2107 21.9609 19.5858 21.5858C19.9609 21.2107 20.4696 21 21 21H43C43.5304 21 44.0391 21.2107 44.4142 21.5858C44.7893 21.9609 45 22.4696 45 23ZM43 41V23H21V41H43Z" fill="#7B7575"/>
                                </svg>
                            </div>
                            <div className={"text-center mt-4"}>
                                <span>
                                    Tax advantages
                                </span>
                                <span>
                                    You can take advantage of the
tax benefits available for
businesses when buying art.
                                </span>

                            </div>
                        </article>
                        <article>
                            <div className={"flex justify-center items-center"}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="31.5" fill="#EFEEEE" stroke="#7B7575"/>
                                    <path d="M16 22V24H35V39H28.844C28.398 37.281 26.852 36 25 36C23.148 36 21.602 37.281 21.156 39H20V34H18V41H21.156C21.602 42.719 23.148 44 25 44C26.852 44 28.398 42.719 28.844 41H37.156C37.602 42.719 39.148 44 41 44C42.852 44 44.398 42.719 44.844 41H48V32.844L47.937 32.687L45.937 26.687L45.72 26H37V22H16ZM17 26V28H26V26H17ZM37 28H44.281L46 33.125V39H44.844C44.398 37.281 42.852 36 41 36C39.148 36 37.602 37.281 37.156 39H37V28ZM18 30V32H24V30H18ZM25 38C26.117 38 27 38.883 27 40C27 41.117 26.117 42 25 42C23.883 42 23 41.117 23 40C23 38.883 23.883 38 25 38ZM41 38C42.117 38 43 38.883 43 40C43 41.117 42.117 42 41 42C39.883 42 39 41.117 39 40C39 38.883 39.883 38 41 38Z" fill="#7B7575"/>
                                </svg>

                            </div>
                            <div className={"text-center mt-4"}>
                                <span>
                                    Improve your image
                                </span>
                                <span>
                                    Artworks showcase the
personality of a business and
the brand's values.
                                </span>

                            </div>
                        </article>
                    </section>
                </section>









            </HomeLayout>
        </>
    )
}

export default About;
