import { Box, useMediaQuery, useTheme } from "@mui/material";
import TarjetaInfo from "./TarjetaInfo";
import SwipeableViews from "react-swipeable-views";
import { arrayTarjetasInfo } from "./arrayTarjetasInfo";

function InfoCompras() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { md: "1rem 2rem", lg: "0 5rem" },
        overflowX: isSmallScreen ? "hidden" : "auto",
        userSelect: "none",
      }}
    >
      {isSmallScreen ? (
        <SwipeableViews enableMouseEvents>
          {arrayTarjetasInfo.map(
            ({ titulo, subtitulo, nombreIcono }, index) => (
              <Box
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <TarjetaInfo
                  titulo={titulo}
                  subtitulo={subtitulo}
                  nombreIcono={nombreIcono}
                />
              </Box>
            )
          )}
        </SwipeableViews>
      ) : (
        arrayTarjetasInfo.map(({ titulo, subtitulo, nombreIcono }, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <TarjetaInfo
              titulo={titulo}
              subtitulo={subtitulo}
              nombreIcono={nombreIcono}
            />
          </Box>
        ))
      )}
    </Box>
  );
}

export default InfoCompras;
