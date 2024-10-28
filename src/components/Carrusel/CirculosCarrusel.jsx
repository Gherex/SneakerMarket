import PropTypes from "prop-types";

CirculosCarrusel.propTypes = {
  carruselIndex: PropTypes.number.isRequired,
};

function CirculosCarrusel({ carruselIndex }) {
  const arrayCircles = new Array(3).fill(null);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        left: 0,
        right: 0,
        margin: "auto",
        width: "35px",
        height: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {arrayCircles.map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: index === carruselIndex ? "#fff" : "#b0b0b0",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </div>
  );
}
export default CirculosCarrusel;
