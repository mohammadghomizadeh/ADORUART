import React,{useState,useEffect} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import Link from "next/link";
import {useRouter} from "next/router";
// import {LOGINUSER} from "../../../hooks/useApi";
function ProfileArtists()  {
    const router:any = useRouter();
    const {slug}:any = router.query;
const [profileMenu,setProfileMenu] = useState<any>("")
// const [password,setPassword] = useState<any>("")
// const loginUser = (e:any) =>{
//   e.preventDefault();
//   e.stopPropagation();
//         const ILOGINDATA = {
//                 email:email,
//                 password:password,
//         }
//         LOGINUSER(ILOGINDATA).then((res=>{
//             if(res.status === 200 && res.statusText === "OK"){
//                 localStorage.setItem("__to_ken",res.data)
//                 // window.location.href = "/profile";
//             }
//         })).catch((err:any)=>{
//             console.log(err);
//
//         })
// }
useEffect(()=>{
    if(!localStorage.getItem("__to_ken")){
        window.location.href = "/auth/login";
    }
})
    return (
        <HomeLayout title={"Profile Artists"}>
            <div className="flex  items-center justify-center px-20 mt-4  w-full ">
                <span className="block bg-gray-400 ">Login</span>
            </div>
            <div className="flex  items-center justify-center px-20 mt-4 w-full ">
                <span className=" mx-4 text-black text-2xl font-bold block">Hello Mohammad</span>
            </div>
            <div className="flex  items-center justify-center px-20 mt-2 w-full ">
                <span className=" mx-4 text-gray-400 text-lg  block">ADORUART collector since 8/5/22</span>
            </div>
            <div className="flex gap-6  items-center justify-center px-20 mt-10 w-full ">
                <a href="/profile" className="py-2 mx-4 text-gray-400 text-lg  block cursor-pointer">My Profile</a>
                <a href="/profile/artwork" className="py-2 mx-4 text-gray-400 text-lg  block cursor-pointer">My Favorite Artwork</a>
                <a href="/profile/artists" className="py-2 mx-4 text-gold text-lg  block cursor-pointer">My Favorite Artists</a>
                <a href="/profile/alerts" className="py-2 mx-4 text-gray-400 text-lg  block cursor-pointer">My Search Alerts</a>
                <a href="/profile/offers" className="py-2 mx-4 text-gray-400 text-lg  block cursor-pointer">My Offers</a>
                <a href="/profile/orders" className="py-2 mx-4 text-gray-400 text-lg  block cursor-pointer">My Orders</a>
            </div>



            <section className={"text-black  bg-editbg flex flex-col items-center justify-center gap-10 py-10"}>

                <div className="flex  items-center justify-center px-20 mt-4 w-full ">
                    <span className=" mx-4 text-black text-2xl font-bold block">My Favorite Artists</span>
                </div>

                <div className={"flex gap-6  w-full px-32"}>
                  <section className={"w-1/2 flex flex-col gap-6"}>
                    <article className={" py-8 px-4 bg-white text-black rounded"}>
                        <span className={"font-bold text-xl"}>Refer a Friend On ADORUART</span>
                        <p className={"py-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <button  className={"bg-secondary text-white px-14 py-4 rounded mt-4"}>
                            REFER A FRIEND
                        </button>

                    </article>
                    <article className={" pt-8 px-4 bg-white text-black rounded"}>
                        <span className={"font-bold text-xl"}>
                            Account Setting
                        </span>
                        <div className={"flex gap-12 py-2 mt-4"}>
                            <span>
                                Preferred Language
                            </span>
                            <span>
                                EN
                            </span>
                        </div>
                        <div className={"flex gap-12 py-2"}>
                            <span>
                                Preferred Language
                            </span>
                            <span>
                                EUR
                            </span>
                        </div>
                        <button  className={"bg-secondary text-white px-14 py-4 rounded mt-4"}>
                            CHANGE MY PASSWORD
                        </button>

                        <div className={"flex justify-between items-center py-3 border-t-2 mt-4"}>
                            <span>Activate / deactivate your browsing history</span>
                            <span>On</span>

                        </div>

                    </article>
                    <article className={"py-10  px-4 bg-white text-black rounded"}>
                        <div className="flex flex-col ">
                        <span className={"font-bold text-xl w-full"}>
                        Payment Setting
                        </span>
                            <span className="w-full">
                            My Card
                            </span>
                        </div>
                        <div className="">
                            <div className="w-full flex justify-center items-center">
                                <svg width="76" height="68" viewBox="0 0 76 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1219_2617)">
                                    <path d="M56 16C57.0609 16 58.0783 16.4214 58.8284 17.1716C59.5786 17.9217 60 18.9391 60 20V52C60 53.0609 59.5786 54.0783 58.8284 54.8284C58.0783 55.5786 57.0609 56 56 56H8C6.93913 56 5.92172 55.5786 5.17157 54.8284C4.42143 54.0783 4 53.0609 4 52V20C4 18.9391 4.42143 17.9217 5.17157 17.1716C5.92172 16.4214 6.93913 16 8 16H56ZM8 12C5.87827 12 3.84344 12.8429 2.34315 14.3431C0.842855 15.8434 0 17.8783 0 20L0 52C0 54.1217 0.842855 56.1566 2.34315 57.6569C3.84344 59.1571 5.87827 60 8 60H56C58.1217 60 60.1566 59.1571 61.6569 57.6569C63.1571 56.1566 64 54.1217 64 52V20C64 17.8783 63.1571 15.8434 61.6569 14.3431C60.1566 12.8429 58.1217 12 56 12H8Z" fill="#D4A551"/>
                                    <path d="M8 26C8 25.4696 8.21071 24.9609 8.58579 24.5858C8.96086 24.2107 9.46957 24 10 24H18C18.5304 24 19.0391 24.2107 19.4142 24.5858C19.7893 24.9609 20 25.4696 20 26V30C20 30.5304 19.7893 31.0391 19.4142 31.4142C19.0391 31.7893 18.5304 32 18 32H10C9.46957 32 8.96086 31.7893 8.58579 31.4142C8.21071 31.0391 8 30.5304 8 30V26ZM8 38C8 37.4696 8.21071 36.9609 8.58579 36.5858C8.96086 36.2107 9.46957 36 10 36H30C30.5304 36 31.0391 36.2107 31.4142 36.5858C31.7893 36.9609 32 37.4696 32 38C32 38.5304 31.7893 39.0391 31.4142 39.4142C31.0391 39.7893 30.5304 40 30 40H10C9.46957 40 8.96086 39.7893 8.58579 39.4142C8.21071 39.0391 8 38.5304 8 38ZM8 46C8 45.4696 8.21071 44.9609 8.58579 44.5858C8.96086 44.2107 9.46957 44 10 44H14C14.5304 44 15.0391 44.2107 15.4142 44.5858C15.7893 44.9609 16 45.4696 16 46C16 46.5304 15.7893 47.0391 15.4142 47.4142C15.0391 47.7893 14.5304 48 14 48H10C9.46957 48 8.96086 47.7893 8.58579 47.4142C8.21071 47.0391 8 46.5304 8 46ZM20 46C20 45.4696 20.2107 44.9609 20.5858 44.5858C20.9609 44.2107 21.4696 44 22 44H26C26.5304 44 27.0391 44.2107 27.4142 44.5858C27.7893 44.9609 28 45.4696 28 46C28 46.5304 27.7893 47.0391 27.4142 47.4142C27.0391 47.7893 26.5304 48 26 48H22C21.4696 48 20.9609 47.7893 20.5858 47.4142C20.2107 47.0391 20 46.5304 20 46ZM32 46C32 45.4696 32.2107 44.9609 32.5858 44.5858C32.9609 44.2107 33.4696 44 34 44H38C38.5304 44 39.0391 44.2107 39.4142 44.5858C39.7893 44.9609 40 45.4696 40 46C40 46.5304 39.7893 47.0391 39.4142 47.4142C39.0391 47.7893 38.5304 48 38 48H34C33.4696 48 32.9609 47.7893 32.5858 47.4142C32.2107 47.0391 32 46.5304 32 46ZM44 46C44 45.4696 44.2107 44.9609 44.5858 44.5858C44.9609 44.2107 45.4696 44 46 44H50C50.5304 44 51.0391 44.2107 51.4142 44.5858C51.7893 44.9609 52 45.4696 52 46C52 46.5304 51.7893 47.0391 51.4142 47.4142C51.0391 47.7893 50.5304 48 50 48H46C45.4696 48 44.9609 47.7893 44.5858 47.4142C44.2107 47.0391 44 46.5304 44 46Z" fill="#D4A551"/>
                                    </g>
                                    <circle cx="64" cy="12" r="12" fill="#D4A551"/>
                                    <path d="M64.0003 17.3332V11.9998M64.0003 11.9998V6.6665M64.0003 11.9998H69.3337M64.0003 11.9998H58.667" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                    <defs>
                                    <clipPath id="clip0_1219_2617">
                                    <rect width="64" height="64" fill="white" transform="translate(0 4)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                            </div>
                            <div className="flex justify-center items-center">
                                <span>Add a card for future use</span>
                            </div>
                            <div className="flex justify-center items-center">
                            <button  className={"bg-secondary text-white px-14 py-4 rounded mt-4"}>
                                ADD A CARD
                            </button>
                            </div>
                        </div>
                    </article>
                  </section>
                  <section className={"w-1/2 flex flex-col gap-6"}>
                    <article className={" py-8 px-4 bg-white text-black rounded"}>
                        <span className={"font-bold text-xl"}>My Contact Details</span>
                        <div className={"flex flex-col mt-2"}>
                            <span className="text-gray-500">
                                First Name
                            </span>
                            <input  type="text" placeholder={"First Name"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                                Last Name
                            </span>
                            <input  type="text" placeholder={"Last Name"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                                Email
                            </span>
                            <input  type="text" placeholder={"Email"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                            phone number
                            </span>
                            <input  type="number" placeholder={"phone number"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <button  className={"bg-secondary text-white px-14 py-4 rounded mt-4"}>
                        update
                        </button>

                    </article>
                    <article className={" py-8 px-4 bg-white text-black rounded"}>
                        <span className={"font-bold text-xl"}>My Active Delivery Address</span>
                        <div className={"flex flex-col mt-2"}>
                            <span className="text-gray-500">
                            Full Name
                            </span>
                            <input  type="text" placeholder={"Full Name"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                            your postal address
                            </span>
                            <input  type="text" placeholder={"Address 1"} className={"border py-3 px-4 rounded-lg w-full"}/>
                            <input  type="text" placeholder={"Address 2"} className={"border py-3 px-4 rounded-lg w-full mt-1"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                            APARTMENT
                            </span>
                            <input  type="text" placeholder={"APARTMENT"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                            City
                            </span>
                            <input  type="text" placeholder={"City"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                            COUNTY/STATE
                            </span>
                            <input  type="text" placeholder={"State"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                            ZIP/POSTal CODE
                            </span>
                            <input  type="text" placeholder={"Zip Code"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                            Country
                            </span>
                            <input  type="text" placeholder={"Country"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <button  className={"bg-secondary text-white px-14 py-4 rounded mt-4"}>
                        update
                        </button>

                    </article>
                  </section>

                </div>






            </section>


        </HomeLayout>
    )
}

export default ProfileArtists;
