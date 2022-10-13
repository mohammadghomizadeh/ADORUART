// @flow 
import React,{useState} from 'react';
import {USERINFO_UPDATE} from "../../hooks/useApi";
type Props = {
    data:any;
};
export const AccountDelivery = (props: Props) => {
    const {data}=props;
    const [name,setName] = useState<any>("");
    const [address1,setAddress1] = useState<any>("");
    const [address2,setAddress2] = useState<any>("");
    const [apartment,setApartment] = useState<any>("");
    const [city,setCity] = useState<any>("");
    const [state,setState] = useState<any>("");
    const [postalcode,setPostalCode] = useState<any>("");
    const [country,setCountry] = useState<any>("");
    const updateDelivery = (e:any) =>{
        e.preventDefault();
        e.stopPropagation();
        const IACCOUNTDELIVERYATA = {
            type:"delivery",
            name:name,
            address1:address1,
            address2:address2,
            apartment:apartment,
            city:city,
            state:state,
            postalcode:postalcode,
            country:country,
            uuid:data.uuid
        }
        USERINFO_UPDATE(IACCOUNTDELIVERYATA).then((res:any)=>{

        })
    
    }
    return (
        <article className={" py-8 px-4 bg-white text-black rounded"}>
        <span className={"font-bold text-xl"}>My Active Delivery Address</span>
        <div className={"flex flex-col mt-2"}>
            <span className="text-gray-500">
            Full Name
            </span>
            <input onChange={(e:any)=>setName(e.target.value)}  type="text" placeholder={data.name} className={"border py-3 px-4 rounded-lg w-full"}/>
        </div>
        <div className={"flex flex-col mt-2 "}>
            <span className="text-gray-500">
            your postal address
            </span>
            <input onChange={(e:any)=>setAddress1(e.target.value)}  type="text" placeholder={data.address1} className={"border py-3 px-4 rounded-lg w-full"}/>
        </div>
        <div className={"flex flex-col mt-2 "}>
            <span className="text-gray-500">
            APARTMENT
            </span>
            <input  type="text" onChange={(e:any)=>setAddress2(e.target.value)} placeholder={data.apartment} className={"border py-3 px-4 rounded-lg w-full"}/>
        </div>
        <div className={"flex flex-col mt-2 "}>
            <span className="text-gray-500">
            City
            </span>
            <input  type="text" onChange={(e:any)=>setCity(e.target.value)} placeholder={data.city} className={"border py-3 px-4 rounded-lg w-full"}/>
        </div>
        <div className={"flex flex-col mt-2 "}>
            <span className="text-gray-500">
            COUNTY/STATE
            </span>
            <input  type="text" onChange={(e:any)=>setState(e.target.value)} placeholder={data.state} className={"border py-3 px-4 rounded-lg w-full"}/>
        </div>
        <div className={"flex flex-col mt-2 "}>
            <span className="text-gray-500">
            ZIP/POSTal CODE
            </span>
            <input  type="text" onChange={(e:any)=>setPostalCode(e.target.value)} placeholder={data.postalcode} className={"border py-3 px-4 rounded-lg w-full"}/>
        </div>
        <div className={"flex flex-col mt-2 "}>
            <span className="text-gray-500">
            Country
            </span>
            <input  type="text" onChange={(e:any)=>setCountry(e.target.value)} placeholder={data.country} className={"border py-3 px-4 rounded-lg w-full"}/>
        </div>
        <button onClick={(e:any)=>updateDelivery(e)}  className={"bg-secondary text-white px-14 py-4 rounded mt-4"}>
        Update
        </button>

    </article>
    );
};