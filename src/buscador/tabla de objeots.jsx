import "./tabla.css"
import ContadorRegistros from "./contador der egistros";

function Tabla({ datos }) {
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
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ContadorRegistros cantidadMostrada={datos.length} totalRegistros={20} />
    </div>
  );
}

export default Tabla;
