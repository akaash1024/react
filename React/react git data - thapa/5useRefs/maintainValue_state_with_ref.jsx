

import { useState, useRef } from "react";

function MyComponent() {
    let someVar = 0;
    const countRef = useRef(0);
    const [state, setState] = useState(0);
  
    const handleCountRefIncrement = () => {
      countRef.current += 1;
      console.log(`Current count: ${countRef.current}`);
    };
    
    const handleStateIncrement = () => {
      setState( state + 1)
    };
    
    const handleSomeVar = () => {
      someVar = someVar + 1
      console.log(`Current someVar: ${someVar}`);
    };
    
    console.log('Re-rendering.....')
  
    return (
      <div>
        <h1> state: {state}</h1>
        <h1> countRef: {countRef.current}</h1>
        <h1> someVar: {someVar} </h1>
        <button onClick={handleCountRefIncrement}>Increment countRef</button>
        <button onClick={handleStateIncrement}>Increment state</button>
        <button onClick={handleSomeVar}>Increment someVar</button>
      </div>
    );
  }
  
  function App() {
    return (<MyComponent />);
  }
  
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
  