import { useState } from "react";
import bgZapas1 from "../images/bg-zapas-1.png";
import bgZapas2 from "../images/bg-zapas-2.png";
import bgZapas3 from "../images/bg-zapas-3.png";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carrusel() {
  const arrayCarrusel = [bgZapas1, bgZapas2, bgZapas3];
  const [carruselIndex, setCarruselIndex] = useState(0);

  function incrementarIndex() {
    setCarruselIndex((prevIndex) => {
      const newIndex =
        prevIndex < arrayCarrusel.length - 1 ? prevIndex + 1 : prevIndex;
      return newIndex;
    });
  }

  function decrementarIndex() {
    setCarruselIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
      return newIndex;
    });
  }

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
    </div>
  );
}

export default Carrusel;
