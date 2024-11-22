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
import RedoIcon from "@mui/icons-material/Redo";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const { cart, clearCart } = useCart();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [precioTotal, setPrecioTotal] = useState(0);
  const navigate = useNavigate();

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
        alignItems: "center",
        minHeight: "70vh",
        width: "100%",
      }}
      disableGutters
    >
      {cart.length > 0 ? (
        <Box
          disableGutters
          sx={{
            width: "100%",
            maxWidth: { xs: "100", md: "80%", lg: "75%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: { xs: "4rem", sm: "2rem" },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            sx={{ textAlign: "center", marginTop: "2rem" }}
          >
            Tu carrito:
          </Typography>
          <List
            sx={{
              width: "100%",
              color: "black",
              padding: "2rem 1rem 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {cart.map((producto) => (
              <ListItem
                key={producto.id}
                sx={{
                  minHeight: { xs: "auto", sm: "8rem" },
                  padding: { xs: 0 },
                  border: "1px solid grey",
                  marginBottom: "1rem",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={`/images/calzado/${producto.imgCalzado.imgCal1}`}
                  alt="Imagen del producto"
                  draggable="false"
                  style={{
                    width: isSmallScreen ? "100%" : "10rem",
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    width: "300px",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "start", sm: "center" },
                    justifyContent: "space-between",
                    flex: "1",
                    padding: { xs: "0 1rem", sm: "0 1rem" },
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      width: { xs: "100%", sm: "40%", md: "50%" },
                      padding: { xs: "1rem 0", sm: 0 },
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {producto.titulo}
                  </Typography>
                  <Typography component="p">
                    Cantidad: {producto.cantidad}
                  </Typography>
                  <Typography component="p" sx={{ padding: { xs: "1rem 0" } }}>
                    Total:{" "}
                    {Math.round(
                      producto.precio * 1000 * producto.cantidad * 100
                    ) / 100}{" "}
                    $
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>

          {/* CONTENEDOR PARA TOTAL A PAGAR Y BOTONES */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              width: "100%",
              marginTop: { sm: "1rem" },
              padding: { xs: "1rem", sm: "0 1rem" },
            }}
          >
            {/* BOTÓN VACIAR LISTA */}
            <Button
              variant="outlined"
              onClick={clearCart}
              sx={{
                fontSize: "1.2rem",
                marginLeft: "1rem",
                height: "3rem",
                width: { xs: "100%", sm: "12rem", md: "15rem" },
              }}
            >
              <DeleteSweepIcon style={{ marginRight: "0.2rem" }} />
              Vaciar lista
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "right" },
                width: "100%",
                padding: { xs: 0, sm: "2rem 0" },
              }}
            >
              {/* TEXTO TOTAL A PAGAR */}
              <Typography
                variant="h4"
                component="p"
                sx={{
                  color: "black",
                  padding: { xs: "3rem 0 1rem", sm: "1rem" },
                  fontSize: { xs: "1.5rem", sm: "1.7rem" },
                }}
              >
                Total a pagar:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {Math.round(precioTotal * 1000 * 100) / 100} $
                </span>
              </Typography>

              {/* BOTÓN IR A PAGAR */}
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.2rem",
                  marginLeft: { sm: "1rem" },
                  height: "3rem",
                  width: { xs: "100%", sm: "12rem", md: "15rem" },
                }}
              >
                Ir a pagar
                <RedoIcon style={{ marginLeft: "0.2rem" }} />
              </Button>
            </Box>
          </Box>
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

      {/* BOTON PARA EXPLORAR MAS CALZADOS -> TE LLEVA A CATEGORIAS: PRODUCTOS DESTACADOS */}
      <Button
        onClick={() =>
          navigate("/", {
            state: { scrollTo: "productos-destacados" },
          })
        }
        sx={{ fontSize: "1.2rem" }}
      >
        Explorar más opciones
      </Button>
    </Container>
  );
}

export default Carrito;
