import React from 'react'

const Personproduct = () => {
  //functions / logics like loops or other
  //variables
  let name = "balaji kunamhgari2";
  const age = 20;

  //objects
  const person = {
    name: "sateesh",
    age: 35,
    gmail: "sateesh@gmail.com",
    pincode: 523280,
  };

  const product ={
    title:"Iphone",
    model:"iphone-15",
    price:6500,
  }
  return (
    <>
    <div>
      {/* //shift+ atl+A */}
      {/* <h1>Web dev Mastery</h1>
      <h2>My name is :{name}</h2>
      <h4>my age is :{age}</h4>
      <h4>{2 * 5}</h4> */} 

      <h1>Name = {person.name}</h1>
      <h1>age = {person.age}</h1>
      <h1>gmail = {person.gmail}</h1>
      <h1>pincode = {person.pincode}</h1>
    </div>
    <div>
      <h3>title ={product.title}</h3>
      <h3>Model ={product.model}</h3>
      <h3>Price ={product.price}</h3>
    </div>
    </>
  )
}

export default Personproduct
