import { useEffect, useState } from "react";

export function useCalzado() {
  const [calzado, setCalzado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/calzados.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se cargó correctamente el dataCalzados");
        }
        return response.json();
      })
      .then((data) => {
        setCalzado(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { calzado, loading, error };
}
