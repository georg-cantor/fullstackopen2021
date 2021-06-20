import React from 'react'

const Total = ({ parts }) => {
    const reducer = (acc, current) => acc + current
    return (
      <div>
        <strong>
          Total of {parts.map(part => part.exercises).reduce(reducer)} exercises
        </strong>
      </div>
    )
  }

export default Total 