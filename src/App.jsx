import { Box, CssBaseline } from "@mui/material";
import Inicio from "./vistas/Inicio";
import Footer from "./components/Footer";
import BarraNavegacion from "./components/navbar/BarraNavegacion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Contacto from "./vistas/Contacto";
import Carrito from "./vistas/Carrito";
import SobreNosotros from "./vistas/SobreNosotros";
import Zapatillas from "./components/calzado/Zapatillas";
import Zapatos from "./components/calzado/Zapatos";
import Botas from "./components/calzado/Botas";
import VistaDetallada from "./vistas/vistadetallada/VistaDetallada";
import { BusquedaProvider } from "./context/BusquedaProvider";
import VistaDeBusqueda from "./vistas/VistaDeBusqueda";
import { CartProvider } from "./context/CartProvider";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#040412",
      },
      secondary: {
        main: "#94a2ab",
      },
      text: {
        primary: "rgba(255,255,255,0.87)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BusquedaProvider>
        <CartProvider>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <BarraNavegacion />
            <Box component="main" sx={{ flexGrow: 1, paddingTop: "64px" }}>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/sobrenosotros" element={<SobreNosotros />} />
                <Route path="/zapatillas" element={<Zapatillas />} />
                <Route path="/zapatos" element={<Zapatos />} />
                <Route path="/botas" element={<Botas />} />
                <Route path="/calzado/:id" element={<VistaDetallada />} />
                <Route path="/busqueda" element={<VistaDeBusqueda />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </CartProvider>
      </BusquedaProvider>
    </ThemeProvider>
  );
}

export default App;
