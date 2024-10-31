import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { arrayTextos } from "./arrayTextosCarrusel";

TextosCarrusel.propTypes = {
  carruselIndex: PropTypes.number.isRequired,
};

function TextosCarrusel({ carruselIndex: index }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0.1rem",
        paddingLeft: "3rem",
        fontSize: "1.3rem",
        fontWeight: "bold",
        userSelect: "none",
      }}
    >
      <p style={{ margin: 0, textShadow: "2px 2px 2px black" }}>
        {arrayTextos[index].pretitulo}
      </p>
      <h2 style={{ margin: "1rem 0", textShadow: "2px 2px 2px black" }}>
        {arrayTextos[index].titulo}
      </h2>
      <p style={{ margin: 0, textShadow: "2px 2px 2px black" }}>
        {arrayTextos[index].descripcion}
      </p>
      <Button
        variant="contained"
        style={{ width: "auto", marginTop: "1.2rem", fontWeight: "bold" }}
      >
        {arrayTextos[index].boton}
      </Button>
    </div>
  );
}

export default TextosCarrusel;
