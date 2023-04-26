import {useState} from "react";

export const MyCounter = () => {
    const [count, setCount] = useState<number>(100);

    return <div>
        <h1>My Counter =  {count}</h1>
        <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
        <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
    </div>
}