import Part from './Part'
import Total from './Total'

const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

const Content = ({ course }) => {
    let parts = course.parts
    return (
      <div>
        {parts.map(part =>
            <Part key={generateKey(part.name)} part={part} />
        )}
        <Total parts={parts}/>
      </div>
    )
  }

  export default  Content