import { FC } from "react";
import { CartItem } from "./CartItem/CartItem";
import { CartItemType } from "../App";
import { Wrapper } from "../App.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeCart: (id: number) => void;
};

export const Cart: FC<Props> = ({ cartItems, addToCart, removeCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeCart={removeCart}
        />
      ))}
      <h2>Total: {calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
