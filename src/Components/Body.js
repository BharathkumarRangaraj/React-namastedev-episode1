import Rescard from "./Rescard";
import Reslist from '../Utils/Mockdata';
import { useState } from "react";

const Body=()=>{
    const[listofRestraunt,setlistofRestraunt]=useState(Reslist);
    return(
        <div className='body'>
            <div className='filter-btn'>
                <button onClick={()=>{
                const filtered_cards=listofRestraunt.filter((res)=>res.data.avgRating>4);
                setlistofRestraunt(filtered_cards)

                }
                } >filter</button>
               </div>
               <div className='rescard-container'>
{
  listofRestraunt.map((res)=> <Rescard key={res.data.id} resData={res}/>
  )
}
            
 </div>
 </div>
    )
}
export default Body;