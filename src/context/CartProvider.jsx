import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sincronizar cambios del carrito con localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, cant) => {
    // Buscar si el producto ya está en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      // Si el producto ya está, sumar la cantidad seleccionada
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].cantidad += cant;
      return setCart(newCart);
    }

    // Si el producto no está, agregar con la cantidad seleccionada
    setCart((prevCart) => [
      ...prevCart,
      {
        ...product,
        cantidad: cant,
      },
    ]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]); // Vaciar el carrito
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
