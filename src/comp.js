import React from 'react';
export function Title() {
  console.log('title comp');
  return <h1>title comp</h1>;
}
export function Counter(props) {
  console.log('counter comp ', props?.counter);

  return <h2>counter : {props?.counter}</h2>;
}
export function Button(props) {
  console.log('Button comp ', props?.children);
  return <button onClick={props?.onIncrement}>{props.children}</button>;
}
