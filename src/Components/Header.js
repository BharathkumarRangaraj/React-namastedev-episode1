import { CDN_URL } from "../Utils/Constants";
import { useState } from "react";

const Header=()=>{
    const[isLoggedin,setisLoggedin]=useState(false)
    return(
        <div className='header'>
            <div>
                <img className='image' src={CDN_URL}/>
            </div>
            

            <div className='navitems'>
                <ul>
                <li></li>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                    {/*login authuntcaton*/}
                    <li>{isLoggedin===true ?<button onClick={()=>setisLoggedin(false)} style={{paddingRight:'5px'}}>log out</button>:<button style={{paddingRight:'5px'}} onClick={()=>setisLoggedin(true)}>login</button>}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;