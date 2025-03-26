import Counter from './counter';
import Batsman from './Batsman';
import Users from './User';
import './App.css'
import { Suspense } from 'react';

//M-1
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())


function App() {
  //API 
  const fetchPhotos= fetchPhotos();


  //Different ways to handle events in React
  //Method-1 
  function handleClick() {
    alert("I am clicked");
  }

  //Method-3 (arrow function mostly we use this)
  const handleClick3 = () => {
    alert("I am arrow function");
  }

  // practice 
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback={<h3>loading...........</h3>}>
      <Users fetchUsers={fetchUsers} ></Users>
      </Suspense>
      <Counter></Counter>
      <Batsman></Batsman>
      {/* <button onclick="handleClick()" >Click Me</button> */}
      <button onClick={handleClick} >Click Me</button>
      {/* //Method-2 not usable more */}
      <button onClick={ function handleClick2(){
        alert("I am under the function")
      }} >Click Me 2</button>
      <button onClick={handleClick3} >Click Me 3</button>
      <button onClick={() => alert("Click 4")} >Click Me 4</button>

      {/* arrow Function wrap */}
      <button onClick={() => handleAdd5(7)} >Click Add 5</button>
    </>
  )
}

export default App
