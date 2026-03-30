import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
      const navigate = useNavigate();
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId, size, color) => {

  let cartData = structuredClone(cartItems);

  if (cartData[itemId]) {

    if (cartData[itemId][size]) {

      if (cartData[itemId][size][color]) {
        cartData[itemId][size][color] += 1;
      } else {
        cartData[itemId][size][color] = 1;
      }

    } else {
      cartData[itemId][size] = { [color]: 1 };
    }

  } else {
    cartData[itemId] = {
      [size]: {
        [color]: 1
      }
    };
  }

  setCartItems(cartData);
  toast.success("Added to Cart");
  console.log(cartData);
};

const updateCart = (id, size, color, qty) => {

    let cartData = structuredClone(cartItems);

    cartData[id][size][color] = qty;

    setCartItems(cartData);
  };

   const removeItem = (id, size, color) => {

    let cartData = structuredClone(cartItems);

    delete cartData[id][size][color];

    setCartItems(cartData);
  };

const getCartCount = () => {

  let totalCount = 0;

  for (const itemId in cartItems) {

    const sizes = cartItems[itemId];

    for (const size in sizes) {

      const colors = sizes[size];

      for (const color in colors) {

        totalCount += colors[color];

      }

    }

  }

  return totalCount;
};
  return (
    <AppContext.Provider value={{ cartItems, setCartItems, addToCart, getCartCount, navigate, updateCart, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
