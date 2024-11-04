import { Box, useMediaQuery, useTheme } from "@mui/material";
import TarjetaInfo from "./TarjetaInfo";
import Slider from "react-slick";
import { arrayTarjetasInfo } from "./arrayTarjetasInfo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function InfoCompras() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { md: "1rem 2rem", lg: "0 5rem" },
        overflow: "hidden",
        userSelect: "none",
        minHeight: "300px", // Ajuste de altura mínima para pantallas pequeñas
      }}
    >
      {isSmallScreen ? (
        <Box
          sx={{
            width: "100%",
            "& .slick-slide": { display: "flex", justifyContent: "center" },
          }}
        >
          <Slider {...settings}>
            {arrayTarjetasInfo.map(
              ({ titulo, subtitulo, nombreIcono }, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    minHeight: "100%",
                  }}
                >
                  <TarjetaInfo
                    titulo={titulo}
                    subtitulo={subtitulo}
                    nombreIcono={nombreIcono}
                  />
                </Box>
              )
            )}
          </Slider>
        </Box>
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
