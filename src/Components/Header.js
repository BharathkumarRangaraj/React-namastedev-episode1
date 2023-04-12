import { CDN_URL } from "../Utils/Constants";

const Header=()=>{
    return(
        <div className='header'>
            <div>
                <img className='image' src={CDN_URL}/>
            </div>
            

            <div className='navitems'>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;