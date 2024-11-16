import { useEffect, useState } from "react";

export function useCalzado({ productID = null, busqueda = "" } = {}) {
  const [calzado, setCalzado] = useState(null);
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  function filterBySearch(data, searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = {};

    for (const category in data) {
      const products = data[category];
      const filteredProducts = Object.fromEntries(
        Object.entries(products).filter(([, product]) =>
          product.titulo.toLowerCase().includes(lowerCaseSearchTerm)
        )
      );

      if (Object.keys(filteredProducts).length > 0) {
        filteredData[category] = filteredProducts;
      }
    }

    return filteredData;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/calzados.json");
        if (!response.ok) {
          throw new Error("No se cargó correctamente el dataCalzados");
        }
        const data = await response.json();

        // Si se proporcionó una búsqueda, filtrar por títulos
        if (busqueda) {
          const filteredData = filterBySearch(data, busqueda);
          setCalzado(filteredData);
        } else {
          setCalzado(data);
        }

        // Si se proporcionó un ID, buscar el producto específico
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
  }, [productID, busqueda]);

  return { calzado, producto, loading, error };
}
