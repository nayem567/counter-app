import { useState } from "react";

export default function Counter_app() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter App (5) - (-5)</h1>
      <h2>Count : {count}</h2>
      <button onClick={increment} disabled={count >= 5}>
        {" "}
        +{" "}
      </button>
      <button onClick={decrement} disabled={count <= -5}>
        {" "}
        -{" "}
      </button>
      <button onClick={reset}> Reset </button>
    </>
  );
}
