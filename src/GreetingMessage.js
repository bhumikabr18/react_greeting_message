import React from 'react';

function GreetingMessage({ name }) {  // Destructure the 'name' prop
  return (
    <div>
      <p>Hello, {name}! Welcome to React.</p>
    </div>
  );
}

export default GreetingMessage;
