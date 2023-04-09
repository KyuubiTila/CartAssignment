export const getTotalFromCart = (cartlist) => {
  return cartlist.reduce((acc, current) => acc + current.price, 0);
};
