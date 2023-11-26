/* eslint-disable react/prop-types */

function Header(props){

  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

function Part(props){
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

function Content({ course: { parts }}) {
  return (
    <div>
      {parts.map((item, index) => (
        <div key={index}>
          <Part part={item.name} exercises={item.exercises} />
        </div>
      ))}
    </div>
  )
}
function Total(props) {
  let total = props.course.parts.reduce((a,b) => a +b.exercises, 0)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

function App (){
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
      course={course}
       />
      <Total 
      course={course}
      />
    </div>
  )
}

export default App