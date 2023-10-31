// import { NumberInputValidator } from './InputValidator';
import './styles.css';
import { useEffect, useState } from 'react';

export const ErrorPrototypesThis = () => {
  //useState hook
  const [getUserData, setUserData] = useState(null);
  const [getError, setError] = useState(null);

  const fetchData = async () => {
    try {
      //synthatic sugar await
      //restfull API
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      // throw new Error ("Ups kodzik polozyl sie w piatek");
      setError(error);
    } finally {
      console.log('Wykonam cię niezależnie czy API sie wyłoży czy nie');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container--errors-prototypes-this">
      Name: {getUserData?.name}
      <br />
      Username: {getUserData?.username}
      <p>Error{getError && getError.message}</p>
      {/* <NumberInputValidator /> */}
    </div>
  );
};
