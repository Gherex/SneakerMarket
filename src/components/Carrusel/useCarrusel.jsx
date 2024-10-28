import { useState } from "react";
import bgZapas1 from "/src/images/bg-zapas-1.png";
import bgZapas2 from "/src/images/bg-zapas-2.png";
import bgZapas3 from "/src/images/bg-zapas-3.png";

export function useCarrusel() {
  const arrayCarrusel = [bgZapas1, bgZapas2, bgZapas3];
  const [carruselIndex, setCarruselIndex] = useState(0);

  function incrementarIndex() {
    setCarruselIndex((prevIndex) => {
      const newIndex =
        prevIndex < arrayCarrusel.length - 1 ? prevIndex + 1 : prevIndex;
      return newIndex;
    });
  }

  function decrementarIndex() {
    setCarruselIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
      return newIndex;
    });
  }

  return { arrayCarrusel, carruselIndex, incrementarIndex, decrementarIndex };
}
