

import { Link } from "react-router-dom";
import Ttle from "./Ttle";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";




const Header=()=>{
    const {user,setuser}=useContext(UserContext);
    const cartItem=useSelector(store=>store?.cart?.items);
    console.log(cartItem,'jj');
 
    return(
           <div className="flex bg-orange-200 justify-between drop-shadow-md p-2 m-1 border border-black">
                <Ttle/>
                
                <ul className="flex py-6 justify-evenly">
        
                    <li className="px-2  hover:bg-violet-600 active:bg-violet-700"><Link to='/'>Home</Link> </li>
                    <li className="px-2  hover:bg-violet-600 active:bg-violet-700"><Link to='/contact'>Contact</Link></li>
                    <li className="px-2  hover:bg-violet-600 active:bg-violet-700"><Link to='/about'>About</Link></li>
                    <li className="px-2  hover:bg-violet-600 active:bg-violet-700"><Link to='/instamart'>instamart</Link></li>
                    <li className="px-2  hover:bg-violet-600 active:bg-violet-700"><Link to='/cart'>Cart - {cartItem.length}</Link></li>

                   <input type='text' value={user.name}  onChange= {e=>setuser({name:e.target.value})}/>

    
                    <li className="px-2  hover:bg-violet-600 active:bg-violet-700"><Link to='/login'><button>Login</button></Link></li>
                </ul>
                <div>
                
            </div>
            </div>
            

            
       
    )
}
export default Header;