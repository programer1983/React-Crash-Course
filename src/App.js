import React from 'react';

function App() {
  const name = 'Dimon'
  const x = true;
  return (
    <div className="container">
      <h1>Hello from React</h1>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App;
