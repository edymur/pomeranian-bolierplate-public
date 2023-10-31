import { useState } from 'react';

export function NumberInuptValidator() {
  const [getInputValue, setInputValue] = useState('');
  const [getErrorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    try {
      //konwertuje na liczbe calkowita przy pomocy pareInt
      const intValue = parseInt(value, 10);
      // jezeli liczba nie jest number/integerem

      if (isNaN(intValue)) {
        throw new Error('Wprowadzona wartosc nie jest liczba calkowita');
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleInputValidate = (e) => {
    const inputValue = e.target.value;

    setInputValue(inputValue);
    validate(inputValue);
  };

  return (
    <div className="container--number-input-validator">
      <input
        type="text"
        placeholder="Wprowadz litere"
        value={getInputValue}
        onChange={handleInputValidate}
      />
      <p>Error: {getErrorMessage && getErrorMessage} </p>
    </div>
  );
}
