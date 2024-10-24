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

function SideNavBar() {
  const [openCalzado, setOpenCalzado] = useState(false);

  return (
    <Box sx={{ width: 250, height: "100%", bgcolor: "#1976d2", color: "#fff" }}>
      <nav>
        <List>
          <ListItem disablePadding>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
            >
              <ListItemButton component="a">
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
                <ListItemButton component="a">
                  <ListItemText primary="Zapatos" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ pl: 4 }} disablePadding>
                <ListItemButton component="a">
                  <ListItemText primary="Zapatillas" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ pl: 4 }} disablePadding>
                <ListItemButton component="a">
                  <ListItemText primary="Botas" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Tu Carrito" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Contacto" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Sobre Nosotros" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default SideNavBar;
