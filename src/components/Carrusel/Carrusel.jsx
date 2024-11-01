import { Button, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CirculosCarrusel from "./CirculosCarrusel";
import TextosCarrusel from "./TextosCarrusel";
import { useCarrusel } from "./useCarrusel";

function Carrusel() {
  const { arrayCarrusel, carruselIndex, incrementarIndex, decrementarIndex } =
    useCarrusel();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${arrayCarrusel[carruselIndex]})`,
        backgroundSize: isSmallScreen ? "cover" : "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: isSmallScreen ? "100%" : "33.33%",
        position: "relative",
      }}
    >
      {carruselIndex === 0 ? null : (
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            padding: isSmallScreen ? "2rem 0" : "2.5rem 0.1rem",
            zIndex: 1,
          }}
          onClick={decrementarIndex}
        >
          <ArrowBackIosNewIcon
            style={{ fontSize: isSmallScreen ? "1.2rem" : "2rem" }}
          />
        </Button>
      )}
      {carruselIndex === 2 ? null : (
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            padding: isSmallScreen ? "2rem 0" : "2.5rem 0.1rem",
            zIndex: 1,
          }}
          onClick={incrementarIndex}
        >
          <ArrowForwardIosIcon
            style={{ fontSize: isSmallScreen ? "1.2rem" : "2rem" }}
          />
        </Button>
      )}
      <TextosCarrusel carruselIndex={carruselIndex} />
      <CirculosCarrusel carruselIndex={carruselIndex} />
    </div>
  );
}

export default Carrusel;
