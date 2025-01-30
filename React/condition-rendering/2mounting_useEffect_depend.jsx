// on the click of Start Ticking! button, every 2000ms there should be a console log: "tick <current timestamp>"

const Ticker = () => {
  let [age, setAge] = useState(0);
  let [score, setScore] = useState(0);
  
  useEffect(() => {
    console.log('mounting & updating of every state')
  },[age])
  
  useEffect(() => {
    console.log('mounting & score updates')
  },[score])

  return (
    <div id="ticker-component">
      <h3>Ticker</h3>
      <div>Age: {age}</div>
      <div>Score: {score}</div>
      <button onClick={() => {setAge(age+1)}}>Increment Age</button>
      <button onClick={() => {setScore(score+1)}}>Increment Score</button>
    </div>
  );
};

function App() {
  let [show, setShow] = React.useState(false);
  let [counter, setCounter] = useState(0);
  
  function handleChange (e) {
    console.log(e.target)
    console.log(e.target.name)
    setShow(e.target.checked)
  }

  return (
    <div className="App">
      <span className="ticker-wrapper">
        <label htmlFor="show-ticker">Show Ticker</label>
        <input
          id="show-ticker"
          type="checkbox"
          name='Akash'  // ! reflect in console checking only.. .
          checked={show}
          // onChange={(e) => setShow(e.target.checked)}
          onChange = {(e)=>handleChange(e)}
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
          +++
        </button>
      </span>
      {show && <Ticker />}
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
