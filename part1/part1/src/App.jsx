import { useState } from "react"


// function Counter({ counter }){
//   return (
//     <div>
//       {
//         counter
//       }
//     </div>
//   )
// }
// function Button({ f , text}){
//   return(
//     <div>
//       <button onClick={f}>{text}</button>
//     </div>
//   )
// }

// function App(){
//   let [counter, setCounter] = useState(0);
//   const incremnet = () => setCounter(counter+1);
//   const reset = () => setCounter(0);
//   console.log('rendering...', counter)
//   return(
//     <div>
//       <Counter counter={counter} />
//       <Button f={incremnet} text={"add 1"}/>
//       <Button f={reset} text={"reset "}/>
//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }
  

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}


export default App
