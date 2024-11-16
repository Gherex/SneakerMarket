import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Box, Input } from "@mui/material";
import { useContext, useState } from "react";
import { BusquedaContext } from "../../context/BusquedaContext";
import { Link } from "react-router-dom";

function BarraBusqueda() {
  const { setBusqueda } = useContext(BusquedaContext);
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Input
        type="text"
        placeholder="Buscar..."
        sx={{ width: { xs: "150px" } }}
        onChange={handleInputChange}
      />
      <Link
        to="/busqueda"
        style={{ textDecoration: "none", listStyle: "none", color: "inherit" }}
      >
        <IconButton
          color="inherit"
          sx={{ paddingRight: 0 }}
          onClick={() => {
            setBusqueda(input);
          }}
        >
          <SearchIcon />
        </IconButton>
      </Link>
    </Box>
  );
}

export default BarraBusqueda;
