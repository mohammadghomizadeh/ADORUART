import React, {useEffect, useState} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {EVENTS} from "@/hooks/useApi";
function Events({data}:any)  {
    const [events,setEvents] = useState<any>(data)
    return (
        <HomeLayout title={"ADORUART | Events"}>
            <section className={"bg-primary px-20 flex pb-20 justify-center flex- flex-col items-center justify-center"}>
                <div className={"my-12 text-56"}>
                    <h1>Events</h1>
                </div>
                <div>
                    <p>Discover artwork selections curated especially for you by our Art Advisors</p>
                </div>
            </section>
            <section className={"flex items-center gap-2 bg-sub-header py-4 px-20 text-black"}>
                <span><a href="/events">Events</a></span>
            </section>
            {
                events && (
                    events.map((event:any,i:number)=>
                            <section key={i} className={ i % 2 == 0 ? "flex gap-5 justify-between px-20 w-full my-20" : "flex flex-row-reverse gap-5 justify-between px-20 w-full my-20"}>
                                <div className={"w-3/6"}>
                    <span className={"text-title font-bold text-2xl"}>
                        <a href={"/events/category/"+event.category.slug}>
                            {event.category.title}
                        </a>

                    </span>
                                    <div className={"flex gap-2 text-gold items-center mt-4"}>
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_235_969)">
                            <path d="M8.515 1.019C8.34363 1.00635 8.17184 1.00001 8 1V0C8.19654 9.58276e-05 8.393 0.00743414 8.589 0.022L8.515 1.019ZM10.519 1.469C10.1984 1.3453 9.86922 1.24537 9.534 1.17L9.753 0.194C10.136 0.28 10.513 0.394 10.879 0.536L10.519 1.469ZM11.889 2.179C11.746 2.08365 11.5996 1.99359 11.45 1.909L11.943 1.039C12.2849 1.23274 12.6121 1.45132 12.922 1.693L12.307 2.482C12.1714 2.37623 12.032 2.2755 11.889 2.18V2.179ZM13.723 3.969C13.5252 3.68798 13.3069 3.42192 13.07 3.173L13.794 2.483C14.064 2.768 14.314 3.073 14.541 3.393L13.723 3.969ZM14.467 5.321C14.4014 5.16246 14.33 5.00636 14.253 4.853L15.146 4.403C15.3226 4.75409 15.473 5.11774 15.596 5.491L14.646 5.804C14.5923 5.64087 14.5326 5.47976 14.467 5.321ZM14.997 7.828C14.9889 7.48434 14.9555 7.14174 14.897 6.803L15.882 6.633C15.949 7.019 15.988 7.411 15.998 7.803L14.998 7.828H14.997ZM14.866 9.366C14.899 9.196 14.926 9.027 14.947 8.856L15.94 8.979C15.892 9.36915 15.8151 9.75521 15.71 10.134L14.746 9.867C14.792 9.702 14.832 9.535 14.866 9.366ZM13.914 11.745C14.098 11.455 14.26 11.151 14.4 10.837L15.314 11.242C15.154 11.602 14.969 11.948 14.759 12.28L13.914 11.745ZM12.95 12.95C13.072 12.828 13.189 12.702 13.3 12.572L14.058 13.225C13.9296 13.3738 13.7959 13.5179 13.657 13.657L12.95 12.95Z" fill="#936E2F"/>
                            <path d="M7.99922 1C6.8481 1.00008 5.71476 1.28405 4.6996 1.82674C3.68443 2.36943 2.81876 3.1541 2.17928 4.11125C1.53979 5.0684 1.14621 6.16848 1.03341 7.31406C0.920612 8.45964 1.09207 9.61536 1.53259 10.6789C1.97312 11.7423 2.66912 12.6808 3.55894 13.4111C4.44877 14.1413 5.50496 14.6409 6.63395 14.8655C7.76295 15.0901 8.92991 15.0328 10.0315 14.6987C11.133 14.3645 12.1352 13.7639 12.9492 12.95L13.6562 13.657C12.726 14.5878 11.5805 15.2747 10.3213 15.657C9.06205 16.0393 7.72799 16.105 6.43728 15.8485C5.14658 15.5919 3.93908 15.021 2.92177 14.1862C1.90446 13.3515 1.10875 12.2787 0.605152 11.0629C0.101551 9.84711 -0.0943961 8.52588 0.0346716 7.21627C0.163739 5.90666 0.613837 4.6491 1.34509 3.55502C2.07633 2.46094 3.06615 1.56411 4.22685 0.944003C5.38754 0.323895 6.68326 -0.000348732 7.99922 2.81458e-07V1Z" fill="#936E2F"/>
                            <path d="M7.5 3C7.63261 3 7.75979 3.05268 7.85355 3.14645C7.94732 3.24021 8 3.36739 8 3.5V8.71L11.248 10.566C11.3598 10.6334 11.4408 10.7419 11.4736 10.8683C11.5065 10.9946 11.4886 11.1288 11.4238 11.2422C11.3591 11.3556 11.2525 11.4391 11.127 11.4749C11.0014 11.5108 10.8669 11.4961 10.752 11.434L7.252 9.434C7.17547 9.39029 7.11186 9.32712 7.06761 9.25091C7.02335 9.17469 7.00003 9.08813 7 9V3.5C7 3.36739 7.05268 3.24021 7.14645 3.14645C7.24021 3.05268 7.36739 3 7.5 3Z" fill="#936E2F"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_235_969">
                            <rect width="16" height="16" rx="3" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </span>
                                        <span>
                            Time left until the end of the event:
                        </span>
                                    </div>
                                    <div className={"mt-2"}>
                                        <ul className={"flex gap-4"}>
                                            <li className={"border border-gold text-gold rounded text-center px-3 py-2"}>
                                                02
                                            </li>
                                            <li className={"border border-gold text-gold rounded text-center px-3 py-2"}>
                                                02
                                            </li>
                                            <li className={"border border-gold text-gold rounded text-center px-3 py-2"}>
                                                02
                                            </li>
                                            <li className={"border border-gold text-gold rounded text-center px-3 py-2"}>
                                                02
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={"mt-10"}>
                                        <span className={"text-secondary text-xl font-bold"}>
                                            <a href={"/events/detail/"+event.slug}>
                                             {event.title}
                                            </a>
                                        </span>
                                    </div>
                                    <div className={"mt-4"}>
                        <span className={"text-nft"}>
                        From {event.start} to {event.end}
                        </span>
                                    </div>
                                    <div className={"flex gap-4 mt-14"}>
                                        <a href={"/events/detail/"+event.slug} className={"block text-center bg-secondary text-white rounded w-30% py-4"}>
                                            EXPLOR
                                        </a>
                                        <a href={"/events/detail/"+event.slug} className={"block text-center text-secondary border  border-secondary rounded w-70% py-4"}>
                                            Stay up to date on all of our events
                                        </a>
                                    </div>
                                </div>
                                <div className={"w-3/6"}>
                                    {
                                        event.image ? (
                                            <img src={event.image} className={"w-full h-96 border border-4 border-primary  rounded p-2"} alt={event.title}/>
                                        ):(
                                            <img src="/images/events.png" className={"w-full border border-4 border-primary  rounded p-2"} alt=""/>
                                        )
                                    }

                                </div>
                            </section>
                    )


                )
            }
        </HomeLayout>
    )
}
export async function getServerSideProps() {
    const res:any =  EVENTS();
    const {data} = await res;
    return { props:data }

}
export default Events;
