// src/components/01-use-state/Counter.js

import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('UseEffect is getting rendered');
  }, [count]);

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}

export default Counter;
