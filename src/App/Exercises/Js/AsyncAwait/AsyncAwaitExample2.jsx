import { useState } from 'react';
import './styles.css';

const DELAY = 500; // 0.5sec

export const AsyncAwaitExample2 = () => {
  const [results, setResults] = useState();

  const handleOnClick = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) resolve('Success');
        reject('Rejected');
      }, DELAY);
    });
    promise.then((result) => setResults(result));
  };

  return (
    <div>
      <h3>Async Await Example 1</h3>
      <button type="button" onClick={handleOnClick}>
        Start
      </button>
      <button type="button" onClick={() => setResults('')}>
        Reset
      </button>
      <div>Result: {results}</div>
    </div>
  );
};
