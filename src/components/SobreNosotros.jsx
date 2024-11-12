import { Container, Typography } from "@mui/material";
import imgBrothers from "/images/brothers.png";

function SobreNosotros() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 0 },
      }}
    >
      <div
        style={{
          height: "580px",
          width: "55%",
          backgroundImage: `url(${imgBrothers})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          overflow: "hidden",
        }}
      ></div>
      <Typography
        variant="h3"
        component="h2"
        color="primary"
        sx={{ textAlign: "center", fontWeight: "bold", padding: "1rem 0" }}
      >
        Sobre Nosotros
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color="primary"
        sx={{ fontSize: "1.3rem" }}
      >
        <span style={{ fontWeight: "bold" }}>SNEAKER STORE®</span> es una marca
        de calzado fundada en el año 2020 en la Ciudad de Santa Fe por dos
        hermanos emprendedores, resultado de la fusión de dos grandes pasiones:
        una profunda tradición familiar en el sector del calzado y el deseo de
        contribuir al conocimiento y la difusión de las ideas de libertad desde
        el ámbito privado.
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Nuestros inicios…</span>
        <br />
        Desde siempre nos apasionó comprar y vender, identificar oportunidades y
        encontrar el negocio. Sin embargo, al crecer, nos dimos cuenta de que en
        nuestro país el deseo de progresar y ofrecer una mejor calidad de vida a
        nuestros seres queridos a menudo se malinterpreta; quienes logran
        destacarse son vistos como estafadores o políticos inescrupulosos.
        <br />
        ¿Por qué ocurría esto? Como nietos de inmigrantes, recordamos que
        nuestros abuelos nos contaban cómo vinieron a Argentina para “hacerse la
        América,” trabajar duro, emprender y alcanzar sus sueños.
        <br />
        Convencidos de que esa era una realidad posible, decidimos investigar la
        historia de nuestro país para entender mejor qué había cambiado. Con
        sorpresa, descubrimos que hacia finales del siglo XIX Argentina estaba
        entre las naciones más prósperas del mundo. ¿Cómo habíamos retrocedido
        tanto en apenas un siglo? Así fue como encontramos las ideas de la
        libertad y comprendimos que esta decadencia se originó al abandonar los
        principios y valores que guiaron a nuestros abuelos.
        <br />
        En 2019, mientras terminábamos nuestros estudios universitarios y
        trabajábamos en el negocio familiar de calzado, tuvimos la idea de crear
        una marca que representara nuestros ideales y valores. De esta forma
        nació <span style={{ fontWeight: "bold" }}>SNEAKER STORE®.</span>
        <br />
        <br />
        Hoy, desde SNEAKER STORE®, continuamos apoyando el crecimiento de las
        ideas de libertad, ofreciendo productos de excelente calidad a un precio
        competitivo y acompañando, en cada paso, a todos aquellos que se
        levantan cada día para estudiar, trabajar, emprender y dar lo mejor de
        sí mismos para alcanzar sus sueños y posicionar a nuestro país en el
        lugar que merece. Estamos convencidos de que juntos podremos lograrlo.
        <br />
        <br />
        <p style={{ fontWeight: "bold", textAlign: "right" }}>
          German y Gaston Martinez
        </p>
      </Typography>
    </Container>
  );
}
export default SobreNosotros;
