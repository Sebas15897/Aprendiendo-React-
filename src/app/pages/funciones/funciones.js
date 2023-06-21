import '../assets/styles/practice-2.css';
import sisebutoUrl from '../assets/images/reyes/rey_sisebuto.png';
import leogivildoUrl from '../assets/images/reyes/rey_leogivildo.png';
import { useRef } from 'react';

function Funciones() {
  const cambio = 4.1;

  const refCaja = useRef();

  const incrementar = (e) => {
    if (e.target.innerHTML === '6') {
      e.target.style.backgroundColor = 'red';
    } else if (e.target.innerHTML === '9') {
      e.target.innerHTML = '1';
      e.target.style.backgroundColor = 'white';
      return;
    }
    e.target.innerHTML = parseInt(e.target.innerHTML) + 1;
  };

  const convetir = () => {
    refCaja.current.innerHTML = parseInt(refCaja.current.innerHTML) * cambio;
  };

  const cambioImg = (j) => {
    j.target.src.includes(leogivildoUrl) ? (j.target.src = sisebutoUrl) : (j.target.src = leogivildoUrl);
  };

  const lectura = (l) => {
    refCaja.current.innerHTML = l.target.value;
  };

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>
        1
      </div>
      <button onClick={convetir}>Aceptar</button>
      <div>
        <img src={sisebutoUrl} onClick={cambioImg} />
      </div>
      <input className="campo" onChange={lectura} />
    </>
  );
}

export default Funciones;
