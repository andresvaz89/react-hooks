// src/components/01-use-state/Counter.js

import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  /*   useEffect(() => {
    console.log('UseEffect is getting rendered');
  }, [count]);
 */

  useEffect(() => {
    const countParagraph = document.getElementsByClassName('count')[0];
    if (count % 2 == 0) {
      countParagraph.classList.toggle('even');
    } else {
      countParagraph.classList.toggle('odd');
    }
  }, [count]);
  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p className="count">You clicked {count} times</p>

      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}

export default Counter;
