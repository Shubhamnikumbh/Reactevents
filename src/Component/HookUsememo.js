import React, { useEffect, useMemo, useState } from 'react'





function HookUsememo() {


    const [count, setcount] = useState(0)

    const [number, setnumber] = useState(5)
    
   const[show,setShow]=useState(true);

   const [look, setlook] = useState(false)

   const [data, setdata] = useState(10)
 

   const norender =useMemo(() =>
   {
    return <div>
      <h1 style={{color:'red'}}>No render again {count}</h1>
      <h1 style={{color:'red'}}>useeffect vs usememo</h1>


    </div>
   },[]
    )

   
  return (
    <div>
        {/* <div>
        <p>{number}</p>
      <button onClick={() => {
        setnumber((pre) => pre + 1)
      }}>Increment</button>
        </div> */}
    
      

      {/* <div>
        {
         show ? <h1>Hello Shubham</h1> : null
        }
        <button onClick={()=>setShow(!show)}>Toggle</button>
      </div> */}
      {/* <div >
        <div style={{backgroundColor: 'bisque'}}>
        {
            look ? <h1>Shahrukh khan</h1> : null
        }
        </div>
        
         <button onClick={()=>setlook(!look)}>Toggle</button>
      </div> */}
      
     {norender}

      
      <h1>Render it again and again {count}</h1>
      <h1>useeffect vs UseMemo</h1>

      <button onClick={() => {
        setcount(count + 1)
      }}>Click me</button>

    </div>
  )
}

export default HookUsememo
