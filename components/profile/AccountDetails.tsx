// @flow 
import  React,{useState} from 'react';
import {USERINFO_UPDATE} from "../../hooks/useApi";
type Props = {
    data:any;
};
export const AccountDetails = (props: Props) => {
    const {data}=props;
    const [name,setName] = useState<any>("");
    const [lastname,setLastName] = useState<any>("");
    const [email,setEmail] = useState<any>("");
    const [mobile,setMobile] = useState<any>("");
    const updateDetail = (e:any) =>{
        e.preventDefault();
        e.stopPropagation();
        const IACCOUNTDETAILDATA = {
            type:"detail",
            name:name + lastname,
            email:email,
            mobile:mobile,
            uuid:data.uuid,
        }
        USERINFO_UPDATE(IACCOUNTDETAILDATA).then((res:any)=>{
                
        })
    
    }
    return (
        <article className={" py-8 px-4 bg-white text-black rounded"}>
                        <span className={"font-bold text-xl"}>My Contact Details</span>
                        <div className={"flex flex-col mt-2"}>
                            <span className="text-gray-500">
                                First Name
                            </span>
                            <input onChange={(e:any)=>setName(e.target.value)}  type="text" placeholder={data.name ? (data.name):('name')} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                                Last Name
                            </span>
                            <input onChange={(e:any)=>setLastName(e.target.value)}  type="text" placeholder={"Last Name"} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                                Email
                            </span>
                            <input  type="email" onChange={(e:any)=>setEmail(e.target.value)} placeholder={data.email ? (data.email):('email')} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <div className={"flex flex-col mt-2 "}>
                            <span className="text-gray-500">
                            phone number
                            </span>
                            <input  type="number" onChange={(e:any)=>setMobile(e.target.value)} placeholder={data.mobile ? (data.mobile):('phone number')} className={"border py-3 px-4 rounded-lg w-full"}/>
                        </div>
                        <button onClick={(e:any)=>updateDetail(e)}  className={"bg-secondary text-white px-14 py-4 rounded mt-4"}>
                        update
                        </button>

                    </article>
    );
};