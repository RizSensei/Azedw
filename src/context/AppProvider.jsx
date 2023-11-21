import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [wishlistItemsCount, setWishlistItemsCount] = useState(0);

  const handleAddToWishlist = (product) => {
    let item = wishlistItems.find((item) => item.id === product.id);
    if (item) {
      return toast.error("This product has already been added");
    }
    setWishlistItems((wishlistItems) => [
      ...wishlistItems,
      { ...product, inWishlist: true },
    ]);
    return toast.success("Product added to Wislist");
  };

  const handleAddToCart = (product) => {
    // console.log("button clicked")
    let item = cartItems.find((item) => item.id === product.id);
    if (item) {
      setCartItems((cartItems) =>
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((cartItems) => [...cartItems, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    const wishlistItemsCount = wishlistItems.length;
    setWishlistItemsCount(wishlistItemsCount);
  }, [wishlistItems]);

  useEffect(() => {
    const cartItemsCount = cartItems.length;
    setCartItemsCount(cartItemsCount);
  }, [cartItems]);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        setCartItemsCount,
        handleAddToCart,
        cartItemsCount,
        wishlistItems,
        setWishlistItems,
        handleAddToWishlist,
        wishlistItemsCount,
        setWishlistItemsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
