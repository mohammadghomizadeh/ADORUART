import React,{useState} from "react";
import Image from "next/image";
import HomeLayout from "@/components/layouts/Home";
import HomeStyle from "@/styles/pages/Home.module.scss";
import {AiOutlineExclamationCircle} from "react-icons/ai"
import Link from "next/link";
import {LOGINUSER} from "../../../hooks/useApi";
function Login()  {
const [email,setEmail] = useState<any>("")
const [password,setPassword] = useState<any>("")
const loginUser = (e:any) =>{
  e.preventDefault();
  e.stopPropagation();
        const ILOGINDATA = {
                email:email,
                password:password,
        }
        LOGINUSER(ILOGINDATA).then((res=>{
            if(res.status === 200 && res.statusText === "OK"){
                localStorage.setItem("__to_ken",res.data)
                window.location.href = "/profile";
            }
        })).catch((err:any)=>{
            console.log(err);
        })
}
    return (
        <HomeLayout title={"Home"}>
            <div className="relative flex py-10 items-center px-20 mt-10">
                <div className="flex-grow border-t border-gold"></div>
                <span className="flex-shrink mx-4 text-black text-2xl font-bold">Login</span>
                <div className="flex-grow border-t border-gold"></div>
            </div>

            <section className={"text-black px-20 bg-editbg flex flex-col items-center justify-center gap-10 py-20"}>

                    <div className={"flex flex-col"}>
                        <span>
                        YOUR EMAIL
                    </span>
                        <input onChange={(e:any)=>setEmail(e.target.value)} type="email" placeholder={"Your Email"} className={"py-3 px-4 rounded-lg w-648px"}/>
                    </div>
                    <div className={"flex flex-col"}>
                            <span>
                            YOUR PASSWORD
                        </span>
                        <input onChange={(e:any)=>setPassword(e.target.value)} type="password" placeholder={"Your Password"} className={"py-3 px-4 rounded-lg w-648px"}/>
                    </div>
                    <div className={" flex gap-2 w-648px"}>
                            <input type="checkbox" />
                            <span> Keep me logged in </span>
                    </div>
                <div>
                    <button onClick={(e:any)=>loginUser(e)} className={"bg-primary text-white px-14 py-4 rounded"}>
                        VALIDATE
                    </button>
                </div>
                <div>
                        <a href={"/auth/register"} className={"text-gold uppercase underline"}>CREAT AN ACCOUNT</a>
                </div>


            </section>


        </HomeLayout>
    )
}

export default Login;
