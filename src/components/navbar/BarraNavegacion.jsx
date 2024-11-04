import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SideNavBar from "./SideNavBar";
import BarraBusqueda from "./BarraBusqueda";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { NavLink } from "react-router-dom";

function BarraNavegacion() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ position: "relative", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          size="large"
          onClick={() => {
            setOpen(true);
          }}
        >
          <DehazeIcon />
        </IconButton>

        {/* Logo de Zapatilla: Boton a Inicio */}
        <IconButton
          sx={{
            position: { xs: "relative", md: "absolute" },
            left: { md: "50%" },
            transform: { md: "translateX(-50%)" },
            display: "flex",
            justifyContent: { xs: "flex-start" },
            pl: { xs: 1, md: 0 },
          }}
          component={NavLink}
          to="/"
        >
          <img src="public/sneakerMarketLogo.png" style={{ width: 50 }} />
        </IconButton>

        <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <IconButton color="inherit">
            <BarraBusqueda />
          </IconButton>
          {/* Contacto */}
          <IconButton
            color="inherit"
            component={NavLink}
            to="/contacto"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <MailOutlineIcon />
          </IconButton>
          {/* Tu carrito */}
          <IconButton color="inherit" component={NavLink} to="/carrito">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <SideNavBar />
      </Drawer>
    </AppBar>
  );
}
export default BarraNavegacion;
