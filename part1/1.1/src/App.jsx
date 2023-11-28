
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  let length =anecdotes.length;
  const [votes, setVotes] = useState(Array.from({ length }, () => 0));
  function showRandom(){
    let RandomIndex = Math.round(Math.random() * anecdotes.length)
    console.log(RandomIndex);
    if(RandomIndex === selected){
      
      showRandom()
    }
    setSelected(RandomIndex)
  }
  function vote(){
    const newArr = [...votes];
    newArr[selected] += 1;
    setVotes(newArr);
  }
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>this anecdotes has {votes[selected]} votes</p>
      <button onClick={vote}> vote</button>
      <button onClick={showRandom}>display Random anecdotes</button>
    </div>
  )
}

export default App

// up to 1.11
// import { useState } from 'react'


// const Button  = ({f, text}) => {
//   return (
//     <div>
//       <button onClick={f}>
//           {text}
//         </button>
//     </div>
//   )
// }


// const StatisticLine = ({val, text}) => {
//   return (
//     <tr>
//       <td>
//         {text}
//       </td>
//       <td>
//         {val}
//       </td>
//     </tr>
//   )
// }
// const Statistics = ({
//   good,
//   neutral,
//   bad,
//   all,
//   avg,
//   positve
// }) => {

//   return (
//     <>
//       <h2>statistics</h2>
//       <table>
//         <tbody>
//           <StatisticLine val={good} text="good" />
//           <StatisticLine val={neutral} text="neutral" />
//           <StatisticLine val={bad} text="bad" />
//           <StatisticLine val={avg} text="average" />
//           <StatisticLine val={all} text="all" />
//           <StatisticLine val={positve + "%"} text="positive" />
//         </tbody>
//       </table>
//     </>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [all, setAll] = useState(0);
//   const [avg, setAvg] = useState(0.0);
//   const [positve, setPositve] = useState(0);

//   function calculte(good, neutral, bad){
//     setAll(all +1)
//     let average = ((good * 1) + (bad * -1))/(all+1)
//     console.log(average)
//     setAvg(average)
//     let positive = (good*100/(all+1))
//     console.log(positive)
//     setPositve(positive)
//   }
//   function incGood() {
//     setGood(good + 1)
//     calculte(good+1, neutral, bad)
//   }
//   function incNeutral() {
//     setNeutral(neutral + 1)
//     calculte(good, neutral+1, bad)
//   }
//   function incBad() {
//     setBad(bad + 1)
//     calculte(good ,neutral, bad+1)
//   }

  
//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button f={incGood} text="good"/>
//       <Button f={incNeutral} text="neutral"/>
//       <Button f={incBad} text="bad"/>
//       {all? (<Statistics 
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         all={all}
//         avg={avg}
//         positve={positve}
//         />) :
//         (<p>
//           no feedback given
//         </p>)}
      
//     </div>
//   )
// }

// export default App


