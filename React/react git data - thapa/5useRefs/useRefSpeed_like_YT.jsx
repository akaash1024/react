function App() {
  
  const speedRef =useRef(1);
  const inputRef =useRef(null);

  
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Update speed without re-rendering
  const handleSpeedChange = (e) => {
    speedRef.current = e.target.value;
    console.log("Current speed:", speedRef.current);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Demo</h2>

      {/* Auto-focused input */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Auto-focused input: <br />
          <input
            ref={inputRef}
            type="text"
            placeholder="This will focus on mount"
          />
        </label>
      </div>

      {/* Speed control */}
      <div>
        <label>
          Change speed (check console): <br />
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            defaultValue={speedRef.current}
            onChange={handleSpeedChange}
          />
        </label>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
