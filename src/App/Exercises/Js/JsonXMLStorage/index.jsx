import { CookieStorage } from './CookieStorage';
import { LocalStorage } from './LocalStorage';
import { SessionStorage } from './Session Storage';
import './styles.css';

export const JsonXMLStorage = () => {
  //Parsowanie
  //zamiana z tekst na obiekt
  const jsonString = `{
    "name": "John",
    "surname": "Doe",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"],
    "isAdult": true
  }`;
  const parsedJson = JSON.parse(jsonString);

  console.log(parsedJson.name);

  //Serilizacja
  //zamiana obiektu JS na tekst w formacie JSON
  // const obiektDoSerializacji = {
  //   name: 'John',
  //   age: '100',
  //   cars: [],
  // }
  //  const emptyValue = null;
  // const poSerializacji = JSON.stringify(undefinedValue);

  // const curriences = {
  //   lastUpdate: '2004',
  //   curriencies: [
  //     {
  //       name: 'dollar',
  //       unit: 1,
  //       country: 'USA',
  //     },
  //     {
  //       name: 'euro',
  //       unit: 1,
  //       country: 'Europen Monetary Union',
  //     },
  //   ],
  // };

  return (
    <div>
      <h1>JsonXMLStorage</h1>
      <h2>JSON kim jest JSON?</h2>
      <p>JSON to JavaScript Object Notation</p>
      <p>lekki format wymiany danych</p>
      <p>wykorzystywany może być przez różne języki programowania</p>
      <p>The JSON Format Evaluates to JavaScript Objects</p>
      <p>
        Internet Media Type = application/json (formerly known as MINE type)
      </p>
      <p>rozszerzenie pliku .json</p>
      <h2>Parsowanie</h2>
      <p>{jsonString}</p>
      <p>
        parsowanie - deserializacja zamienia tekst na obiekt {parsedJson.name}
      </p>
      <p>stringify - serializacja</p>
      <h2>XML</h2>
      <p>
        XML (ang. Extensible Markup Language, rozszerzalny język znaczników) –
        uniwersalny język znaczników przeznaczony do reprezentowania różnych
        danych w strukturalizowany sposób.
      </p>
      <h2>Storage</h2>
      <ul>
        <li>LocalStorage</li>
        <li>SessionStorage</li>
        <li>CookiesStorage</li>
      </ul>
      <LocalStorage />
      <CookieStorage />
      <SessionStorage />
    </div>
  );
};
