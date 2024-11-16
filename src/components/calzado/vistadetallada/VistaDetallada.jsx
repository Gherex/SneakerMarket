import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCalzado } from "../useCalzado";
import PresentacionProducto from "./PresentacionProducto";
import TalleSelect from "./TalleSelect";
import CantidadSelect from "./CantidadSelect";

function VistaDetallada() {
  const { id } = useParams(); // obtengo el id del producto desde la URL
  const { producto, loading, error } = useCalzado({
    productID: id,
    busqueda: "",
  });

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
    <Container
      disableGutters
      sx={{
        userSelect: "none",
        display: "flex",
        minHeight: "90vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          border: "1px solid gray",
          borderRadius: "0.5rem",
        }}
      >
        <PresentacionProducto
          img1={producto.imgCalzado.imgCal1}
          img2={producto.imgCalzado.imgCal2}
          img3={producto.imgCalzado.imgCal3}
        />
        <Box marginLeft="1.5rem" sx={{ width: "38%" }}>
          <Typography variant="body2" component="p" color="gray">
            Nuevo
          </Typography>
          <Typography
            color="primary"
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              margin: "0.1rem 0 0.5rem",
              textWrap: "balance",
            }}
          >
            {producto.titulo}
          </Typography>
          <Typography
            color="primary"
            variant="h3"
            component="p"
            sx={{ fontWeight: "bold", marginBottom: "0.1rem" }}
          >
            $ {producto.precio}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="primary"
            sx={{ marginBottom: "0.1rem" }}
          >
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
            sx={{
              backgroundColor: "grey",
              width: "min-content",
              p: "0.3rem 0.6rem",
              textWrap: "nowrap",
              borderRadius: "1rem",
              margin: "1rem 0 0.3rem",
            }}
          >
            Llega gratis hoy
          </Typography>
          <Typography
            color="primary"
            variant="body2"
            component="p"
            sx={{ marginBottom: "0.1rem" }}
          >
            Envíos a todo el país
          </Typography>
          <Box marginBottom="1rem">
            <Link sx={{ cursor: "pointer" }}>Más formas de entrega</Link>
          </Box>
          <TalleSelect />
          <Typography color="primary">
            Cantidad: <CantidadSelect />
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "90%",
                maxWidth: "300px",
              }}
            >
              Comprar ahora
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "90%",
                maxWidth: "300px",
              }}
            >
              Agregar al carrito
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default VistaDetallada;
