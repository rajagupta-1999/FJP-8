import React, { useEffect, useState } from 'react'

function Ue3() {

       const [count , setCount] = useState(0)
       const [name , setName] = useState('aman')


       useEffect(()=>{
              document.title = `this is my Title ${count} ${name}`
              console.log('Use Effect')
       } , [name]) // this works as componentdidmount and componentdidUpdate
  return (
    <div>
           <h1>This is my Counter {count}</h1>
           <button onClick={()=> setCount(count+1)}>+</button>
           <button onClick={()=> setCount(count-1)}>-</button>
           <button onClick={()=>setName('Ankiet')}>ChangeName</button>
           <h1>{name}</h1>
        
    </div>
  )
}

export default Ue3