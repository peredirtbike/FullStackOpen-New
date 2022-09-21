import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good+neutral+bad
  const average = ((good*1)+(neutral*0)+(bad*(-1)))/total
  const positive = (good * 100) / total

  const title = "Give Feedback"
  const statistics = "Statistics"


  return (
    <div>
      <h1>{title}</h1>

      <Button handleClick={()=> setGood(good+1)} text="Good" />
      <Button handleClick={()=> setNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={()=> setBad(bad+1)} text="Bad" />


      <h2>{statistics}</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>

      <p>Average {average}</p>
      <p>Positive {positive}</p>
  


    </div>
  )
}

export default App