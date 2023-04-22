import { useState,useEffect } from "react"; 
import { RestrauntMenu_URL } from "../Utils/Constants";


const useRestrauntMenu=(id)=>{

    const [res,setres]=useState(null);

    useEffect(()=>{
        getRestrauntinfo();
    },[])

    async function getRestrauntinfo(){
        const data=await fetch(RestrauntMenu_URL+id);
    const json= await data?.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setres(json?.data?.cards[0]?.card?.card?.info)
    }
    return res;
}
export default useRestrauntMenu;