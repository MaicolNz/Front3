import { useState } from "react";
import React from "react";

function App() {
  //States para guardar el valor de los inputs, el error y los datos del formulario  const [name, setName] = useState('');
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [error, setError] = useState(null);
  const [cardData, setCardData] = useState(null);
  //Función validacion que se ejecuta al hacer submit en el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || name.trim()!=name || animal.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    setError(null);
    setCardData({ name, animal });
  }
  //Formulario con 2 inputs y un botón
  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ingresa al menos 3 caracteres sin espacios al principio"
        />
        <label htmlFor="animal">Animal favorito:</label>
        <input
          type="text"
          value={animal}
          onChange={(event) => setAnimal(event.target.value)}
          placeholder="Ingresa al menos 6 caracteres"
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <Card type="error" message={error} />}
      {cardData && <Card type="success" name={cardData.name} animal={cardData.animal} />}
    </div>
  );
}
//Componente Card con 4 props
const Card = ({ type, message, name, animal }) => {
  if (type === 'error') {
    return <div className="error-message">{message}</div>;
  } else if (type === 'success') {
    return (
      <div className="success-card">
        <h1>{name}</h1>
        <p>{animal}</p>
      </div>
    );
  }
  return null;
};

export default App;