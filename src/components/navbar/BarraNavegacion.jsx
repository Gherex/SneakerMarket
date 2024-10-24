import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SideNavBar from "./SideNavBar";
import BarraBusqueda from "./BarraBusqueda";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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

        <IconButton
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img src="src/images/sneakerMarketLogo.png" style={{ width: 50 }} />
        </IconButton>

        <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <IconButton color="inherit">
            <BarraBusqueda />
          </IconButton>
          <IconButton color="inherit">
            <MailOutlineIcon />
          </IconButton>
          <IconButton color="inherit">
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
