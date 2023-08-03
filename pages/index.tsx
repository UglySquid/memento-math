import { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import PerfectSquare from './SquareUp'


export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    if (currentQuestion < 100) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault(); // Prevent default behavior of arrow keys
        if (e.key === 'ArrowUp') {
          handleNextQuestion();
        } else if (e.key === 'ArrowDown') {
          handlePreviousQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentQuestion]);

  const spline = useRef();
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-full h-screen flex items-center">
        <Spline scene="https://prod.spline.design/Ua2HUg78cBXl4bT8/scene.splinecode" />
      </div>

      <div className="w-400 h-400 sticky-right-1">
        <h2> MEMENTO MATH </h2>

        {currentQuestion <= 100 ? (
        <PerfectSquare
          number={currentQuestion}
          correctAnswer={currentQuestion * currentQuestion}
          onNextQuestion={handleNextQuestion}
          onPreviousQuestion={handlePreviousQuestion}
        />
      ) : (
        <p>Congratulations, you've squared up all numbers!</p>
      )}
        
        {/* <kbd className="kbd">Enter</kbd> */}
      </div>
    </div>
  );
}
