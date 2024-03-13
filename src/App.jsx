import { useState } from 'react';
import Tabla from "./buscador/tabla de objeots";
import SelectRegistros from "./buscador/select"; 
import ContadorRegistros from './buscador/contador der egistros';
import { objetos } from './buscador/lista de objetos';


function App() {
//forma 1
 const [cantidad, setCantidad] = useState(5);

  return (
    <div>
      <SelectRegistros cantidad={cantidad} setCantidad={setCantidad} />
      <Tabla datos={objetos.slice(0, cantidad)} />
    </div>
  );
}

/* 
// forma 2
const [cantidad, setCantidad] = useState(5);
const [indiceInicio, setIndiceInicio] = useState(0);

const handleChangeCantidad = (event) => {
  const nuevaCantidad = parseInt(event.target.value);
  setCantidad(nuevaCantidad);
  setIndiceInicio(0); // Reinicia el índice de inicio al cambiar la cantidad
};

const handleNextPage = () => {
  if (indiceInicio + cantidad < objetos.length) {
    setIndiceInicio(indiceInicio + cantidad);
  }
};

const handlePrevPage = () => {
  if (indiceInicio - cantidad >= 0) {
    setIndiceInicio(indiceInicio - cantidad);
  }
};

return (
  <div>
    <SelectRegistros cantidad={cantidad} setCantidad={handleChangeCantidad} />
    <Tabla datos={objetos.slice(indiceInicio, indiceInicio + cantidad)} />
    <ContadorRegistros cantidadMostrada={Math.min(cantidad, objetos.length - indiceInicio)} totalRegistros={objetos.length} />
    <div>
      <button onClick={handlePrevPage}>Anterior</button>
      <button onClick={handleNextPage}>Siguiente</button>
    </div>
  </div>
);
}
 */
export default App;
