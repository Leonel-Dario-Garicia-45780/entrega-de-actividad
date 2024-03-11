export const objetos = [
  { id: 1, nombre: 'juan', descripcion: 'hola soy juan' },
  { id: 2, nombre: 'sebastian', descripcion: 'que honda como estas' },
  { id: 3, nombre: 'martos', descripcion: 'que dice mi hermano' },
  { id: 4, nombre: 'emmanuel', descripcion: 'buenos dias' },
  { id: 5, nombre: 'jose', descripcion: 'que mas parcero' }
];

import "./tabla.css"

function Tabla({ datos, busqueda }) {
const filtro_de_datos = datos.filter((dato) => {
  return (
    dato.id.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
    dato.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    dato.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );
});

return (
  <div className="tabla-container">
  <h2>Tabla de Datos</h2>
  <table className="tabla">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      {filtro_de_datos.map(dato => (
        <tr key={dato.id}>
          <td>{dato.id}</td>
          <td>{dato.nombre}</td>
          <td>{dato.descripcion}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);
}

export default Tabla;
