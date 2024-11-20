import { Box, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@emotion/react";

function PresentacionProducto({ img1, img2, img3 }) {
  const arrayImagenes = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  function incrementarIndex() {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  }

  function decrementarIndex() {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        width: { xs: "50%", sm: "50%", md: "420px", lg: "900px" },
        margin: "auto",
        height: "100%",
        minHeight: "200px",
      }}
    >
      {/* Botón izquierdo */}
      <Button
        variant="contained"
        sx={{
          padding: isSmallScreen ? "0.5rem" : "1rem",
          borderRadius: isSmallScreen ? "0" : "50%",
          minWidth: "min-content",
          position: isSmallScreen ? "absolute" : "relative",
          left: isSmallScreen ? 20 : "",
        }}
        onClick={decrementarIndex}
      >
        <ArrowBackIosNewIcon
          style={{ fontSize: isSmallScreen ? "1.2rem" : "2rem" }}
        />
      </Button>

      {/* Imagen */}
      <img
        src={`/images/calzado/${arrayImagenes[index]}`}
        alt={`Foto de calzado perfil ${index + 1}`}
        draggable="false"
        style={{
          width: isSmallScreen ? "200%" : "100%",
          minHeight: isSmallScreen ? "300px" : "auto",
          maxWidth: "600px",
          objectFit: "contain",
        }}
      />

      {/* Botón derecho */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: isSmallScreen ? "absolute" : "relative",
          right: isSmallScreen ? 20 : "",
          padding: isSmallScreen ? "0.5rem" : "1rem",
          borderRadius: isSmallScreen ? 0 : "50%",
          minWidth: "min-content",
        }}
        onClick={incrementarIndex}
      >
        <ArrowForwardIosIcon
          style={{ fontSize: isSmallScreen ? "1.2rem" : "2rem" }}
        />
      </Button>
    </Box>
  );
}

export default PresentacionProducto;
