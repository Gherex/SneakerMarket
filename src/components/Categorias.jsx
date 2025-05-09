import { Card, Box, Container, Grid2, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import imgZapatillas from "/images/calzado/categoria-zapatillas.jpg";
import imgZapatos from "/images/calzado/categoria-zapatos.jpg";
import imgBotas from "/images/calzado/categoria-botas.jpg";
import { useContext } from "react";
import { BusquedaContext } from "../context/BusquedaContext";

function Categorias() {
  const { setBusqueda } = useContext(BusquedaContext);

  function resetearBusqueda() {
    setBusqueda("");
  }

  return (
    <Container disableGutters sx={{ minWidth: "80%" }}>
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        sx={{
          textAlign: { xs: "center", sm: "center", md: "center", lg: "start" },
          mt: "1rem",
          fontWeight: "bold",
        }}
      >
        Categorías
      </Typography>
      <Box sx={{ flexGrow: 1, marginTop: 2, minHeight: "600px" }}>
        <Grid2
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <NavLink
              to="/zapatillas"
              style={{ textDecoration: "none" }}
              onClick={() => {
                window.scrollTo({ top: 0 });
                resetearBusqueda();
              }}
            >
              <Card
                sx={{
                  backgroundImage: `url(${imgZapatillas})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: { xs: "300px", md: "100%" },
                  padding: "10rem",
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              />
            </NavLink>
          </Grid2>
          <Grid2
            container
            direction="column"
            item
            size={{ xs: 12, md: 6 }}
            columnSpacing={0}
            rowSpacing={3}
          >
            <Grid2 item size={{ xs: 6 }}>
              <NavLink
                to="/zapatos"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  resetearBusqueda();
                }}
              >
                <Card
                  sx={{
                    backgroundImage: `url(${imgZapatos})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "200%",
                    height: { xs: "300px" },
                    aspectRatio: 2,
                    transition: "0.2s",
                    "&:hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                />
              </NavLink>
            </Grid2>
            <Grid2 item size={{ xs: 6 }}>
              <NavLink
                to="/botas"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  resetearBusqueda();
                }}
              >
                <Card
                  sx={{
                    backgroundImage: `url(${imgBotas})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "200%",
                    height: { xs: "300px" },
                    aspectRatio: 2,
                    transition: "0.2s",
                    "&:hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                />
              </NavLink>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}

export default Categorias;
