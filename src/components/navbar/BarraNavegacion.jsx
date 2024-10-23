import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SideNavBar from "./SideNavBar";

function BarraNavegacion() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        <DehazeIcon />
      </Button>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <SideNavBar />
      </Drawer>
    </>
  );
}
export default BarraNavegacion;
