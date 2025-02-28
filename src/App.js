import React from 'react';
import GreetingMessage from './GreetingMessage';  // Import the GreetingMessage component

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <GreetingMessage name="Bhumika" />  {/* Pass the name 'Bhumika' as a prop */}
    </div>
  );
}

export default App;
