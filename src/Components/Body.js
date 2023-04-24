import Rescard from "./Rescard";
import Reslist from '../Utils/Mockdata';
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Searchdata from "../Utils/SearchFlter";
import useOnline from "../Utils/useOnline";

const Body=()=>{
    const[listofRestraunt,setlistofRestraunt]=useState([]);
    const[fiternedRestraunt,setfiternedRestraunt]=useState([]);
    const [searchinput,setsearchinput]=useState('');
    
    
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
    {console.log('render')}

    const isOnline=useOnline();

    //early return expresson
    if(!isOnline) {
        return <h1>Ofline,please check your internet !!!</h1>
    }
    if(!listofRestraunt) return  null;
    if(!fiternedRestraunt) return <h1>No Result found for your search...</h1>;
   


    return (fiternedRestraunt.length===0)?<Shimmer/>:(
        <div className='body'>
            <div className='filter-btn'>
                <button onClick={()=>{
                const filtered_cards=listofRestraunt.filter((res)=>res.data.avgRating>4);
                setfiternedRestraunt(filtered_cards)

                }
                } >
                    
                Rating filter
                </button>


                <div className="search container">
                    
                    <input type="text" 
                    placeholder="Search" 
                    className="search-input" 
                    value={searchinput} 
                    onChange={(e)=>{
                        setsearchinput(e.target.value)
                    }}
                    
                    />
                    <button className="search-btn" onClick={()=>{
                       const datass=Searchdata(searchinput,listofRestraunt);
                       setfiternedRestraunt(datass);
                    }}>search</button>
                    

                </div>
                
               </div>
               <div className='rescard-container'>
               
{
   fiternedRestraunt.map((res)=> {
   return (!res)?<Shimmer/>:(
    <Link to={'/restraunts/'+res.data.id}>
    <Rescard key={res.data.id} resData={res}/>
    </Link>

   )
   }
  )
}
            
 </div>
 </div>
    )
}
export default Body;