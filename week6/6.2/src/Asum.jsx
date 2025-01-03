import {React,useMemo,useState} from 'react'
const Asum = () => {
    const [num,setNum]=useState(0)
    const[count,setCount]=useState(0)
    function sumall(){
      console.log('sumall')
      return ((num*(num+1)) / 2);
  }
    let sum =useMemo(()=>sumall(num),[num])
  return (
    <div>
    <input type="number" id="num1"placeholder='enter number '  width={50} onChange={(e)=>setNum(Number(e.target.value))}/>
   <button onClick={()=>{
    setCount(count+1)
   }}>count {count} </button>
    Sum of {num} is {sum};
    </div>
  )
}
export default Asum
