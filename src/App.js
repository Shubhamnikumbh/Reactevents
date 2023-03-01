
import './App.css';
import React, { useEffect, useState } from 'react'
import './Box.css'



function App() {

  const [data, setdata] = useState("Rahul ")
  const [users, setusers] = useState([])
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
  
var counter = 0 ;
  
const counter = () => {
  count = count + 1 ;
  console.log(count)
}

  return (
    <div>



<div>
 {
  users.map((user) => {
    return (
      <div className='box'>
    <p>{user.name}</p>
    <p>{user.username}</p>
      </div>
    
    )
  })
 }
 <button onClick={mapdata}>see mapped array</button>
</div>
    </div>
  );
}

export default App;
