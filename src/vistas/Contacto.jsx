import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Contacto() {
  return (
    <Container
      sx={{
        backgroundColor: "primary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h3"
        color="primary"
        sx={{
          margin: "2rem 0",
          fontSize: { xs: "1.2rem", md: "2rem", textAlign: "center" },
        }}
      >
        ¿Tienes alguna pregunta? ¡Estamos encantados de ayudarte!
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: { xs: "80vw", sm: "450px" } },
          "& .MuiInputBase-input": { color: "black" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="name-input"
          label="Su nombre (requerido)"
          defaultValue="Nombre"
        />
        <TextField
          required
          id="email-input"
          label="Su email (requerido)"
          defaultValue="ejemplo@gmail.com"
        />
        <TextField
          required
          id="phone-input"
          label="Su teléfono (requerido)"
          defaultValue="123456789"
        />
        <TextField
          id="asunto-input"
          label="Asunto"
          defaultValue="Motivo del mensaje"
        />
        <TextField
          id="mensaje-input"
          label="Su mensaje:"
          defaultValue=" "
          multiline
          rows={4}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ margin: { xs: "0.8rem 0 3rem", sm: "2rem 0" }, width: "200px" }}
      >
        Enviar
      </Button>
    </Container>
  );
}
export default Contacto;
