import { useState } from "react";
import classes from "./Counter.module.scss"

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={classes.counter}>
      <button onClick={() => increment()}>Increment {count} + 1</button>
    </div>
  );
};

export default Counter;
