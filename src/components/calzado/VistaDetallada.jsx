import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

function VistaDetallada() {
  const { id } = useParams(); // obtengo el id del producto desde la URL

  return (
    <Container>
      <h1>Vista Detallada del Producto {id}</h1>
      {/* Muestra los detalles del producto usando el id */}
    </Container>
  );
}

export default VistaDetallada;
