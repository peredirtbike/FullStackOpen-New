const Course = ({course}) => {
    return(
        <>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Sum parts={course.parts} />
        </>
    )
  }
  
  
  const Header = ({name}) =>{
    return(
      <h1>{name}</h1>
    )
  }
  
  const Content = ({parts}) => {
    return (
      parts.map(part =>
          <Part key={part.id} part={part}/>
      )
    )
  }
  
  const Part = ({part}) => {
    return(
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Sum = ({parts}) =>{
    return(
      <strong><p>total of {parts.reduce((total, part) => {return total + part.exercises}, 0)} exercises</p></strong>
      )
  }
  
  export default Course
