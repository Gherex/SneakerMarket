import { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import EnvioGratis from "../components/EnvioGratis";
import { useCalzado } from "../hooks/useCalzado";
import { BusquedaContext } from "../context/BusquedaContext";
import { Link } from "react-router-dom";

function VistaFiltrada({ tipoCalzado }) {
  const { busqueda } = useContext(BusquedaContext);
  const { calzado: dataCalzado, loading, error } = useCalzado({ busqueda });

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
    <Container disableGutters sx={{ minWidth: "80%", pb: "2rem" }}>
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        sx={{
          textAlign: "center",
          margin: { xs: "2rem 0 0.5rem", md: "4rem 0 1rem" },
          fontSize: { xs: "1.5rem", sm: "2.5rem" },
        }}
      >
        {tipoCalzado}
      </Typography>
      <Grid2
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          padding: { xs: "0 2rem", lg: "0" },
        }}
      >
        {dataCalzado &&
          Object.entries(dataCalzado[tipoCalzado.toLowerCase()]).map(
            ([key, producto]) => (
              <Grid2 item size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={key}>
                <Link
                  to={`/calzado/${producto.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <Card
                    sx={{
                      height: "min-content",
                      width: "100%",
                      transition: "0.2s",
                      "&:hover": {
                        transform: "scale(1.01)",
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        sx={{
                          width: "100%",
                          height: "250px",
                          alignContent: "center",
                        }}
                      >
                        <img
                          src={`/images/calzado/${producto.imgCalzado.imgCal1}`}
                          alt={producto.titulo}
                          style={{
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </CardMedia>
                      <Divider variant="middle" component="li" />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          padding: "1rem",
                          height: "250px",
                        }}
                      >
                        <Typography variant="h4" component="p" color="primary">
                          $ {producto.precio}
                        </Typography>
                        <Typography
                          variant="body1"
                          component="p"
                          color="secondary"
                        >
                          {producto.titulo}
                        </Typography>
                        <EnvioGratis />
                        <Button
                          variant="outlined"
                          sx={{
                            width: "100%",
                            marginBottom: "1rem",
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "1.1rem",
                          }}
                        >
                          Elegir opciones
                        </Button>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid2>
            )
          )}
      </Grid2>
    </Container>
  );
}

export default VistaFiltrada;
