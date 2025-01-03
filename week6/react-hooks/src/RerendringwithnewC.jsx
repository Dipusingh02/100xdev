// This is making another parent component which ever handle rerendring 

import {React,useState} from 'react';
function Header({title}){
  return<div>
  {title}
  </div>
}

function Headerbutton(){
  const [title,setTitle]=useState("dipu")
  function Header1(){
    setTitle("my name is  "+ Math.random())
  
}
  return(<div>
<Header title={title}></Header>
    <button onClick={Header1}>click to change me</button>
  </div>)
}

const RerendringwithnewC = () => {
  const [count , setCount]=useState(0);
 
const funcs=(count)=>{
  console.log(count);
}
  return (
    <div>
    <button onClick={() =>{ setCount(count + 1);console.log(count);funcs(count); }} >Counter {count}</button>
<Headerbutton/>
<Header title={"dipu"}/>
    </div>
  )
}


export default RerendringwithnewC
