import { useState } from "react";
import bgZapas1 from "/images/bg-zapas-1.png";
import bgZapas2 from "/images/bg-zapas-2.png";
import bgZapas3 from "/images/bg-zapas-3.png";

export function useCarrusel() {
  const arrayCarrusel = [bgZapas1, bgZapas2, bgZapas3];
  const [carruselIndex, setCarruselIndex] = useState(0);
  const [manualInteraction, setManualInteraction] = useState(false);

  // Incrementar el índice
  function incrementarIndex() {
    setCarruselIndex((prevIndex) => {
      // Si llegamos al final, volvemos a 0
      const newIndex =
        prevIndex === arrayCarrusel.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  }

  // Decrementar el índice
  function decrementarIndex() {
    setCarruselIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
      return newIndex;
    });
  }

  return {
    arrayCarrusel,
    carruselIndex,
    incrementarIndex,
    decrementarIndex,
    manualInteraction,
    setManualInteraction,
  };
}
