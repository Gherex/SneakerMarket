import { useState } from "react";
import { BusquedaContext } from "./BusquedaContext";

export function BusquedaProvider({ children }) {
  const [busqueda, setBusqueda] = useState("");

  return (
    <BusquedaContext.Provider value={{ busqueda, setBusqueda }}>
      {children}
    </BusquedaContext.Provider>
  );
}
