import React from "react";
import Personvote from "./Components/Personvote";
import Personproduct from './Components/Personproduct'
import Person from "./Components/Person";
import Events from "./Components/Events";
import Counter from "./Components/Counter";
 

const App = () => {
  return (
    <>
      <div>
     {/*    <Person
          firstName="Balaji"
          LastName="Kunamgari"
          DOB="1999/19/09"
          City="Ongole"
        />
        <Person
          firstName="balau"
          LastName="akkinneni"
          DOB="2000/30/12"
          City="vijayawada"
        />
        <Person
          firstName="chiru"
          LastName="ananad"
          DOB="1987/31/07"
          City="thirupathi"
        />
        <Person
          firstName="arjunr"
          LastName="allu"
          DOB="1976/03/07"
          City="Ongole"
        /> */}
      </div>

      <div>
        {/* <Personvote Name="kunamgari balaji" age={23} />
        <Personvote Name="kunamgari balu" age={14} /> */}
      </div>

      <div>
       {/* <Events/> */}

      </div>
      <div>
        <Counter />
      </div>
    </>


  );
};

export default App;
