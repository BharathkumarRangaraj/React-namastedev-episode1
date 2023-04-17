import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"

const RestrauntMenu=()=>{
    const [res,setres]=useState(null);{/*null not mentned wll get an error to use obj.values*/}
    const {id}=useParams();
    useEffect(()=>{
        getRestrauntinfo();
    },[])

    async function getRestrauntinfo(){
        const data=await fetch('https://www.swiggy.com/restaurants/sree-annapoorna-sathy-road-ganapathy-coimbatore-53562');
    const json= await data.json();
    console.log(json.data);
    setres(json.data)
    }
    return(
        <div>
            <h1> id is :{id}</h1>
        </div>
    )
}
export default RestrauntMenu;