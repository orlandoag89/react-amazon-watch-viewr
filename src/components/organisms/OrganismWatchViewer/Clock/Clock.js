import { useEffect, useRef } from 'react';
import './Clock.css';

export const Clock = () => {

  const h1Ref = useRef();

  const _getTiming = () => new Date().toLocaleTimeString();

  useEffect(() => {
    const _interval = setInterval(() => {
      h1Ref.current.innerHTML = `${_getTiming()}`;
    }, 1000);
    return () => clearInterval(_interval);
  }, []);
  
  return (
    <div className="clock">
      <h1 className="clock__time" ref={h1Ref}>{_getTiming()}</h1>
    </div>
  );
}