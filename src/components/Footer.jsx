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
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          padding: "20px 0",
        }}
      >
        <Box>
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
        <Box>
          <Typography variant="h6" component="h4">
            Links de interés
          </Typography>
          <List>
            <ListItem sx={{ pl: 4 }} disablePadding>
              <ListItemButton component={NavLink} to="/contacto">
                <ListItemText primary="Contacto" />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ pl: 4 }} disablePadding>
              <ListItemButton component={NavLink} to="/sobrenosotros">
                <ListItemText primary="Sobre Nosotros" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Box>
            <FacebookOutlinedIcon style={{ cursor: "pointer" }} />
            <InstagramIcon style={{ cursor: "pointer" }} />
          </Box>
          <Typography variant="body1" component="p">
            Tel: 3425285858
          </Typography>
          <Typography variant="body1" component="p">
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
      <Typography pb="1rem">
        &copy; 2024 Gherex. Todos los derechos reservados.
      </Typography>
    </footer>
  );
}

export default Footer;
