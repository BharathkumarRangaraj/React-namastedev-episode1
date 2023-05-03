
import {useState} from 'react'
const Section=({title,Descrton,setisvisible,isvisible})=>{
    return(
        <div className="border border-black m-2 p-2 "> 
            <h1 className="font-bold">{title}</h1>{
             isvisible ?   <button 
             onClick={
                 ()=>setisvisible(false)}> Hide{isvisible && <h1>{Descrton}</h1>}
             </button> :
             <button 
             onClick={
                 ()=>setisvisible(true)}>View{isvisible && <h1>{Descrton}</h1>}
             </button>
            }
        </div>
    )}

const ɪnstamart=()=>{
    const [visibleSection,setvisibleSection]=useState('about');
    return(
        <div>
            <h1 className="font-bold p-2 m-2">Instamart</h1>
            <Section title={'About InstaMart'}
            Descrton={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'}
            isvisible={visibleSection==='about'}
            setisvisible={()=>
            setvisibleSection('about')}
            />
            <Section title={'Contact InstaMart'}
            Descrton={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'}
            isvisible={visibleSection==='contact'}
            setisvisible={()=>
            setvisibleSection('contact')}
            />
            <Section title={'Career InstaMart'}
            Descrton={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'}
            isvisible={visibleSection==='career'}
            setisvisible={()=>
            setvisibleSection('career')}
            />
        </div>
    )
}
export default ɪnstamart;