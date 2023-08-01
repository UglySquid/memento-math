import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const spline = useRef();
  return (
    <Spline scene="https://prod.spline.design/Ua2HUg78cBXl4bT8/scene.splinecode" />
  );
}
