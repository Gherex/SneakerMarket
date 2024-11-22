import Carrusel from "../components/carrusel/Carrusel";
import InfoCompras from "../components/infocompras/InfoCompras";
import Categorias from "../components/Categorias";
import { Container } from "@mui/material";
import ProductosDestacados from "../components/ProductosDestacados";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Inicio() {
  const productosDestacadosRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "productos-destacados") {
      productosDestacadosRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <Carrusel />
      <InfoCompras />
      <Container
        ref={productosDestacadosRef}
        disableGutters
        id="productos-destacados"
        sx={{ backgroundColor: "#d2d2d2", minWidth: "100%", pt: "1rem" }}
      >
        <Categorias />
        <ProductosDestacados />
      </Container>
    </main>
  );
}

export default Inicio;
