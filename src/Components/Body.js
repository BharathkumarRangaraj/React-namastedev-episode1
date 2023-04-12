import Rescard from "./Rescard";
import Reslist from '../Utils/Mockdata';
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



function Searchdata(searchinput,listofRestraunt){
    var datas=listofRestraunt.filter((ress)=>
        ress?.data?.name?.includes(searchinput)    
           
)
    return datas;
    
}

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
    
    return (listofRestraunt.length===0)?<Shimmer/>:(
        <div className='body'>
            <div className='filter-btn'>
                <button onClick={()=>{
                const filtered_cards=listofRestraunt.filter((res)=>res.data.avgRating>4);
                setfiternedRestraunt(filtered_cards)

                }
                } >
                    
                filter
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
   fiternedRestraunt.map((res)=> <Rescard key={res.data.id} resData={res}/>
  )
}
            
 </div>
 </div>
    )
}
export default Body;