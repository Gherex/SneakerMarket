import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

function SideNavBar() {
  const [openCalzado, setOpenCalzado] = useState(false);

  return (
    <Box sx={{ width: 250, bgcolor: "slateblue" }}>
      <nav>
        <List>
          <ListItem>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
            >
              <ListItemText primary="Calzados" />
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
              <ListItem sx={{ pl: 4 }}>
                <ListItemText primary="Zapatos" />
              </ListItem>
              <ListItem sx={{ pl: 4 }}>
                <ListItemText primary="Zapatillas" />
              </ListItem>
              <ListItem sx={{ pl: 4 }}>
                <ListItemText primary="Botas" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem>
            <ListItemText primary="Carrito" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contacto" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sobre Nosotros" />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default SideNavBar;
