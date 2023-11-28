import { useState } from 'react'


const Button  = ({f, text}) => {
  return (
    <div>
      <button
        onClick={f}
        >
          {text}
        </button>
    </div>
  )
}


const Display = ({val, text}) => {
  return (
    <div>
      <p>{text} {val} </p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0.0);
  const [positve, setPositve] = useState(0);

  function calculte(good, neutral, bad){
    setAll(all +1)
    let average = ((good * 1) + (bad * -1))/(all+1)
    console.log(average)
    setAvg(average)
    let positive = (good*100/(all+1))
    console.log(positive)
    setPositve(positive)
  }
  function incGood() {
    setGood(good + 1)
    calculte(good+1, neutral, bad)
  }
  function incNeutral() {
    setNeutral(neutral + 1)
    calculte(good, neutral+1, bad)
  }
  function incBad() {
    setBad(bad + 1)
    calculte(good ,neutral, bad+1)
  }

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button f={incGood} text="good"/>
      <Button f={incNeutral} text="neutral"/>
      <Button f={incBad} text="bad"/>
      <h2>statistics</h2>
      <Display val={good} text="good" />
      <Display val={neutral} text="neutral" />
      <Display val={bad} text="bad" />
      <Display val={avg} text="average" />
      <Display val={all} text="all" />
      <Display val={positve} text="positive" />
    </div>
  )
}

export default App