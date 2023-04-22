import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Swiggy_URL } from "../Utils/Constants";
import { CDN_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../Utils/useRestrauntMenu";

const RestrauntMenu=()=>{
   {/*null not mentned wll get an error to use obj.values*/}
    const {id}=useParams();
    const rest=useRestrauntMenu(id)
    
    return !rest?(<Shimmer/>):(
        <div>
            <h1> id is :{id}</h1>
            <div>
                
                <h1>{rest?.name}</h1>
                {console.log('renderrr')}
                <img src={Swiggy_URL+rest?.cloudinaryImageId}/>
                <h2>{rest?.city}</h2>
                <h3>{rest?.avgRating} stars</h3>
                <h3>{rest?.cuisines.join(',')}</h3>
                <h4>{rest?.itemCards?.name}</h4>
                <h4>${rest?.costForTwo/100} </h4>
            <h4>{rest?.totalRatings}+Ratings</h4>

                

            </div>
            <div>
                {}
            </div>
        
        </div>
    )
}
export default RestrauntMenu;