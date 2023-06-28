import { useState } from "react";

const Counter = () => {
    const[count, setCount] = useState(0)
    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    const countHandler = () => {
        setCount(count + 1)
    };
    const countMandler = () => {
        setCount(count - 1)
    };
    const countZero = () => {
        setCount(0)
    };
    const countRandom = () => {
        setCount(randomNumberInRange(1, 100));
        
    };
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={countHandler}> Add </button>
            <button onClick={countMandler}> subtract </button>
            <button onClick={countZero}> Reset </button>
            <button onClick={countRandom}> Randomizer</button>
        </div>
    )
};

export default Counter;