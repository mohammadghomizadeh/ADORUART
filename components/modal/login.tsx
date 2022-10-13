// @flow
import * as React from 'react';
import axios from "axios";
import {AUTH_URL} from "@/constant";
import {toast} from "react-toastify";
import {LOGINUSER} from "../../hooks/useApi"
type Props = {
toggle:any,
    close:any
    createAccount:any
};
export const ModalLogin = (props: Props) => {
    const {toggle,close,createAccount} = props;
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const LoginAccount =  (e:any) =>{
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
       <>
           {
               toggle && (
                   <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                       <div className="fixed inset-0 bg-gray-400  opacity-50 transition-opacity z-10"></div>
                       <div className="fixed z-10 inset-0 overflow-y-auto">
                           <div className="flex flex-col items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                               <div className={"flex mt-3 relative z-50"}>
                                   <section className={"md:flex gap-2 bg-white border-2 border-nft p-2 relative"}>
                                        <span className={"absolute -top-4 -right-4 cursor-pointer"} onClick={close}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="16" r="15" fill="white" stroke="#7B7575" strokeWidth="2"/>
                                            <path d="M17.408 15.9999L21.708 11.7099C21.8963 11.5216 22.0021 11.2662 22.0021 10.9999C22.0021 10.7336 21.8963 10.4782 21.708 10.2899C21.5197 10.1016 21.2643 9.99585 20.998 9.99585C20.7317 9.99585 20.4763 10.1016 20.288 10.2899L15.998 14.5899L11.708 10.2899C11.5197 10.1016 11.2643 9.99585 10.998 9.99585C10.7317 9.99585 10.4763 10.1016 10.288 10.2899C10.0997 10.4782 9.99389 10.7336 9.99389 10.9999C9.99389 11.2662 10.0997 11.5216 10.288 11.7099L14.588 15.9999L10.288 20.2899C10.1943 20.3829 10.1199 20.4935 10.0691 20.6154C10.0183 20.7372 9.99219 20.8679 9.99219 20.9999C9.99219 21.132 10.0183 21.2627 10.0691 21.3845C10.1199 21.5064 10.1943 21.617 10.288 21.7099C10.3809 21.8037 10.4915 21.8781 10.6134 21.9288C10.7353 21.9796 10.866 22.0057 10.998 22.0057C11.13 22.0057 11.2607 21.9796 11.3826 21.9288C11.5044 21.8781 11.615 21.8037 11.708 21.7099L15.998 17.4099L20.288 21.7099C20.3809 21.8037 20.4915 21.8781 20.6134 21.9288C20.7353 21.9796 20.866 22.0057 20.998 22.0057C21.13 22.0057 21.2607 21.9796 21.3826 21.9288C21.5044 21.8781 21.615 21.8037 21.708 21.7099C21.8017 21.617 21.8761 21.5064 21.9269 21.3845C21.9776 21.2627 22.0038 21.132 22.0038 20.9999C22.0038 20.8679 21.9776 20.7372 21.9269 20.6154C21.8761 20.4935 21.8017 20.3829 21.708 20.2899L17.408 15.9999Z" fill="#7B7575"/>
                                            </svg>
                                        </span>
                                       <section className={" bg-bodyLogin"}>
                                           <div className={"flex flex-col justify-center items-center  px-20 py-8"}>
                                                <span>
                                                <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="44" cy="44" r="43" fill="#E5E2E2" stroke="#D4A551" strokeWidth="2"/>
                                                    <path d="M62.9493 57.7594C61.9177 55.3158 60.4207 53.0962 58.5415 51.2242C56.6681 49.3468 54.4489 47.85 52.0064 46.8164C51.9845 46.8055 51.9626 46.8 51.9408 46.7891C55.3478 44.3281 57.5626 40.3195 57.5626 35.7969C57.5626 28.3047 51.4923 22.2344 44.0001 22.2344C36.5079 22.2344 30.4376 28.3047 30.4376 35.7969C30.4376 40.3195 32.6525 44.3281 36.0595 46.7945C36.0376 46.8055 36.0158 46.8109 35.9939 46.8219C33.5439 47.8555 31.3454 49.3375 29.4587 51.2297C27.5814 53.1031 26.0845 55.3223 25.0509 57.7648C24.0355 60.1561 23.4879 62.7198 23.4376 65.3172C23.4362 65.3756 23.4464 65.4336 23.4677 65.488C23.4891 65.5423 23.5211 65.5919 23.5618 65.6336C23.6026 65.6754 23.6513 65.7086 23.7051 65.7313C23.759 65.754 23.8168 65.7656 23.8751 65.7656H27.1564C27.397 65.7656 27.5884 65.5742 27.5939 65.3391C27.7033 61.1172 29.3986 57.1633 32.3954 54.1664C35.4962 51.0656 39.6142 49.3594 44.0001 49.3594C48.3861 49.3594 52.504 51.0656 55.6048 54.1664C58.6017 57.1633 60.297 61.1172 60.4064 65.3391C60.4118 65.5797 60.6033 65.7656 60.8439 65.7656H64.1251C64.1835 65.7656 64.2413 65.754 64.2951 65.7313C64.3489 65.7086 64.3977 65.6754 64.4384 65.6336C64.4792 65.5919 64.5112 65.5423 64.5325 65.488C64.5539 65.4336 64.5641 65.3756 64.5626 65.3172C64.5079 62.7031 63.9665 60.1602 62.9493 57.7594ZM44.0001 45.2031C41.49 45.2031 39.1275 44.2242 37.3501 42.4469C35.5728 40.6695 34.5939 38.307 34.5939 35.7969C34.5939 33.2867 35.5728 30.9242 37.3501 29.1469C39.1275 27.3695 41.49 26.3906 44.0001 26.3906C46.5103 26.3906 48.8728 27.3695 50.6501 29.1469C52.4275 30.9242 53.4064 33.2867 53.4064 35.7969C53.4064 38.307 52.4275 40.6695 50.6501 42.4469C48.8728 44.2242 46.5103 45.2031 44.0001 45.2031Z" fill="#D4A551"/>
                                                 </svg>
                                            </span>
                                               <span className={"text-black font-extrabold text-2xl"}>
                                               Login to my user account
                                            </span>
                                           </div>
                                           <div className={"flex flex-col gap-y-5 text-left px-10 mt-4"}>
                                               <div>
                                                        <span className={"text-title flex flex-col text-sm"}>
                                                        YOUR EMAIL
                                                        </span>
                                                   <input onChange={(e:any)=>setEmail(e.target.value)} required={true} type="text" placeholder={"Your Email"} className={"mt-1 placeholder-input text-black text-sm w-full py-2 rounded px-2"}/>
                                               </div>
                                               <div>
                                                        <span className={"text-title flex flex-col text-sm"}>
                                                        YOUR PASSWORD
                                                        </span>
                                                   <input onChange={(e:any)=>setPassword(e.target.value)} required={true} type="password" placeholder={"Your Password"} className={"mt-1 placeholder-input text-black text-sm w-full py-2 rounded px-2"}/>
                                               </div>
                                           </div>
                                           <div className="flex items-center px-10 py-6">
                                               <div className="flex items-center">
                                                   <input id="link-checkbox" type="checkbox" value=""
                                                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 !block" />
                                                   <label htmlFor="link-checkbox"
                                                          className="ml-2 text-sm font-medium text-title ">
                                                       Keep me logged in
                                                   </label>
                                               </div>
                                           </div>
                                           <div className={"px-32 my-4"}>
                                               <button onClick={(e:any)=>LoginAccount(e)} className={"bg-secondary text-lg py-4 w-full rounded-sm   text-white"}>
                                                   VALIDATE
                                               </button>
                                           </div>
                                           <div>
                                                <span className={"text-gold underline"}>
                                                    FORGOT YOUR PASSWORD?
                                                </span>
                                           </div>
                                           <div className={"mt-6"}>
                                                <span className={"text-title"}>
                                                    Still don't have an account?
                                                </span>
                                           </div>
                                           <div className={"my-6"}>
                                                <span onClick={createAccount} className={" font-bold border-b underline text-title cursor-pointer"}>
                                                   SIGN UP
                                                </span>
                                           </div>
                                       </section>
                                   </section>
                               </div>
                           </div>
                       </div>
                   </div>
               )
           }
       </>

    );
};
