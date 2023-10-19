import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 1000);
  /* 
  useEffect(() => {
    const countParagraph = document.getElementsByClassName('count')[0];
    if (count % 2 == 0) {
      countParagraph.classList.toggle('even');
    } else {
      countParagraph.classList.toggle('odd');
    }
  }); */

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
