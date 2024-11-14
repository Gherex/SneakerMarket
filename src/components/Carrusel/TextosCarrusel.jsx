import { Button, useMediaQuery, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import { arrayTextos } from "./arrayTextosCarrusel";
import { NavLink } from "react-router-dom";

TextosCarrusel.propTypes = {
  carruselIndex: PropTypes.number.isRequired,
};

function TextosCarrusel({ carruselIndex: index }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: isSmallScreen ? "100%" : "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: isSmallScreen ? "0.5rem" : "0.1rem",
        padding: isSmallScreen ? "5rem" : isMediumScreen ? "2rem" : "3rem",
        fontSize: "1rem",
        fontWeight: "bold",
        userSelect: "none",
        zIndex: 10,
      }}
    >
      <p
        style={{
          margin: 0,
          textShadow: "2px 2px 2px black",
          fontSize: "1rem",
        }}
      >
        {arrayTextos[index].pretitulo}
      </p>
      <h2
        style={{
          margin: isSmallScreen
            ? "0 0"
            : isMediumScreen
              ? "0.2rem 0"
              : "1rem 0",
          textShadow: "2px 2px 2px black",
          fontSize: isSmallScreen
            ? "1.2rem"
            : isMediumScreen
              ? "1.5rem"
              : "3rem",
        }}
      >
        {arrayTextos[index].titulo}
      </h2>
      <p
        style={{
          margin: 0,
          textShadow: "2px 2px 2px black",
          fontSize: isSmallScreen
            ? "1rem"
            : isMediumScreen
              ? "1.2rem"
              : "1.5rem",
        }}
      >
        {arrayTextos[index].descripcion}
      </p>
      <Button
        variant="contained"
        style={{
          width: "auto",
          marginTop: isSmallScreen ? "0.8rem" : "1.1rem",
          fontWeight: "bold",
          fontSize: isSmallScreen ? "0.7rem" : "1rem",
          padding: isSmallScreen ? "0.4rem 1rem" : "0.6rem 1.5rem",
        }}
        component={NavLink}
        to={index == 0 ? "/botas" : index == 1 ? "/zapatos" : "/zapatillas"}
      >
        {arrayTextos[index].boton}
      </Button>
    </div>
  );
}

export default TextosCarrusel;
