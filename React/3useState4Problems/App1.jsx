import React, { useEffect, useState } from "react";

let obj = {
  math: 0,
  sci: 0,
  eng: 0,
};
export function App1() {
  let [state, setState] = useState(obj);

  function handleClick(e) {
    let { name } = e.target;
    setState((prevVal) => {
      return { ...prevVal, [name]: prevVal[name] + 1 };
    });
  }

  return (
    <>
      <pre>
        <code>{JSON.stringify(state)}</code>
      </pre>

      <button name="math" onClick={handleClick}>M</button>

      <button name="sci" onClick={handleClick}>S</button>

      <button name="eng" onClick={handleClick}>E</button>
    </>
  );
}
