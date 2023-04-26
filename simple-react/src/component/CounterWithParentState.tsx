import React, {ReactNode, useState} from "react";

type CounterWithParentStateProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

export const CounterWithParentState = ({setCount, children}: CounterWithParentStateProps) => {
    return (
        <>
            <h1>{children}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    );
}