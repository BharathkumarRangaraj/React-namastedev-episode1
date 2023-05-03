import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Error from './src/Components/Error';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Contact from './src/Components/Contact';
import Body from './src/Components/Body';
import Footer from './src/Components/Footer';
import Header from './src/Components/Header';
import RestrauntMenu from './src/Components/RestrauntMenu';
import Loggin from './src/Components/Login';
import Profile from './src/Components/Profile';
import Shimmer from './src/Components/Shimmer';
import ɪnstamart from './src/Components/ɪnstamart';
import UserContext from './src/Utils/UserContext';
import store from './src/Utils/Store';
import { Provider } from 'react-redux';
import Cart from './src/Components/Cart';

const Aboutt=lazy(()=>import('./src/Components/About'))


const Applayout=()=>{
    const[user, setuser]=useState({
        name:'BHARATH',
        gmail:'rbharathkumar12@gmail.com',
        contact:'6380494790'
    });
    return(
        <UserContext.Provider value={{user:user,
        setuser:setuser}}>
            <Provider store={store}>
        
        
            <Header/>
            <Outlet/>
            <Footer/>
            </Provider>
        
        </UserContext.Provider>
    )}

const routerApp=createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/about',
                element:
                <Suspense fallback={<Shimmer/>}><Aboutt/></Suspense>,
                children:[{
                    path:'profile',
                    element:
                    <Profile/>
                }]
        
                   },
                   {
                    path:'/',
                    
                    element:<Body/>,
            
                       },
                       {
                        path:'/restraunts/:id',
                        element:<RestrauntMenu/>,
                       },
                       {
                        path:'/login',
                        element:<Loggin/>,
                       },
            {
                path:'/contact',
                element:<Contact/>
        
                },
                {
                    path:'/instamart',
                    element:<ɪnstamart/>
            
                    },
                    {
                        path:'/cart',
                        element:<Cart/>
                
                        },
        ]
        }

])


//const heading=React.createElement('h1',{id:"headings"},'hello from reacttt');
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routerApp}/>)
