import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  // let state={
  //   count:0
  // };
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>hi there</h1>
      <Buutoncomponent count={count} setCount={setCount}></Buutoncomponent>
    </div>
  );
};
function Buutoncomponent(props){
  function countf  () {
    props.setCount(props.count + 1);
  };
  return (
    <button onClick={countf}>Counter    {props.count} </button>
  )
}
export default App;
