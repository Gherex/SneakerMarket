import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CirculosCarrusel from "./CirculosCarrusel";
import TextosCarrusel from "./TextosCarrusel";
import { useCarrusel } from "./useCarrusel";

function Carrusel() {
  const { arrayCarrusel, carruselIndex, incrementarIndex, decrementarIndex } = useCarrusel();

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${arrayCarrusel[carruselIndex]})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "33.33%",
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
            padding: "2.5rem 0.1rem",
          }}
          onClick={decrementarIndex}
        >
          <ArrowBackIosNewIcon style={{ fontSize: "2rem" }} />
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
            padding: "2.5rem 0.1rem",
          }}
          onClick={incrementarIndex}
        >
          <ArrowForwardIosIcon style={{ fontSize: "2rem" }} />
        </Button>
      )}
      <TextosCarrusel carruselIndex={carruselIndex} />
      <CirculosCarrusel carruselIndex={carruselIndex} />
    </div>
  );
}

export default Carrusel;
