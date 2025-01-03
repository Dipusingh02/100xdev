
// this is memo method to rerendiring a=only those which is updated but it also render the not updated element wiht faste
import {React,useState,memo} from 'react'
const Header=memo(function Header({title}){
  return<div>
  {title}
  </div>
})

const Rerenderingwithmemo = () => {
  const [title,setTitle]=useState("dipu")
  function Header1(){
    setTitle("my name is  "+ Math.random())
  
}
  return (
    <div>
    <button onClick={Header1}>click to change me</button>
    <Header title={title}/>
    <Header title={"dipu"}/>
    <Header title={"dipu"}/>
    <Header title={"dipu"}/>
    </div>
  )
}

export default Rerenderingwithmemo
