import React, { useImperativeHandle, useState } from 'react'

const Header = ({header}) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick} >
      {text}
    </button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const calcAll = (good, neutral, bad) => good + neutral + bad
  const calcAvg = (good, neutral, bad) => {
    const all = calcAll(good, neutral, bad)
    return (all === 0) ? 0 : (good-bad)/all
  }
  const calcPos = (good, neutral, bad) => {
    const all = calcAll(good, neutral, bad)
    if (all === 0) return "0 %"
    const positiveRatio = good/all 
    return "" + positiveRatio*100 + " %"
  }
  
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={calcAll(good, neutral, bad)} />
      <Statistic text="average" value={calcAvg(good, neutral, bad)} />
      <Statistic text="positive" value={calcPos(good, neutral, bad)} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => setGood(good + 1)
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <Header header="give feedback" />
      <Button 
        handleClick={handleGoodFeedback}
        text='good' 
      />
      <Button 
        handleClick={handleNeutralFeedback}
        text='neutral' 
      />
      <Button 
        handleClick={handleBadFeedback}
        text='bad' 
      />
      <Header header="statistics" />
      { good || neutral || bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  )
}

export default App