// WishlistContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the wishlist context
const WishlistContext = createContext();

// Create a provider component for the wishlist context
export const WishlistProvider = ({ children }) => {
  // State to store the wishlist items
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add item to wishlist
  const addToWishlist = (item) => {
    // Check if the item is already in the wishlist   
    setWishlistItems([...wishlistItems, item]);
  };

  // Remove item from wishlist
  const removeFromWishlist = (itemId) => {    
    const updatedWishlist = wishlistItems.filter((item) => item.ID !== itemId);
    console.log(updatedWishlist)
    setWishlistItems(updatedWishlist);
  };

  // Check if item is in the wishlist
  const isInWishlist = (itemId) => {
    return wishlistItems.findIndex(item => item.ID === itemId) === -1 ? false : true;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to consume the wishlist context
export const useWishlist = () => useContext(WishlistContext);
