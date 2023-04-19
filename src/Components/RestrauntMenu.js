import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Swiggy_URL } from "../Utils/Constants";
import { CDN_URL } from "../Utils/Constants";


const RestrauntMenu=()=>{
    const [res,setres]=useState(null);{/*null not mentned wll get an error to use obj.values*/}
    const {id}=useParams();
    useEffect(()=>{
        getRestrauntinfo();
    },[])

    async function getRestrauntinfo(){
        const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId='+id);
    const json= await data?.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setres(json.data.cards[0].card.card.info)
    }
    return(
        <div>
            <h1> id is :{id}</h1>
            <div>
                

                <h1>{res?.name}</h1>
                <img src={Swiggy_URL+res?.cloudinaryImageId}/>
                <h2>{res?.city}</h2>
                <h3>{res?.avgRating} stars</h3>
                <h3>{res?.cuisines.join(',')}</h3>
                <h4>{res?.itemCards?.name}</h4>
                <h4>${res?.costForTwo/100} </h4>
            <h4>{res?.totalRatings}+Ratings</h4>

                

            </div>
            <div>
                {}
            </div>
        
        </div>
    )
}
export default RestrauntMenu;