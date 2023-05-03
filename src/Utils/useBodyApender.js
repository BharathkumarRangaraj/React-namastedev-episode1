import { useEffect, useState } from "react";
const useBodyAprender=()=>{
    const[listofRestraunt,setlistofRestraunt]=useState([]);
    const[fiternedRestraunt,setfiternedRestraunt]=useState([]);
    useEffect(()=>{
        console.log('useeffect render')
        getrestraunts()
    },[])

    async function getrestraunts(){
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0346606&lng=76.9815489&page_type=DESKTOP_WEB_LISTING');
        const json=await data.json();
        console.log(json)
        setlistofRestraunt(json.data?.cards[2]?.data?.data?.cards);
        setfiternedRestraunt(json.data?.cards[2]?.data?.data?.cards);
    }
    return listofRestraunt,fiternedRestraunt;
}
export default useBodyAprender;