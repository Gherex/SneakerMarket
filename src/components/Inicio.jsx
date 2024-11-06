import Carrusel from "./carrusel/Carrusel";
import InfoCompras from "./infocompras/InfoCompras";
import Categorias from "./Categorias";
import ProductosDestacados from "./calzado/ProductosDestacados";
import { Container } from "@mui/material";

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
