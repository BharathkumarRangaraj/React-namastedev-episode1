import { Swiggy_URL } from "../Utils/Constants";
const Rescard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data
    return(
        <div className='cardss'>
            <img className='res-card-image' src={Swiggy_URL +resData.data.cloudinaryImageId}/>
            <div className="cardss-content">
            <h4>{name}</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>${costForTwo/100} </h4>
            <h4>{deliveryTime} Minutes</h4>
            </div>
        </div>
    )
}
export default Rescard;