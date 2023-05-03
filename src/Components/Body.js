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
        <div >
            <div className="bg-purple-200">
                <button className="bg-yellow-100 border-color:black hover:bg-sky-700 font-medium p-2 m-2" onClick={()=>{
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
                    <button className="hover:bg-violet-600 active:bg-violet-700 bg-pink-100 font-medium m-2" onClick={()=>{
                       const datass=Searchdata(searchinput,listofRestraunt);
                       setfiternedRestraunt(datass);
                    }}>search</button>
                    

                </div>
                
               </div>
               <div className='flex flex-wrap h-300 w-200  border border-black'>
               
{
   fiternedRestraunt.map((res)=> {
   return (!res)?<Shimmer/>:(
    
    <Link to={'/restraunts/'+res.data.id}>
    <Rescard className="flex" key={res.data.id} resData={res}/>
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