import { Swiggy_URL } from "../Utils/Constants";
const FoodItem=({avgRating,name,cloudinaryImageId,cuisines,costForTwo})=>{
    
    
    return(
        <div className=' px-4 shadow-xl m-2 p-2 w-60 h-100  max-h-full border-color: currentColor; bg-pink-100  hover:bg-white border border-black '>
            <img  src={Swiggy_URL +cloudinaryImageId}/>
            <div className="cardss-content">
            <h1 className="font-bold">{name}</h1>
            <h4 className="font-normal">{cuisines.join(', ')}</h4>
            <h4 className="font-normal">{avgRating} Rating</h4>
            <h4 className="font-normal">{costForTwo/100} Rupees </h4>
            
            </div>
        </div>
    )
}
export default FoodItem;