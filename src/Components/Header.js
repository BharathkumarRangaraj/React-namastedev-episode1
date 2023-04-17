import { CDN_URL } from "../Utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    const[isLoggedin,setisLoggedin]=useState(false)
    return(
        <div className='header'>
            <div>
                <a href="/">
                <img className='image' src={CDN_URL}/>
                </a>
            </div>
            

            <div className='navitems'>
                <ul>
                <li></li>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>Cart</li>
                    {/*login authuntcaton*/}
                    <li>{isLoggedin===true ?<button onClick={()=>setisLoggedin(false)} style={{paddingRight:'5px'}}>log out</button>:<button style={{paddingRight:'5px'}} onClick={()=>setisLoggedin(true)}>login</button>}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;