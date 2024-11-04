import { Box, CssBaseline } from "@mui/material";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import BarraNavegacion from "./components/navbar/BarraNavegacion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import SobreNosotros from "./components/SobreNosotros";

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
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Asegura que ocupe toda la pantalla
        }}
      >
        <BarraNavegacion />
        <Box component="main" sx={{ flexGrow: 1, paddingTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
