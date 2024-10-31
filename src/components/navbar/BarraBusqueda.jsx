import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Box, Input } from "@mui/material";

function BarraBusqueda() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Input
        type="text"
        placeholder="Buscar..."
        sx={{ width: { xs: "150px" } }}
      />
      <IconButton color="inherit" sx={{ paddingRight: 0 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
export default BarraBusqueda;
