import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import imagenLogo from "/images/sneakerMarketLogo.png";
import { NavLink } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        color: "#d2d2d2",
        marginTop: "8rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center" },
          justifyContent: "space-around",
          padding: "20px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            margin: { xs: "2rem 0" },
          }}
        >
          <IconButton
            component={NavLink}
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={imagenLogo} alt="Logo" style={{ width: 50 }} />
          </IconButton>
          <Typography color="#d2d2d2">
            Pasión argentina en cada paso.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignContent: "center",
            margin: { xs: "2rem 0" },
          }}
        >
          <Typography variant="h6" component="h4" disablePadding>
            Links de interés
          </Typography>
          <List sx={{ padding: 0 }}>
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/contacto"
                sx={{ padding: 0 }}
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                <ListItemText primary="Contacto" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/sobrenosotros"
                sx={{ padding: 0 }}
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                <ListItemText primary="Sobre Nosotros" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box textAlign={{ xs: "center", sm: "end" }} margin={{ xs: "2rem 0" }}>
          <Box>
            <FacebookOutlinedIcon style={{ cursor: "pointer" }} />
            <InstagramIcon style={{ cursor: "pointer" }} />
          </Box>
          <Typography variant="body1" component="p" marginBottom="0.2rem">
            Tel: 3425285858
          </Typography>
          <Typography variant="body1" component="p" marginBottom="0.2rem">
            germilagger@gmail.com
          </Typography>
          <Typography variant="body1" component="p">
            Santa Fe, Argentina
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "90%",
          backgroundColor: "#d2d2d2",
          height: "1px",
          margin: "20px 0",
        }}
      />
      <Typography pb="1rem" fontSize="0.8rem">
        &copy; 2024 Gherex. Todos los derechos reservados.
      </Typography>
    </footer>
  );
}

export default Footer;
