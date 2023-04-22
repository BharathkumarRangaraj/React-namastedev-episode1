import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loggin=()=>{
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:''
        },
        
    onSubmit:navigate('/')
    

    })

    
    
    return(
        
        <form onSubmit={formik.handleSubmit}>
            <br></br>
            <label htmlFor="firstname">First name</label>
            <input type="text"
            id='firstname'
            name='firstname'
            
           
            onChange={formik.onChange}


            
            />
            <br></br>
            <br></br>
             <label htmlFor="lastname">lastname</label>
            <input type="text"
            id='lastname'
            name='lastname'
            onChange={formik.onChange}
        


            
            />
            <br></br>
            <br></br>
             <label htmlFor=" email">First name</label>
            <input type=" email"
            id=' email'
            name=' email'
            onChange={formik.onChange}
            


            
            />
            <br>
            </br>
            <br></br>
            <button type="submit">Submit</button>

            

        </form>
    )
}
export default Loggin;