'use client'

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>{count} likes</p>
      <button onClick={plus}>Click me</button>
    </div>
  );
}