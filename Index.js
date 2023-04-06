import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body'


const Applayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>

        </div>
    )

}




//const heading=React.createElement('h1',{id:"headings"},'hello from reacttt');
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>)
