import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Box } from "@mui/material";

function BarraBusqueda() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input type="text" placeholder="Buscar..." style={{ padding: 5 }} />
      <IconButton color="inherit" sx={{ paddingRight: 0 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
export default BarraBusqueda;
