import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, bad, neutral}) => {
  const total = good+neutral+bad
  const average = ((good*1)+(neutral*0)+(bad*(-1)))/total
  const positive = (good * 100) / total
  if(total === 0){
    return(
      <h2>Nothing to show</h2>
    )
  }
  return(
    <div>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="Total" value={total} />
      <StatisticsLine text="Average" value={average} />
      <StatisticsLine text="Positive feedback" value={positive} />
    </div>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
    <table>
      <tbody>
      <tr>
        <td style={{padding:"10px"}}>{text}</td>
        <td>{value}</td>
      </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const TITLE = "Give Feedback"





  return (
    <div>
      <h1>{TITLE}</h1>
      <Button handleClick={()=> setGood(good+1)} text="Good" />
      <Button handleClick={()=> setNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={()=> setBad(bad+1)} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App