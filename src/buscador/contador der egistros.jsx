// este es el componente que esta debajo de la tabla

function ContadorRegistros({ cantidadMostrada, totalRegistros }) {
  return (
    <div>
      {cantidadMostrada} de {totalRegistros}
    </div>
  );
}

export default ContadorRegistros;
