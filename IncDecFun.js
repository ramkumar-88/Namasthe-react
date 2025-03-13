import React, {useState} from "react";
import ReactDOM from "react-dom/client";

export default  IncDecFun = () => {
    const [count,setCount] = useState(0);
    increment = () => {
        setCount((prevCount)=>(prevCount + 1));
    }
    decrement = () => {
        setCount((prevCount) => (prevCount - 1));
    }
    return (
        <div>
            {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </div>

    );
}