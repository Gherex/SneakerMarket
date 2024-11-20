import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Box, Input } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BusquedaContext } from "../../context/BusquedaContext";

function BarraBusqueda() {
  const { setBusqueda } = useContext(BusquedaContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSearch() {
    let newInput = input;
    if (newInput !== "") {
      setBusqueda(input);
      navigate("/busqueda");
    }
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Input
        type="text"
        placeholder="Buscar..."
        sx={{ width: { xs: "150px" } }}
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <IconButton
        color="inherit"
        sx={{ paddingRight: 0 }}
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default BarraBusqueda;
