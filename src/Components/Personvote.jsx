 
import React from 'react';

const Personvote = ({ Name, age }) => {
  return (
    <div>
      <p>
        MR. {Name} {age > 18 ? <span>Eligible to vote</span> : <span>Not eligible to vote</span>}
      </p>
    </div>
  );
};

export default Personvote;


