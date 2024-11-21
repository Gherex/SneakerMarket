import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useCart } from "../hooks/useCart";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";

function Carrito() {
  const { cart, clearCart } = useCart();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (sum, producto) => sum + producto.precio * producto.cantidad,
      0
    );
    setPrecioTotal(total);
  }, [cart]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "start",
        minHeight: "70vh",
      }}
    >
      {cart.length > 0 ? (
        <Box width="100%">
          <List sx={{ color: "black", width: "100%" }}>
            {cart.map((producto) => (
              <ListItem
                key={producto.id}
                sx={{
                  minHeight: "10rem",
                  minWidth: "90%",
                  border: "1px solid grey",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={`/images/calzado/${producto.imgCalzado.imgCal1}`}
                  alt="Imagen del producto"
                  style={{
                    width: isSmallScreen ? "200%" : "10rem",
                    minHeight: isSmallScreen ? "300px" : "auto",
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flex: "1",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      minWidth: "60%",
                    }}
                  >
                    {producto.titulo}
                  </Typography>
                  <Typography component="p">{producto.cantidad}</Typography>
                  <Typography component="p">
                    {Math.round(
                      producto.precio * 1000 * producto.cantidad * 100
                    ) / 100}{" "}
                    $
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
          <Typography
            variant="h4"
            component="p"
            sx={{
              marginTop: "1rem",
              color: "black",
              textAlign: "right",
              padding: "1rem",
            }}
          >
            Total a pagar:{" "}
            <span style={{ fontWeight: "bold" }}>
              {Math.round(precioTotal * 1000 * 100) / 100} $
            </span>
          </Typography>
          <Button variant="outlined" onClick={clearCart}>
            <DeleteSweepIcon style={{ marginRight: "0.2rem" }} />
            Vaciar lista
          </Button>
        </Box>
      ) : (
        <Typography
          color="primary"
          variant="h4"
          component="p"
          padding="3rem 0"
          sx={{ textAlign: "center", margin: "0 auto" }}
        >
          No se han agregado productos al carrito.
        </Typography>
      )}
    </Container>
  );
}

export default Carrito;
