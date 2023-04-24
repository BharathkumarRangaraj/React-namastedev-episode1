import { CDN_URL } from "../Utils/Constants";

import { Link } from "react-router-dom";


const Header=()=>{
   

   
    
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
    
                    <li><Link to='/login'><button>Login</button></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;