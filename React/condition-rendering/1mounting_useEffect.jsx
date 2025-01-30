// ! https://codepen.io/akashkewat99/pen/wBwBwya?editors=0011

import { useEffect, useState } from "react";

const Ticker = () => {
  let [age, setAge] = useState(20);
  let [score, setScore] = useState(50);

  useEffect(() => {
    console.log("gets called on mounting");
    let tickerId = setInterval(() => {
      console.log("Tick.");
    }, 3000);

    return () => {
      clearInterval(tickerId);
      console.log("invoked only on unmounting!");
    };
  }, []);

  return (
    <div id="ticker-component">
      <h3>Ticker</h3>
      <div>age: {age}</div>
      <div>score: {score}</div>
      <button
        onClick={() => {
          // toggle isTicking
        }}
      >
        Start Ticking!
      </button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Increment Age!
      </button>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        Increment Score!
      </button>
    </div>
  );
};

// 1. when checkbox is changes -> update the `show` state
// 2. when show is true only then render <Ticker />

export const App = () => {
  let [show, setShow] = useState(false);
  let [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    console.log(e);
    setShow(e.target.checked);
  };
  return (
    <div className="App">
      <pre>
        <code>{JSON.stringify(show)}</code>
      </pre>
      <span className="ticker-wrapper">
        <label htmlFor="show-ticker">Show Ticker</label>
        <input
          id="show-ticker"
          type="checkbox"
          checked={show}
          //   onChange={function (e) {
          //     setShow(e.target.checked);
          //   }}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </span>
      |
      <span className="counter-wrapper">
        <span> {counter} </span>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </span>
      {show && <Ticker />}
      {/* { true && <Ticker /> } */}
      {/* { false && <Ticker /> }*/}
    </div>
  );
};

// Lifecycle Phases: Mounting, Updating, Unmounting
