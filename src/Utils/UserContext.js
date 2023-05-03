import { createContext } from "react";


const UserContext=createContext({

    user:{
        name:'Bharath',
        gmail:'rbharathkumar12@gmail.com',
        contact:'6380494790'
    }
})

export default UserContext;