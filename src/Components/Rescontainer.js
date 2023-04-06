import Rescard from "./Rescard";
import Reslist from '../Utils/Mockdata'

const Rescontainer=()=>{
    return(
        <div>
            <div className='card'>


{
  Reslist.map((res)=> <Rescard key={res.data.id} resData={res}/>
  )
}
            
          
           
            </div>

        </div>
    )
}
export default Rescontainer;