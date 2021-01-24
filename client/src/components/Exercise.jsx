import React from 'react'

export default function Exercise(props) {
  console.log(props)
    return (
      <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
      </tr>
    )
}
