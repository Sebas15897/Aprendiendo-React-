import React, { useState } from 'react';

const Contador = () => {
  const [count, setCounter] = useState(0);

  const aumentarContador = () => {
    setCounter(count + 1);
  };

  const disminuirContador = () => {
    if (count === 0) {
      return;
    }
    setCounter(count - 1);
  };

  const resetearContador = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Contador {count}</h1>
      <button onClick={aumentarContador}>Aumentar</button>
      <button onClick={resetearContador}>Resetear</button>
      <button onClick={disminuirContador}>Disminuir</button>
    </div>
  );
};

export default Contador;
