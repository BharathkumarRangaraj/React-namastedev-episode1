import * as React from 'react';




export default function Shimmer() {

  return (
   <div>
      <div className='search-shmmer'></div>
      <br></br>
    <div className='rescard-container'>
      
      
      {Array(15).fill('').map((e,index)=>
         <div className='shmmer-card' key={index} >
            
            

         </div>
      
      
      )}
      
        
    </div>
    </div>
  );
}