
import './App.css';
import React, { useEffect, useState } from 'react'
import './Box.css'
import HookUsememo from './Component/HookUsememo';



function App() {

  const [data, setdata] = useState("Rahul ")
  const [users, setusers] = useState([])
const [screenWidth, setscreenWidth] = useState(window.innerWidth)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>setusers(json))
  }, [])
  
const mapdata =() => {
  let mappedarray = users.filter((user) => {
    return user.id < 5 ;
  })
    console.log
    (mappedarray)
}
  
useEffect(() => {
  
  window.addEventListener ('resize',() => {
    setscreenWidth(window.innerWidth);
  })
}, [data])
  




  return (
    <div>

<h1>{data}</h1>
<button onClick={() => {
  setdata("Shahrukh")
}}>Click me</button>


<div>
 {/* {
  users.map((user) => {
    return (
      <div className='box'>
    <p>{user.name}</p>
    <p>{user.username}</p>
      </div>
    
    )
  })
 } */}
 <button onClick={mapdata}>see mapped array</button>
<p>{screenWidth}</p>
</div>

<div>
  
</div>

<HookUsememo/>
    </div>
  );
}

export default App;
