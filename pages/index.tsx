import { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import PerfectSquare from './SquareUp'


export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    if (currentQuestion < 100) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const spline = useRef();
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-full h-screen flex items-center">
        <Spline scene="https://prod.spline.design/Ua2HUg78cBXl4bT8/scene.splinecode" />
      </div>
      <div className="w-400 h-400 sticky-right-1">
        <h2> MEMENTO MATH </h2>
        {currentQuestion <= 100 ? (
          <PerfectSquare number={currentQuestion} onNextQuestion={handleNextQuestion} />
        ) : (
          <p>Congratulations, you've squared all numbers!</p>
        )}
        {/* <kbd className="kbd">Enter</kbd> */}
      </div>
    </div>
  );
}
