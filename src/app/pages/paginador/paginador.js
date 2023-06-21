import '../assets/styles/paginador.css';
import { useState } from 'react';

const Paginador = () => {
  const [page, setPage] = useState(0);

  const reyesGodos = [
    {
      nombre: 'Ataúlfo',
      aficion: 'comer toros sin pelar',
    },
    {
      nombre: 'Recesvinto',
      aficion: 'leer a Hegel en arameo',
    },
    {
      nombre: 'Teodorico',
      aficion: 'la cría del escarabajo en almíbar',
    },
  ];

  const setPageHandler = () => {
    if (page < reyesGodos.length - 1) {
      setPage(page + 1);
      document.title = reyesGodos[page + 1].nombre;
    }
  };

  return (
    <>
      <button onClick={setPageHandler}> Ver siguiente </button>
      <p className='kigns-text'>
        La afición principal de{' '}
        <span className="kings-name">{reyesGodos[page].nombre}</span> es{' '}
        <span className="kings-afi">{reyesGodos[page].aficion}</span>
      </p>
    </>
  );
};
export default Paginador;
