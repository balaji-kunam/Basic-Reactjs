import React from 'react'

const Events = () => {
    //Event fucntion
    const clickEvent=()=>{
        alert("Someone clicked the button")
    }
    const mouseEvent=()=>{
        alert("Someone Hovered")
    }
  return (
    <div>
      <h1>welcome to events</h1>
      <button onClick={clickEvent}>Click me</button>
      <button onMouseEnter={mouseEvent}>Touch me</button>

    </div>
  )
}

export default Events
