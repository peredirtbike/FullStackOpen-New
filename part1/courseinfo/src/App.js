const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = ({course}) => {
    return <h1>{course}</h1>
  }

  const Part = ({title, count}) => {
    return (
      <p>
        {title} {count}
      </p> 
    )
  }

  const Content = ({titles, counts}) => {
    return (
      <div>
        {titles.map((title, index) => <Part title={title.name} count={counts[index].exercises}/>)}
      </div>
    )
  }

  const Total = ({totalExercises}) => {
    return <p>Number of total exercises {(totalExercises.reduce((total, current) => total = total + current.exercises,0))}</p>
    
  }
  
  return (
    <div>
      {/* Aquí se llama al objeto entero, y en los componentes se desmenuza */}
      <Header course={course}/>
      <Content titles={parts} counts={parts}/>
      <Total totalExercises={parts}/>
    </div>
  )
}

export default App