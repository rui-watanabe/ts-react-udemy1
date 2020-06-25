import React from 'react';
import ReactDOM from 'react-dom';

export default function App(): JSX.Element{
  const sum = (a: number, b: number): number => a + b;
  const numString: string = `Number ${ sum(1, 2) }`;
  return(
    <h1>
      { numString }
    </h1>
  )
};

const root = document.getElementById('root');

ReactDOM.render(<App />, root)