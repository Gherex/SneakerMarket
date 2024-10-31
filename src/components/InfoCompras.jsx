import { Box } from "@mui/material";
import TarjetaInfo from "./TarjetaInfo";

function InfoCompras() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 5rem",
      }}
    >
      <TarjetaInfo
        titulo="Aprovechá el beneficio del envío gratis"
        subtitulo="Aplica en compras a partir de $30,000. Sumá todo lo que quieras al carrito."
        nombreIcono="camion"
      />
      <TarjetaInfo
        titulo="Elegí tu medio de pago favorito"
        subtitulo="Pagá con tarjeta o en efectivo. Tu dinero está protegido con Mercado Pago."
        nombreIcono="tarjeta"
      />
      <TarjetaInfo
        titulo="Recibí tus productos en menos de 48hs"
        subtitulo="Tus paquetes están seguros. Tenés el respaldo de los envíos con Mercado Libre."
        nombreIcono="paquete"
      />
    </Box>
  );
}
export default InfoCompras;
