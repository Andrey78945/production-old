import React, { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };
  return (
    <div>
      Counter
      <button onClick={increment}>{count}</button>
    </div>
  );
};
