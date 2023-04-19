import React from 'react';
import ReactDOM from 'react-dom/client';
import Error from './src/Components/Error';
import About from './src/Components/About';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Contact from './src/Components/Contact';
import Body from './src/Components/Body';
import Footer from './src/Components/Footer';
import Header from './src/Components/Header';
import RestrauntMenu from './src/Components/RestrauntMenu';
import Loggin from './src/Components/Login';


const Applayout=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )}

const routerApp=createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/about',
                
                element:<About/>,
        
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
        
                }
        ]
        }

])


//const heading=React.createElement('h1',{id:"headings"},'hello from reacttt');
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routerApp}/>)
