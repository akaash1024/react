function MyComponent() {
    const inputRef = useRef(null)
    
    const handleClick = () => {
      inputRef.current.focus(); //! look here🔴
    };
  
    return (
      <div>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
  }

  