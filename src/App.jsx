import { Container, CssBaseline } from "@mui/material";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import BarraNavegacion from "./components/NavBar/BarraNavegacion";

function App() {
  return (
    <Container>
      <CssBaseline />
      <BarraNavegacion />
      <Inicio />
      <Footer />
    </Container>
  );
}

export default App;
