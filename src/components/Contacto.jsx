import {
  Container,
  Input,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";

function Contacto() {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h3"
        color="primary"
        sx={{ marginBottom: "1rem" }}
      >
        ¿Tienes alguna pregunta? ¡Estamos encantados de ayudarte!
      </Typography>
      <InputBase
        sx={{ minHeight: "70%", minWidth: "70%", backgroundColor: "#acacac" }}
      >
        <Input>
          <InputLabel color="primary">Su nombre (requerido)</InputLabel>
        </Input>
      </InputBase>
    </Container>
  );
}
export default Contacto;
