import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    const{status,statusText}=err;
    return(
        <div>

            
            <h1>oops!!</h1>
            <p>Something went wrong !!</p>
            <h2>{status + ':'+ statusText}</h2>
        </div>
    )
}

export default Error;