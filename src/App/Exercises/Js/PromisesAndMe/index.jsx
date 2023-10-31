// import { useState } from 'react';
// import './styles.css';

// // let counter = 0;
// // setInterval(() => {
// //   counter = counter + 10;
// //   console.log('dodano, wynik =', counter);
// // }, 10);
// // setInterval(() => {
// //   counter = counter - 10;
// //   console.log('minus, wynik =', counter);
// // }, 10);

// // useEffect(() => {
// //   setCounter(counter + 1);
// //   setTimeout(() => setCounter(counter + 1), 10);
// // }, []);

// export const PromisesAndMe = () => {
//   const [sum, setSum] = useState(0);
//   //kod synchroniczny
//   //jedna linijka po linijce
//   function test1() {
//     console.log('test1');
//   }
//   function test2() {
//     console.log('test2');
//   }
//   console.log(1);
//   console.log(2);
//   test1();
//   test2();
//   //kod asynchroniczny
//   //nie jest wykonywany po kolei
//   //oczekuje na COŚ, co zakończy sie w czasie późniejszym
//   //oczekiwanie na odpowiedź serwera z treścią strony, plikiem, itp.

//   console.log('before timoeout');
//   setTimeout(() => console.log('timeout 1'), 10);
//   console.log('after timeout');
//   //setTimeout lista rzeczy do zrobienia później = [Task]

//   //kod synchroniczny blokuje przeglądarke
//   //ASYNCHRONICZNOŚĆ => wydajniejsze
//   const freeze = () =>
//     Array(1000000)
//       .fill(0)
//       .map((_, index) => <li key={index}>{index}</li>);

//   //problemy/wyzwania z obsługą w kodzie asynchronicznym
//   try {
//     console.log('trying something');
//     setTimeout(() => {
//       try {
//         throw new Error('coś poszło nie tak');
//       } catch (error) {
//         console.log('błąd set timeout', error.message);
//       }
//     }, 10);
//   } catch (error) {
//     console.log('złapałem błąd', error);
//   }

//   //Asynchroniczność pozwala na równoległe wykonywanie operacji

//   // programowanie asynchroniczne problem wyścigów (RACE CONSITION)
//   //tam gdzie wiele opercji moze być wykonywanych jednoczesnie
//   //pojawia sie problem nieoczekiwanych bledów

//   //callback
//   //funkcja przekazywana jako argument do innej funkcji

//   function jestemCallbackiem(num) {
//     console.log('jestem jestemCallbackiem, wywoływana z parametrem:', num);
//   }

//   //funkcja z callback
//   function handleOnClick(callback) {
//     console.log('wykorzystuje callback');
//     callback(10);
//   }

//   const raceCondition = () => {
//     let counter = 0;
//     const delay = 2000;
//     setInterval(() => {
//       const newValue = counter + 10;
//       console.log('dodano, wynik =', newValue);
//       setTimeout(() => (counter = newValue), 0);
//     }, delay);
//     setInterval(() => {
//       const newValue = counter - 10;
//       console.log('minus, wynik =', newValue);
//       setTimeout(() => (counter = newValue), 0);
//     }, delay);
//   };

//   //Promise firdt example
//   //fetchData funkcja do generowania promisów
//   const fetchData = () => {
//     return new Promise((resolve, reject) => {
//       //resolve -> funkcja, którą wywołamy gdy sukces
//       //reject -> funkcja, którą wywołamy gdy jakiś błąd

//       setTimeout(() => {
//         //w przykładzie symulujemy zachowanie serwera
//         const date = { id: 1, name: 'Jan' };
//         const err = Math.random() > 0.5 ? ' błąd serwera' : null;
//         if (err) {
//           //Jezeli błąd to odrzucamy obietnice
//           reject(err);
//         }
//         //jeżeli ok to wywiązujemy sie z obietnicy
//         resolve(data);
//       }, 1000);
//     });
//   };

//   //  const handleFetchData = () =>{
//   //  fetchData().then((data) => {
//   // console.log('Dane użytkownika:', JSON.stringify(data));
//   //   })
//   //   .catch(error) => {
//   //     console.log('wystąpił błąd', error);
//   //   });
//   //   };

//   //   const resolvePromise = Promise.resolve('Sukces')
//   // ;
//   // resolvePromise
//   //   Promise.resolve('Sukces')
//   // resolvedPromise.then((response) => console.log('Rejected value =', response))

//   return (
//     <div>
//       <h1>Promisy w JS</h1>
//       <h2>Intro</h2>
//       <button onClick={freeze}>Freeze</button>
//       <button onClick={() => handleOnClick(setSum)}>
//         Przycisk z callbackiem
//       </button>
//       <p>Sum={sum}</p>
//       <button onClick={() => handleOnClick(jestemCallbackiem)}>
//         Przycisk z callbackiem 2
//       </button>
//       <button onClick={raceCondition}>race condition</button>
//       <h2>Promise</h2>
//       <p>
//         Obiekt, który pozwala łaczyć wykonanie asynchronicznej operacji z kodem
//         oczekującym na jej zakończenie.
//       </p>
//     </div>
//   );
// };
