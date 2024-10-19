import BarraBusqueda from "./BarraBusqueda";
import Contacto from "./Contacto";
import Carrito from "./Carrito";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Container } from "@mui/material";

function BarraNavegacion() {
  return (
    <Container
      sx={{
        backgroundColor: "#303030",
        color: "f1f1f1",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav>
        <DensityMediumIcon />
        <img src="src\images\sneakerMarketLogo.png" />
        <BarraBusqueda />
        <Contacto />
        <Carrito />
      </nav>
    </Container>
  );
}
export default BarraNavegacion;
