import React from 'react'

const Person = ({firstName,LastName,DOB,City}) => {
  return (
    <div >
      <h1>First name={firstName}</h1>
      <h1>LastName={LastName}</h1>
      <h1>DOB={DOB}</h1>
      <h1>City={City}</h1>
      <p>My name is {firstName}{LastName} , DOB is {DOB} and my city is {City}</p>
    </div>
  )
}

export default Person
