import './App.css';
import { useReducer, useRef } from 'react';
import Task from './Components/Task';

// function Reducer(state,action) {
  
//   switch (action.type) {
//     case 'increment':
//       console.log("Inrement");
//       return{count:state.count+1}
      
//     case 'decrement':
//       console.log("decrement");
//       return {count:state.count-1}
  
//     default:
//       break;
//   }
// }

// export const App=()=>{
// const [state,setState]=useReducer(Reducer,{count:0})
//   return (
//     <>
//       {state.count}
//       <button onClick={()=>setState({type:'increment'})}>+</button>
//       <button onClick={()=>setState({type:'decrement'})}>-</button>
//     </>
//   );

function App() {
  const inp=useRef()
  const showbutton=useRef()

  function showValue() {
    console.log(inp.current.value);
    console.log(showbutton.current.textContent);
  }


  return (
    <>
    <input type="text" ref={inp}/>
    <button onClick={showValue} ref={showbutton}>Show</button>
    <Task/>
    </>

  )
  
}
export default App;
