import { useEffect, useState } from "react";

import "../styles/counter.css";

const Counter = () => {
  var [count, setCount] = useState(0);
  var [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    console.log("useEffect count");
  }, [count]);

  useEffect(() => {
    console.log("useEffect secondCount");
  }, [secondCount]);

  const increaseCounter = () => {
    setCount(++count);
    /* setCount((prevState) => {
      return prevState + 1;
    }); */

    /* setTimeout(() => {
      setCount(++count);
    }, 3000); */

    /* setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 3000); */
  };

  const increaseSecondCounter = () => {
    setSecondCount(++secondCount);
  };
  // increaseCounter();
  return (
    <div className="counter">
      <h3 className="counter-board">You clicked {count} times</h3>
      <button onClick={increaseCounter}>Click</button>
      <h3 className="counter-board">You clicked {secondCount} times</h3>
      <button onClick={increaseSecondCounter}>Click</button>
    </div>
  );
};

/* 
    hook useState
    hooks start with prefix user
*/

export default Counter;
