import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    alert("Decrement");
    setCount(count - 1);
  };

  const handleIncrement = () => {
    alert("Increment");
    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return {
    count,
    handleDecrement,
    handleIncrement,
    handleResetCounter,
  };
};
