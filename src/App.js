import React, { useState, useMemo } from 'react';
import './style.css';
import { Title, Counter, Button } from './comp';
export default function App() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [z, setz] = useState(0);

  const p1 = () => setx(x + 1);
  const p2 = () => sety(y + 1);
  const p3 = () => setz(z + 1);

  const title = useMemo(() => <Title />, []);

  const c1 = useMemo(() => <Counter counter={x} />, [x]);
  const c2 = useMemo(() => <Counter counter={y} />, [y]);
  const c3 = useMemo(() => <Counter counter={z} />, [z]);

  const btn1 = useMemo(() => <Button onIncrement={p1}>+x</Button>, [x]);
  const btn2 = useMemo(() => <Button onIncrement={p2}>+y</Button>, [y]);
  const btn3 = useMemo(() => <Button onIncrement={p3}>+z</Button>, [z]);

  return (
    <div>
      {title}

      {c1}
      {c2}
      {c3}

      {btn1}
      {btn2}
      {btn3}
    </div>
  );
}
