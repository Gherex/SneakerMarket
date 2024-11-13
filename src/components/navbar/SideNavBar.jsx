import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function SideNavBar() {
  const [openCalzado, setOpenCalzado] = useState(false);

  return (
    <Box sx={{ width: 250, height: "100%", bgcolor: "#040412" }}>
      <nav>
        <List>
          <ListItem disablePadding>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
            >
              <ListItemButton
                component="button"
                onClick={() => setOpenCalzado(!openCalzado)}
              >
                <ListItemText primary="Calzados" />
              </ListItemButton>
              <Button
                color="inherit"
                onClick={() => setOpenCalzado(!openCalzado)}
              >
                {openCalzado ? <RemoveIcon /> : <AddIcon />}
              </Button>
            </Box>
          </ListItem>
          <Collapse in={openCalzado} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }} disablePadding>
                <ListItemButton component={NavLink} to="/zapatos">
                  <ListItemText primary="Zapatos" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ pl: 4 }} disablePadding>
                <ListItemButton component={NavLink} to="/zapatillas">
                  <ListItemText primary="Zapatillas" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ pl: 4 }} disablePadding>
                <ListItemButton component={NavLink} to="/botas">
                  <ListItemText primary="Botas" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/carrito">
              <ListItemText primary="Tu Carrito" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/contacto"
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
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
            >
              <ListItemText primary="Sobre Nosotros" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default SideNavBar;
