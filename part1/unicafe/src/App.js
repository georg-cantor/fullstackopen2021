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

const Display = ({name, counter}) => {
  return (
    <div>
      {name} {counter}
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
      <Display name="good" counter={good} />
      <Display name="neutral" counter={neutral} />
      <Display name="bad" counter={bad} />
      <Display name="all" counter={calcAll(good, neutral, bad)} />
      <Display name="average" counter={calcAvg(good, neutral, bad)} />
      <Display name="positive" counter={calcPos(good, neutral, bad)} />
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App