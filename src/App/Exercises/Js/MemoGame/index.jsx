// import { useEffect, useState } from 'react';

// import { Button } from '../../../Components/Button';

// import { MainHeader } from '../../../Components/MainHeader';

// import './styles.css';

// import { Tile } from './Tile/Tile';

// function formatTime(duration) {
//   const minutes = Math.floor(duration / 60);

//   const seconds = duration % 60;
//   return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
// }

// function formatMoves(moves) {
//   return Math.ceil(moves / 2);
// }

// function shuffleArray(s) {
//   for (let i = s.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));

//     [s[i], s[j]] = [s[j], s[i]];
//   }

//   return s;
// }

// export const MemoGame = () => {
//   const [status, setStatus] = useState('notStarted');

//   const [moves, setMoves] = useState(0);

//   const [duration, setDuration] = useState(0);

//   const [tiles, setTiles] = useState([]);

//   const [selectedTiles, setSelectedTiles] = useState([]);

//   const [isActiveTimer, setIsActiveTimer] = useState(false); // Flaga aktywności licznika

//   //react lifecycle hook

//   useEffect(() => {
//     let timerInterval;

//     if (isActiveTimer) {
//       timerInterval = setInterval(() => {
//         setDuration((duration) => duration + 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(timerInterval);
//     };
//   }, [isActiveTimer]);

//   // refresh after tile select

//   useEffect(() => {
//     setTiles((tiles) => {
//       const areMatch = areSelectedTilesMatch();

//       return tiles.map((tile) => {
//         const isSelected = isTileSelected(tile.id);

//         return {
//           ...tile,

//           isVisible: isSelected,

//           isGuessed: tile.isGuessed || (isSelected && areMatch),
//         };
//       });
//     });
//   }, [selectedTiles]);

//   export const Tile = ({ onClick, char, isVisible, isGuessed, isCorrect }) => {
//     const shouldShow = isVisible || isGuessed;

//     const classNames = ['memo-tile'];

//     if (isVisible) classNames.push('memo-visible');

//     if (!isCorrect && isVisible) classNames.push('memo-incorrect');

//     if (isGuessed) classNames.push('memo-guessed');

//     return (
//       <button
//         className={classNames.join(' ')}
//         onClick={onClick}
//         disabled={isGuessed || isVisible}
//       >
//         {char}
//       </button>
//     );
//   };

//   const handleStart = () => {
//     setStatus('started');

//     setMoves(0);

//     setDuration(0);

//     setIsActiveTimer(true);

//     setTiles(getInitialTiles());
//   };

//   // uchwyt dla eventu JS i React

//   const handleStop = () => {
//     setStatus('finished');

//     setIsActiveTimer(false);
//   };

//   const handleTileClick = (id) => () => {
//     if (isTileSelected(id)) {
//       return;
//     }

//     setMoves(moves + 1);

//     selectTile(id);
//   };

//   const selectTile = (id) => {
//     setSelectedTiles((selectedTiles) => {
//       const newTile = tiles.find((tile) => tile.id === id);

//       const newSelectedTiles = [];

//       if (selectedTiles.length < 2) {
//         newSelectedTiles.push(...selectedTiles, newTile);

//         return newSelectedTiles;
//       } else {
//         return [newTile];
//       }
//     });
//   };

//   const isTileSelected = (id) => {
//     return !!selectedTiles.find((selectedTile) => selectedTile.id === id);
//   };

//   const areSelectedTilesMatch = () => {
//     const [tile1, tile2] = selectedTiles;

//     const areMatch =
//       !!tile1 && !!tile2 && tile1.char === tile2.char && tile1.id !== tile2.id;

//     return areMatch;
//   };

//   const getInitialTiles = () => {
//     const characters = ['☀', '☁', '☯', '★', '♠', '♣', '♥', '♦'];

//     const arrayOfTilesObjects = [];

//     characters.forEach((char) => {
//       arrayOfTilesObjects.push({
//         id: `${char}-1`,

//         char,

//         isVisible: false,

//         isGuessed: false,
//       });

//       arrayOfTilesObjects.push({
//         id: `${char}-2`,

//         char,

//         isVisible: false,

//         isGuessed: false,
//       });
//     });

//     return shuffleArray(arrayOfTilesObjects);
//   };

//   return (
//     <div className="hit-the-mole-game">
//       <MainHeader>Memo</MainHeader>

//       <p className="mole-description">
//         Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
//       </p>

//       {status === 'finished' && (
//         <div className="mole-result">
//           Gratulację! Twój wynik to {moves} ruchów w czasie{' '}
//           {formatTime(duration)}!
//         </div>
//       )}

//       {status !== 'started' && (
//         <>
//           {/*

//           // TODO add select for elements number

//           <div className="mole-settings-container">

//             <span className="mole-label">czas gry</span>

//             <Button

//               id="1"

//               variant={duration !== MINUTE ? 'primary' : 'secondary'}

//               onClick={() => {

//                 setDuration(MINUTE);

//                 setMinutes(MINUTE);

//               }}

//             >

//               1 minuta

//             </Button>

//             <Button

//               variant={duration !== 2 * MINUTE ? 'primary' : 'secondary'}

//               onClick={() => {

//                 setDuration(2 * MINUTE);

//                 setMinutes(2 * MINUTE);

//               }}

//             >

//               2 minuty

//             </Button>

//             <Button

//               variant={duration !== 3 * MINUTE ? 'primary' : 'secondary'}

//               onClick={() => setDuration(3 * MINUTE)}

//             >

//               3 minuty

//             </Button>

//           </div>

//           <div className="mole-settings-container">

//             <span className="mole-label">liczba kretów</span>

//             <Button

//               variant={molesNo !== 1 ? 'primary' : 'secondary'}

//               onClick={() => setMolesNo(1)}

//             >

//               1 kret

//             </Button>

//             <Button

//               variant={molesNo !== 2 ? 'primary' : 'secondary'}

//               onClick={() => setMolesNo(2)}

//             >

//               2 krety

//             </Button>

//             <Button

//               variant={molesNo !== 3 ? 'primary' : 'secondary'}

//               onClick={() => setMolesNo(3)}

//             >

//               3 krety

//             </Button>

//           </div> */}

//           <div className="mole-settings-container">
//             <span className="mole-label">przyciski sterujące</span>

//             <Button onClick={handleStart}>Start</Button>
//           </div>
//         </>
//       )}

//       {/* conditional rendering of jsx w React  */}

//       {status === 'started' && (
//         <>
//           <div className="mole-settings-container">
//             <span className="mole-label">CZAS GRY</span>

//             <span className="mole-output">{formatTime(duration)}</span>
//           </div>

//           <div className="mole-settings-container">
//             <span className="mole-label">LICZBA RUCHÓW</span>

//             <span className="mole-output">{moves}</span>
//           </div>

//           <div className="mole-settings-container">
//             <span className="mole-label">Przyciski sterujące</span>

//             <Button onClick={handleStop} variant="tertiary">
//               Stop
//             </Button>
//           </div>

//           <div className="mole-tile-board">
//             {tiles.map(({ id, char, isVisible, isGuessed }) => (
//               <Tile
//                 key={id}
//                 onClick={handleTileClick(id)}
//                 char={char}
//                 isVisible={isVisible}
//                 isGuessed={isGuessed}
//                 isCorrect={true}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
