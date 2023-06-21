import React, { useState } from 'react';

const Calduladora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(parseInt(num1) + parseInt(num2));
  };

  const changeNum1 = (event) => {
    setNum1(event.target.value);
  };

  const changeNum2 = (event) => {
    setNum2(event.target.value);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input
        type="number"
        placeholder="Ingrese un número"
        value={num1}
        onChange={changeNum1}
      />
      <input
        type="number"
        placeholder="Ingrese un número"
        value={num2}
        onChange={changeNum2}
      />
      <input type="text" placeholder="Resultado" value={resultado} readOnly />
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Calduladora;
