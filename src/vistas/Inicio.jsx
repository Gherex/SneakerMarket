import Carrusel from "../components/carrusel/Carrusel";
import InfoCompras from "../components/infocompras/InfoCompras";
import Categorias from "../components/Categorias";
import { Container } from "@mui/material";
import ProductosDestacados from "../components/ProductosDestacados";

function Inicio() {
  return (
    <main>
      <Carrusel />
      <InfoCompras />
      <Container
        disableGutters
        sx={{ backgroundColor: "#d2d2d2", minWidth: "100%", pt: "1rem" }}
      >
        <Categorias />
        <ProductosDestacados />
      </Container>
    </main>
  );
}
export default Inicio;
