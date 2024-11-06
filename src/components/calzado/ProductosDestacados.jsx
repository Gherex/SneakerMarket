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
import EnvioGratis from "../EnvioGratis";
import { useCalzado } from "./useCalzado";

function ProductosDestacados() {
  const { calzado: dataCalzado, loading } = useCalzado();

  return (
    <Container disableGutters sx={{ minWidth: "80%", pb: "2rem" }}>
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        sx={{
          textAlign: { xs: "center", sm: "center", md: "center", lg: "start" },
          margin: { xs: "2rem 0 0.5rem", md: "4rem 0 1rem" },
          fontSize: { xs: "1.5rem", sm: "2.5rem" },
        }}
      >
        Productos destacados
      </Typography>
      {loading ? (
        <Typography
          variant="h4"
          component="p"
          color="primary"
          sx={{ textAlign: "center" }}
        >
          Cargando ...
        </Typography>
      ) : (
        <Grid2
          container
          spacing={3}
          sx={{ justifyContent: "center", padding: { xs: "0 2rem", lg: "0" } }}
        >
          {Object.entries(dataCalzado).map(([, productos]) => {
            return Object.entries(productos).map(([key, producto]) => (
              <Grid2 item size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={key}>
                <Card
                  sx={{
                    height: "500px",
                    width: "100%",
                    transition: "0.2s",
                    "&:hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  <CardActionArea>
                    {/* Contenedor de la imagen */}
                    <CardMedia
                      sx={{
                        width: "100%",
                        height: "250px",
                        alignContent: "center",
                      }}
                    >
                      <img
                        src={producto.imgCalzado.imgCal1}
                        alt={producto.titulo}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </CardMedia>
                    <Divider variant="middle" component="li" />
                    {/* Contenedor de los textos y el botón */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        padding: "1rem",
                        height: "250px", // El contenido ocupa el otro 50%
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
              </Grid2>
            ));
          })}
        </Grid2>
      )}
    </Container>
  );
}

export default ProductosDestacados;
