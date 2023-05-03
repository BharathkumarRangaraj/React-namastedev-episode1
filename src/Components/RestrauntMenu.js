
import { useParams } from "react-router-dom";
import { Swiggy_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../Utils/useRestrauntMenu";
import { useDispatch,useSelector } from "react-redux";
import store from "../Utils/Store";
import { addItem } from "../Utils/CartSlice";

const RestrauntMenu=()=>{
   {/*null not mentned wll get an error to use obj.values*/}
    const {id}=useParams();
    const rest=useRestrauntMenu(id);
    const dispatch=useDispatch();


    const handlechange=()=>{
        dispatch(addItem('grapes'))


    }    
    return !rest?(<Shimmer/>):(
        <div className="flex">
             
            <div className="px-4 border border-black shadow-xl m-2 p-2 w-60 h-100  max-h-full border-color: currentColor; bg-pink-100  hover:bg-white ">
            
                <img src={Swiggy_URL+rest?.cloudinaryImageId}/>
                <h1 className="font-bold">{rest?.name}</h1>
                <h2>{rest?.city}</h2>
                <h3>{rest?.avgRating} stars</h3>
                <h3>{rest?.cuisines.join(',')}</h3>
                <h4>{rest?.itemCards?.name}</h4>
                <h4>${rest?.costForTwo/100} </h4>
            <h4>{rest?.totalRatings}+Ratings</h4>

                

            </div>
            <div>
                <button className="bg-green-300 cursor-pointer" onClick={handlechange}> Add item</button>
            </div>
            <div>
            
            </div>
        
        </div>
    )
}
export default RestrauntMenu;