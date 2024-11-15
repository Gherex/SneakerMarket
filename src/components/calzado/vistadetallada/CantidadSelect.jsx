import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function CantidadSelect() {
  const [cantidad, setCantidad] = useState("");

  const handleChange = (event) => {
    setCantidad(event.target.value);
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
        }}
      >
        <MenuItem value="">
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
