import './App.css';
import '../assets/styles/kings.css';
import sisebutoUrl from '../assets/images/reyes/rey_sisebuto.png';
import leogivildoUrl from '../assets/images/reyes/rey_leogivildo.png';
import atanagildoUrl from '../assets/images/reyes/rey_atanagildo.png';

function App() {
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
          <img src={item.url} alt={item.name} />
          <p key={index}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
