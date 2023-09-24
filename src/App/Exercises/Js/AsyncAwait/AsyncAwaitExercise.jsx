import { useState } from 'react';
import './styles.css';


/*

napisać useEffect'a oraz stworzyć Promise'a,
który zostanie spełniony i wyświetli nam 
"I'm resolved :)"  używamy async/await
użyjmy useState do zapisania odpowiedzi z promisa.

*/
 

const DELAY = 500; // 0.5sec

export const AsyncAwaitExercise = () => {
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
