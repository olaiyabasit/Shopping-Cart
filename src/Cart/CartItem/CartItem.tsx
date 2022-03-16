import { Button } from "@mui/material";
import { FC } from "react";
import { CartItemType } from "../../App";
import { Wrapper } from "./styles";

type Props = {
  item: CartItemType;
  addToCart: (item: CartItemType) => void;
  removeCart: (id: number) => void;
};

export const CartItem: FC<Props> = ({ item, addToCart, removeCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>

        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="outlined"
            onClick={() => removeCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="outlined"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};
