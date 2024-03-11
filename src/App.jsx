import { useState } from 'react';
import Tabla from './buscador/tabla de objeots';
import { objetos } from './buscador/tabla de objeots';
function App() {
  const [busqueda, setBusqueda] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />
      <Tabla datos={objetos} busqueda={busqueda} />
    </div>
  );
}

export default App;
