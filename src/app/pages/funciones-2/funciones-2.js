import '../assets/styles/kings.css';
import sisebutoUrl from '../assets/images/reyes/rey_sisebuto.png';
import leogivildoUrl from '../assets/images/reyes/rey_leogivildo.png';
import atanagildoUrl from '../assets/images/reyes/rey_atanagildo.png';
import incognitoUrl from '../assets/images/reyes/rey_incognito.png';

function Funciones2() {
  const cambiarImagen = (e) => {
    if (
      e.target.src.includes(sisebutoUrl) ||
      e.target.src.includes(leogivildoUrl) ||
      e.target.src.includes(atanagildoUrl)
    ) {
      e.target.src = incognitoUrl;
      return;
    } else if (
      e.target.src.includes(incognitoUrl) &&
      e.target.style.opacity !== '0'
    ) {
      e.target.style.opacity = '0';
      return;
    }

    switch (e.target.alt) {
      case 'Sisebuto':
        e.target.src = sisebutoUrl;
        break;
      case 'Leogivildo':
        e.target.src = leogivildoUrl;
        break;
      case 'Atanagildo':
        e.target.src = atanagildoUrl;
        break;
      default:
        e.target.src = incognitoUrl;
    }
    e.target.style.opacity = '100';
  };

  const cambiarTexto = (e) => {
    console.log(e.target.innerText);

    if (e.target.innerText !== 'Leido') {
      switch (e.target.innerText) {
        case 'Sisebuto':
          e.id = 'Sisebuto';
          break;
        case 'Leogivildo':
          e.id = 'Leogivildo';
          break;
        case 'Atanagildo':
          e.id = 'Atanagildo';
          break;
        default:
          e.id = 'Leido';
      }
    }


    if (
      e.target.innerText.includes('Sisebuto') ||
      e.target.innerText.includes('Leogivildo') ||
      e.target.innerText.includes('Atanagildo')
    ) {
      e.target.innerText = 'Leido';
      return;
    } else if (
      e.target.innerText.includes('Leido') &&
      e.target.style.opacity !== '0'
    ) {
      e.target.style.opacity = '0';
      return;
    }

    console.log(e);

    switch (e.id) {
      case 'Sisebuto':
        e.target.innerText = 'Sisebuto';
        break;
      case 'Leogivildo':
        e.target.innerText = 'Leogivildo';
        break;
      case 'Atanagildo':
        e.target.innerText = 'Atanagildo';
        break;
      default:
        e.id = 'Leido';
    }

    e.target.style.opacity = '100';
  };

  let kings = [
    {
      name: 'Sisebuto',
      url: sisebutoUrl,
    },
    {
      name: 'Leogivildo',
      url: leogivildoUrl,
    },
    {
      name: 'Atanagildo',
      url: atanagildoUrl,
    },
  ];

  return (
    <div className="kings-container">
      {kings.map((item, index) => (
        <div className="kings-child">
          <img
            key={item.name}
            src={item.url}
            alt={item.name}
            onClick={cambiarImagen}
          />
          <p onClick={cambiarTexto} key={index}>
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Funciones2;
