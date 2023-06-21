import '../assets/styles/convertidor.css';
import { useState } from 'react';

const Convertidor = () => {
  const [peso, setPeso] = useState(1);
  const [euro, setEuro] = useState(0);
  const [dolar, setDolar] = useState(0);
  const [pesoArgentino, setPesoArgentino] = useState(0);
  const [pesoMexicano, setPesoMexicano] = useState(0);

  const convertir = (event) => {
    let valorPeso = Number(event.target.value);
    setPeso(valorPeso);
    setEuro((valorPeso * 0.00022).toFixed(2));
    setDolar((valorPeso * 0.00024).toFixed(2));
    setPesoArgentino((valorPeso * 0.061).toFixed(2));
    setPesoMexicano((valorPeso * 0.0041).toFixed(2));
  };

  return (
    <>
      <div className="convert-container">
        <label>Peso Colombiano</label>
        <input type="number" value={peso} onChange={convertir} />
        <label>Euro</label>
        <input type="number" value={euro} readOnly />
        <label>Dolar</label>
        <input type="number" value={dolar} readOnly />
        <label>Peso Argentino</label>
        <input type="number" value={pesoArgentino} readOnly />
        <label>Peso Mexicano</label>
        <input type="number" value={pesoMexicano} readOnly />
      </div>
    </>
  );
};
export default Convertidor;
