import React from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import Link from "next/link";
function Register()  {

    return (
        <HomeLayout title={"Home"}>
            <div className="relative flex py-10 items-center px-20 mt-10">
                <div className="flex-grow border-t border-gold"></div>
                <span className="flex-shrink mx-4 text-black text-2xl font-bold">Create an account</span>
                <div className="flex-grow border-t border-gold"></div>
            </div>

            <section className={"text-black px-20 bg-editbg flex flex-col items-center justify-center gap-10 py-20"}>

                <div className={"flex flex-col"}>
                        <span>
                        YOUR FULL NAME
                    </span>
                    <input type="text" placeholder={"Your Full Name"} className={"py-3 px-4 rounded-lg w-648px"}/>
                </div>
                <div className={"flex flex-col"}>
                            <span>
                            YOUR EMAIL
                        </span>
                    <input type="text" placeholder={"Your Email"} className={"py-3 px-4 rounded-lg w-648px"}/>
                </div>
                <div className={"flex flex-col"}>
                            <span>
                            YOUR PASSWORD
                        </span>
                    <input type="text" placeholder={"Your Password"} className={"py-3 px-4 rounded-lg w-648px"}/>
                </div>
                <div className={" flex gap-2 w-648px"}>
                    <input type="checkbox" />
                    <span> By registering, I accept the General terms and conditions. </span>
                </div>
                <div>
                    <button className={"bg-primary text-white px-14 py-4 rounded"}>
                        CREATE AN ACCOUNT
                    </button>
                </div>
                <div>
                    <Link href={""}>
                        <a className={"text-gold uppercase underline"}>CREAT AN ACCOUNT</a>
                    </Link>
                </div>


            </section>


        </HomeLayout>
    )
}

export default Register;
