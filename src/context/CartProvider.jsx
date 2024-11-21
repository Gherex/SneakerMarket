import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, cant) => {
    // Buscar si el producto ya está en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      // Si el producto ya está, sumar la cantidad seleccionada
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].cantidad += cant;
      return setCart(newCart);
    }

    // Si el producto no está, agregarlo con la cantidad inicial
    setCart((prevCart) => [
      ...prevCart,
      {
        ...product,
        cantidad: cant, // Agregar con la cantidad seleccionada
      },
    ]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
