import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function CantidadSelect({ setCantidad }) {
  const [cantidad, setCantidadLocal] = useState(0);

  const handleChange = (event) => {
    const nuevaCantidad = parseInt(event.target.value, 10) || 0; // Convertir a número
    setCantidadLocal(nuevaCantidad);
    setCantidad(nuevaCantidad);
  };

  return (
    <FormControl fullWidth variant="outlined" sx={{ color: "black" }}>
      <InputLabel id="cantidad-label" sx={{ color: "black" }}>
        Cantidad
      </InputLabel>
      <Select
        labelId="cantidad-label"
        value={cantidad}
        onChange={handleChange}
        label="Cantidad"
        sx={{
          color: "black",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          width: { xs: "90%" },
        }}
      >
        <MenuItem value={0}>
          <em style={{ color: "gray" }}>Seleccioná una opción</em>
        </MenuItem>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
          <MenuItem key={number} value={number} sx={{ color: "black" }}>
            {number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CantidadSelect;
