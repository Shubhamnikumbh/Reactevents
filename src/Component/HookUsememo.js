import React, { useMemo, useState } from 'react'





function HookUsememo() {


    const [count, setcount] = useState({name:1, id:'abcd'})

    const [number, setnumber] = useState(5)
    
   const[show,setShow]=useState(true);

   const [look, setlook] = useState(false)
  return (
    <div>
        <div>
        <p>{number}</p>
      <button onClick={() => {
        setnumber((pre) => pre + 1)
      }}>Increment</button>
        </div>
    
      

      <div>
        {
         show ? <h1>Hello Shubham</h1> : null
        }
        <button onClick={()=>setShow(!show)}>Toggle</button>
      </div>
      <div >
        <div style={{backgroundColor: 'bisque'}}>
        {
            look ? <h1>Shahrukh khan</h1> : null
        }
        </div>
        
         <button onClick={()=>setlook(!look)}>Toggle</button>
      </div>
    </div>
  )
}

export default HookUsememo
