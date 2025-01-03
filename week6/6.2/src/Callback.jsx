import {memo,useState} from 'react'

const Callback = () => {
    const [count, setCount] = useState(0)
    cost [number,setnum]=useState(0)
    
    function logSomething() {
        console.log('Something')
    }
  return (
    <div>
      <ButtonComponent inputfunction={logSomething}/>
      <button onClick={()=>setCount(count+1)}>count {count}</button>
    </div>
  )
}
const ButtonComponent= memo(({inputfunction})=>{
    console.log('ButtonComponent');
    return <div>
    <button onClick={inputfunction}>Click me</button>
    </div>}
)


export default Callback
