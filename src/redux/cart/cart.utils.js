export const addItemToCart = (currentCartItems, cartItemToAdd) => {
  //looks through the currentCartItems array of objects to find an instance where cart ids match. If no match, returns undefined
  const exisitngCartItem = currentCartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if there is an existing cart item, create a new array of objects. Where a cartItems id === the items to add's id, add 1 to quantity. Where a cartItems id !== the items to add's id, create a quantity and add 1 to it.
  if (exisitngCartItem) {
    return currentCartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...currentCartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const exisitngCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (exisitngCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
