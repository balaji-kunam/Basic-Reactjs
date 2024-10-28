import React from "react";

const Productshow = () => {
  const products = [
    {
      id: "1",
      item: "Iphone",
      price: 15000,
    },
    {
      id: "2",
      item: "Redmi",
      price: 25000,
    },
    {
      id: "3",
      item: "MI",
      price: 45000,
    },
    {
      id: "4",
      item: "Iphone",
      price: 15000,
    },
  ];
  return <div>
 {
   products.map((data)=> (
    <div key={data.id} >
        <h1>{data.item}</h1>
        <h1>{data.price}</h1>

    </div>
   ))

 }

  </div>;
};

export default Productshow;
