import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function TalleSelect() {
  const [talle, setTalle] = useState("");

  const handleChange = (event) => {
    setTalle(event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined" sx={{ color: "black" }}>
      <InputLabel id="talle-label" sx={{ color: "black" }}>
        Talle
      </InputLabel>
      <Select
        labelId="talle-label"
        value={talle}
        onChange={handleChange}
        label="Talle"
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
        {[38, 39, 40, 41, 42, 43, 44].map((talle) => (
          <MenuItem key={talle} value={talle} sx={{ color: "black" }}>
            {talle}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TalleSelect;
