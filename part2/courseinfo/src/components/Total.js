import React from 'react'

const Total = ({ parts }) => {
    const reducer = (acc, current) => acc + current
    return (
      <div>
        Total of {parts.map(part => part.exercises).reduce(reducer)} exercises
      </div>
    )
  }

  export default Total 