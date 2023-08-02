import { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

// function getNumber() {
//   for (let num = 1; num < 100; num++) {
//     return num 
//   }
// }

// const CARDS = [
//   {
//     id: 1,
//     question: 1^2,
//     answer: Math.sqrt(1)
//   },
//   {
//     id: 2,
//     question: 2^2,
//     answer: Math.sqrt(2)
//   },
//   {
//     id: 3,
//     question: 3^2,
//     answer: Math.sqrt(3)
//   },
//   {
//     id: 4,
//     question: 4^2,
//     answer: Math.sqrt(4)
//   },
// ]


export default function Home() {
  const spline = useRef();
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-full h-screen flex items-center">
        <Spline scene="https://prod.spline.design/Ua2HUg78cBXl4bT8/scene.splinecode" />
      </div>
      <div className="w-400 h-400 sticky-right-1">
        <h2> MEMENTO MATH </h2>
        <p>
          Perfect square:

        </p>
        {/* <kbd className="kbd">Enter</kbd> */}
      </div>
    </div>
  );
}
