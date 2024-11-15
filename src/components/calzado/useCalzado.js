import { useEffect, useState } from "react";

export function useCalzado(productID) {
  const [calzado, setCalzado] = useState(null);
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/calzados.json");
        if (!response.ok) {
          throw new Error("No se cargó correctamente el dataCalzados");
        }
        const data = await response.json();
        setCalzado(data);

        // Si se proporcionó un ID, buscar el producto
        if (productID) {
          const foundProduct = findProductByID(data, Number(productID));
          setProducto(foundProduct);
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, [productID]);

  function findProductByID(data, id) {
    for (const category in data) {
      const products = data[category];
      for (const productKey in products) {
        const product = products[productKey];
        if (product.id === id) {
          return product;
        }
      }
    }
    return null;
  }

  return { calzado, producto, loading, error };
}
