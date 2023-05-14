import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };
  return (
    <div className={classes.div}>
      Counter
      <button onClick={increment}>{count}</button>
    </div>
  );
};
