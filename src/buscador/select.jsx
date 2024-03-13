// este esl el componente que esta encima de la tabla

function SelectRegistros({ cantidad, setCantidad }) {
  const opciones = [5, 10, 15, 20];

  return (
    <select value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))}>
      {opciones.map((opcion) => (
        <option key={opcion} value={opcion}>{opcion}</option>
      ))}
    </select>
  );
}

export default SelectRegistros;
