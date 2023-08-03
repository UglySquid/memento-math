import React from 'react';
import { useState, useEffect } from 'react';


// const PerfectSquare = ({ number }) => {
//     const [newNumber, setShowSquare] = useState(false);
//     const square = number * number;

//     for (let step = 1; step < 100; step++) {
//         // Runs 100 times, with values of step 1 through 100.
//         const handleKeyPress = (e) => {
//           if (e.key === 'ArrowUp') {
//             setShowSquare(true);
//           }
//           if (e.key === 'ArrowRight') {
//             newNumber(true);
//           }
//         };

//       }

//       return (
//         <div>
//           <p>{number}&sup2; = </p>
//           {setShowSquare && <p>{number}&sup2; = {square}</p>}
//         </div>
//       );return (
//         <div>
//           <p>{number}&sup2; = </p>
//           {setShowSquare && <p>{number}&sup2; = {square}</p>}
//         </div>
//       );
//   };

// export default PerfectSquare;
  

// LOL BACKUP HAHA BACK THIS SHIT UP
const PerfectSquare = ({ number, correctAnswer, onNextQuestion, onPreviousQuestion }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
      if (e.key === 'ArrowUp') {
        onNextQuestion();
      } else if (e.key === 'ArrowDown') {
        onPreviousQuestion();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      handleKeyPress(e);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [number]);
  
    return (
      <div>
        <p>{number}&sup2; = {showAnswer ? correctAnswer : '?'}</p>
      </div>
    );
  };

export default PerfectSquare;
