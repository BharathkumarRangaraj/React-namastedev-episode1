
import { useEffect,useState } from "react";
import Profile from "./Profile";
import ProfleClass from "./ProfleClass2";
import { json } from "react-router-dom";



const About=()=>{
    const [data,setdata]=useState();
    

    useEffect(()=>{
        console.log('aboutuseeffectasync');
        const timer=setInterval(()=>{
            console.log('setnterval')
        },1000) 

        return()=>{
            clearInterval(timer);
            console.log('setntervalclear')
        }

    },[])
   console.log('about render')
    return(
        <div>
            <h1>Thanks for Contacting</h1>

            
            <Profile name={'bharath'}/>
            <ProfleClass/>
           
        </div>
    )
    
}
export default About;