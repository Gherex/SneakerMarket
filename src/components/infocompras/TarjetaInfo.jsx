import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import RedeemTwoToneIcon from "@mui/icons-material/RedeemTwoTone";
import { Card, Icon, Typography } from "@mui/material";
import PropTypes from "prop-types";

TarjetaInfo.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  nombreIcono: PropTypes.string.isRequired,
};

function devuelveIcono(nombre) {
  if (nombre === "camion")
    return <LocalShippingTwoToneIcon style={{ fontSize: "5rem" }} />;
  else if (nombre === "tarjeta")
    return <CreditCardTwoToneIcon style={{ fontSize: "5rem" }} />;
  else if (nombre === "paquete")
    return <RedeemTwoToneIcon style={{ fontSize: "5rem" }} />;
}

function TarjetaInfo({ titulo, subtitulo, nombreIcono }) {
  return (
    <Card
      sx={{
        color: "black",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem 0",
        textAlign: "center",
        padding: { xs: "0 2rem", md: "1rem 2rem", xl: "2rem 5rem" },
      }}
    >
      <Icon sx={{ width: "5rem", height: "5rem", marginBottom: "1rem" }}>
        {devuelveIcono(nombreIcono)}
      </Icon>
      <Typography
        variant="h6"
        component="h2"
        marginBottom={1}
        sx={{ textWrap: "balance" }}
      >
        {titulo}
      </Typography>
      <Typography component="p" sx={{ textWrap: "pretty" }}>
        {subtitulo}
      </Typography>
    </Card>
  );
}
export default TarjetaInfo;
