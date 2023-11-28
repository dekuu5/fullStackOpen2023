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

  function incGood() {
    setGood(good + 1)
  }
  function incNeutral() {
    setNeutral(neutral + 1)
  }
  function incBad() {
    setBad(bad + 1)
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
    </div>
  )
}

export default App