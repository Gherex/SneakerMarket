import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useCalzado } from "../../hooks/useCalzado";
import PresentacionProducto from "./PresentacionProducto";
import TalleSelect from "./TalleSelect";
import CantidadSelect from "./CantidadSelect";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

function VistaDetallada() {
  const { id } = useParams();
  const { producto, loading, error } = useCalzado({
    productID: id,
    busqueda: "",
  });
  const { addToCart } = useCart();

  const [cantidad, setCantidad] = useState(0);
  const navigate = useNavigate();

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
          flexDirection: { xs: "column", sm: "column", md: "row" },
          padding: { xs: "0.2rem 0", sm: "0.2rem", md: "0.8rem", lg: "1rem" },
          border: "1px solid gray",
          margin: { xs: "1rem" },
          borderRadius: "0.5rem",
        }}
      >
        <PresentacionProducto
          img1={producto.imgCalzado.imgCal1}
          img2={producto.imgCalzado.imgCal2}
          img3={producto.imgCalzado.imgCal3}
        />
        <Box
          marginLeft="1.5rem"
          sx={{ width: { xs: "100%", sm: "90%", md: "38%" } }}
        >
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
          <CantidadSelect setCantidad={setCantidad} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "1rem",
              width: "90%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: { xs: "70%", sm: "70%" },
                maxWidth: "300px",
              }}
            >
              Comprar ahora
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { xs: "70%", sm: "70%" },
                maxWidth: "300px",
                marginBottom: { xs: "1rem" },
              }}
              onClick={() => {
                if (cantidad > 0) {
                  addToCart(producto, cantidad);
                } else {
                  addToCart(producto, 1);
                }
                window.scrollTo({ top: 0 });
                navigate("/carrito");
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
