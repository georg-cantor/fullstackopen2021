import Part from './Part'

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
      </div>
    )
  }

  export default  Content