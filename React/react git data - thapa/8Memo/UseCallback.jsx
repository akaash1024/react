import { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
    console.log(`Rendering button: ${children}`);

    return (
        <button onClick={onClick} >
            {children}
        </button>
    );
});

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("increment inside");
        setCount(prevCount => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        console.log("decrement inside");
        setCount(prevCount => prevCount - 1);
    }, []);

    return (
        <div >
            <h1>Count: {count}</h1>
            <div>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;