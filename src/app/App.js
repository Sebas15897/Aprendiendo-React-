import './App.css';

function App() {
  let nombre = 'sebastian';
  let apellido = 'contreras';
  let caja = (
    <div>
      My name is {nombre} {apellido}
    </div>
  );

  return (
    <div className="fondo">
      <h1>React App</h1>
      <input type="text" placeholder="Enter your name" value={nombre} />
      <p>{caja}</p>
    </div>
  );
}

export default App;
