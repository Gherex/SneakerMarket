import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCalzado } from "../useCalzado";
import PresentacionProducto from "./PresentacionProducto";
import TalleSelect from "./TalleSelect";
import CantidadSelect from "./CantidadSelect";

function VistaDetallada() {
  const { id } = useParams(); // obtengo el id del producto desde la URL
  const { producto, loading, error } = useCalzado(id);

  console.log(producto);

  if (loading)
    return (
      <Typography
        variant="h4"
        component="p"
        color="primary"
        sx={{ textAlign: "center" }}
      >
        Cargando...
      </Typography>
    );
  if (error)
    return (
      <Typography
        variant="h4"
        component="p"
        color="primary"
        sx={{ textAlign: "center" }}
      >
        Error: {error}
      </Typography>
    );
  return (
    <Container sx={{ userSelect: "none" }}>
      <PresentacionProducto
        imagenes={(producto.imgCal1, producto.imgCal2, producto.imgCal3)}
      />
      <Box>
        <Typography variant="body2" component="p">
          Nuevo
        </Typography>
        <Typography color="primary" sx={{ fontWeight: "bold" }}>
          {producto.titulo}
        </Typography>
        <Typography color="primary" sx={{ fontWeight: "bold" }}>
          $ {producto.precio}
        </Typography>
        <Typography variant="body2" component="p" color="primary">
          en 6 cuotas de ${" "}
          {Math.round(
            (producto.precio * 1000 + producto.precio * 1000 * 0.4) / 6
          )}
        </Typography>
        <Link sx={{ cursor: "pointer" }}>Ver los medios de pago</Link>
        <Typography
          color="primary"
          variant="body2"
          component="p"
          sx={{ backgroundColor: "grey", width: "min-content", p: "0.3rem" }}
        >
          Llega gratis hoy
        </Typography>
        <Typography color="primary" variant="body2" component="p">
          Envíos a todo el país
        </Typography>
        <Link sx={{ cursor: "pointer" }}>Más formas de entrega</Link>
        <TalleSelect />
        <Typography>
          Cantidad: <CantidadSelect />
        </Typography>
        <Button variant="contained">Comprar ahora</Button>
        <Button variant="outlined">Agregar al carrito</Button>
      </Box>
    </Container>
  );
}

export default VistaDetallada;
