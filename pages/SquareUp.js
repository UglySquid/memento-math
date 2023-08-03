import React from 'react';
import { useState, useEffect } from 'react';


const PerfectSquare = ({ number, onNextQuestion }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const correctAnswer = number * number;
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        setShowAnswer(true);
      }
    };
  
    // useEffect(() => {
    //   if (showAnswer) {
    //     setTimeout(() => {
    //       onNextQuestion();
    //       setShowAnswer(false);
    //     }, 1000); // Delay before moving to the next question (1 second)
    //   }
    // }, [showAnswer]);

    for (let step = 1; step < 100; step++) {
        // Runs 100 times, with values of step 1 through 100.
        return (
            <div>
              <p>{number}&sup2; = </p>
              {showAnswer && <p>{number}&sup2; = {correctAnswer}</p>}
            </div>
          );
      }
  
    return (
      <div>
        <p>{number}&sup2; = </p>
        {showAnswer && <p>{number}&sup2; = {correctAnswer}</p>}
      </div>
    );
  };

export default PerfectSquare;
  

// LOL BACKUP HAHA BACK THIS SHIT UP
// const PerfectSquare = ({ number, onNextQuestion }) => {
//     const [showAnswer, setShowAnswer] = useState(false);
//     const correctAnswer = number * number;
  
//     const handleKeyPress = (e) => {
//       if (e.key === 'Enter') {
//         setShowAnswer(true);
//       }
//     };
  
//     useEffect(() => {
//       if (showAnswer) {
//         setTimeout(() => {
//           onNextQuestion();
//           setShowAnswer(false);
//         }, 1000); // Delay before moving to the next question (1 second)
//       }
//     }, [showAnswer]);
  
//     return (
//       <div>
//         <p>{number}&sup2; = </p>
//         {showAnswer && <p>{number}&sup2; = {correctAnswer}</p>}
//       </div>
//     );
//   };

// export default PerfectSquare;
