// @flow 
import React,{useState} from 'react';
import {LOGINUSER} from "../../../hooks/useApi"
type Props = {
    
};
 const AccountLogin = (props: Props) => {
    const [email,setEmail] = useState<any>("")
const [password,setPassword] = useState<any>("")
const loginUser = (e:any) =>{
  e.preventDefault();
  e.stopPropagation();
        const ILOGINDATA = {
                email:email,
                password:password,
        }
        LOGINUSER(ILOGINDATA).then((res:any)=>{
            if(res.status === 200 && res.statusText === "OK"){
                localStorage.setItem("__to_ken",res.data)
                window.location.href = "/account";
            }
        });
}
    return (
        <section className='flex'>
            <aside className='bg-primary-dark  w-1/5 px-14 py-16 h-screen'>
                <div className='border-b border-gray-600 flex justify-between items-center py-4 cursor-pointer'>
                    <span>My information</span>
                    <span>
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_411_849)">
                        <path d="M9 5.00013C9 5.21336 8.92676 5.42669 8.78027 5.58919L5.03027 9.75586C4.7373 10.0814 4.2627 10.0814 3.96973 9.75586C3.67676 9.43034 3.67676 8.903 3.96973 8.57747L7.19062 5.00013L3.97031 1.42201C3.67734 1.09649 3.67734 0.569143 3.97031 0.243623C4.26328 -0.0818987 4.73789 -0.0818987 5.03086 0.243623L8.78086 4.41029C8.92734 4.57305 9 4.78659 9 5.00013Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_411_849">
                        <rect width="10" height="12" fill="white" transform="translate(0 10) rotate(-90)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </span>
                </div>
                <div className='border-b border-gray-600 flex justify-between items-center py-4 cursor-pointer'>
                    <span>Photos & videos of me</span>
                    <span>
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_411_849)">
                        <path d="M9 5.00013C9 5.21336 8.92676 5.42669 8.78027 5.58919L5.03027 9.75586C4.7373 10.0814 4.2627 10.0814 3.96973 9.75586C3.67676 9.43034 3.67676 8.903 3.96973 8.57747L7.19062 5.00013L3.97031 1.42201C3.67734 1.09649 3.67734 0.569143 3.97031 0.243623C4.26328 -0.0818987 4.73789 -0.0818987 5.03086 0.243623L8.78086 4.41029C8.92734 4.57305 9 4.78659 9 5.00013Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_411_849">
                        <rect width="10" height="12" fill="white" transform="translate(0 10) rotate(-90)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </span>
                </div>
                <div className='border-b border-gray-600 flex justify-between items-center py-4 cursor-pointer'>
                    <span>My biography</span>
                    <span>
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_411_849)">
                        <path d="M9 5.00013C9 5.21336 8.92676 5.42669 8.78027 5.58919L5.03027 9.75586C4.7373 10.0814 4.2627 10.0814 3.96973 9.75586C3.67676 9.43034 3.67676 8.903 3.96973 8.57747L7.19062 5.00013L3.97031 1.42201C3.67734 1.09649 3.67734 0.569143 3.97031 0.243623C4.26328 -0.0818987 4.73789 -0.0818987 5.03086 0.243623L8.78086 4.41029C8.92734 4.57305 9 4.78659 9 5.00013Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_411_849">
                        <rect width="10" height="12" fill="white" transform="translate(0 10) rotate(-90)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </span>
                </div>
                <div className='border-b border-gray-600 flex justify-between items-center py-4 cursor-pointer'>
                    <span>My CV</span>
                    <span>
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_411_849)">
                        <path d="M9 5.00013C9 5.21336 8.92676 5.42669 8.78027 5.58919L5.03027 9.75586C4.7373 10.0814 4.2627 10.0814 3.96973 9.75586C3.67676 9.43034 3.67676 8.903 3.96973 8.57747L7.19062 5.00013L3.97031 1.42201C3.67734 1.09649 3.67734 0.569143 3.97031 0.243623C4.26328 -0.0818987 4.73789 -0.0818987 5.03086 0.243623L8.78086 4.41029C8.92734 4.57305 9 4.78659 9 5.00013Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_411_849">
                        <rect width="10" height="12" fill="white" transform="translate(0 10) rotate(-90)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </span>
                </div>
                <div className='border-b border-gray-600 flex justify-between items-center py-4 cursor-pointer'>
                    <span>My portfolio & artworks</span>
                    <span>
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_411_849)">
                        <path d="M9 5.00013C9 5.21336 8.92676 5.42669 8.78027 5.58919L5.03027 9.75586C4.7373 10.0814 4.2627 10.0814 3.96973 9.75586C3.67676 9.43034 3.67676 8.903 3.96973 8.57747L7.19062 5.00013L3.97031 1.42201C3.67734 1.09649 3.67734 0.569143 3.97031 0.243623C4.26328 -0.0818987 4.73789 -0.0818987 5.03086 0.243623L8.78086 4.41029C8.92734 4.57305 9 4.78659 9 5.00013Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_411_849">
                        <rect width="10" height="12" fill="white" transform="translate(0 10) rotate(-90)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </span>
                </div>
                <div className='border-b border-gray-600 flex justify-between items-center py-4 cursor-pointer'>
                    <span>My banking details NEW</span>
                    <span>
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_411_849)">
                        <path d="M9 5.00013C9 5.21336 8.92676 5.42669 8.78027 5.58919L5.03027 9.75586C4.7373 10.0814 4.2627 10.0814 3.96973 9.75586C3.67676 9.43034 3.67676 8.903 3.96973 8.57747L7.19062 5.00013L3.97031 1.42201C3.67734 1.09649 3.67734 0.569143 3.97031 0.243623C4.26328 -0.0818987 4.73789 -0.0818987 5.03086 0.243623L8.78086 4.41029C8.92734 4.57305 9 4.78659 9 5.00013Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_411_849">
                        <rect width="10" height="12" fill="white" transform="translate(0 10) rotate(-90)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </span>
                </div>
            </aside>
            <section className='w-4/5'>
                <header className='bg-primary py-10'>
                    <h1 className='text-4xl font-bold pl-10'>ADORUART Identification</h1>
                </header>
                <main className=''>

                <form className='pl-10 pr-32 mt-20'>
                    <div className={"flex flex-col"}>
                        <span className='text-black'>
                            YOUR EMAIL
                        </span>
                        <input onChange={(e:any)=>setEmail(e.target.value)} type="email" placeholder={"Your Email"} className={"mt-2 text-black border py-3 px-4 rounded w-full"}/>
                    </div>
                    <div className={"flex flex-col mt-8"}>
                        <span className='text-black'>
                            YOUR PASSWORD
                        </span>
                        <input onChange={(e:any)=>setPassword(e.target.value)} type="password" placeholder={"Your PASSWORD"} className={"mt-2 text-black border py-3 px-4 rounded w-full"}/>
                    </div>
                    <div className={"mt-16"}>
                        <button onClick={(e:any)=>loginUser(e)} className={"bg-secondary text-lg py-6 w-64 rounded-sm   text-white"}>
                            LOGIN
                        </button>
                    </div>
                    <div className={"mt-10"}>
                        <a href='' className='text-gold font-bold'>
                        Forgot your password? Click here
                        </a>
                    </div>
                </form>

                </main>

            </section>
        </section>
    );
};
export default AccountLogin;