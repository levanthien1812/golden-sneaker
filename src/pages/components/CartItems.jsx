import { Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./CartItems.module.css";
import CartItem from "./CartItem";

function CartItems() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Stack>
      {cartItems.length === 0 && (
        <Typography fontSize={14}>Your cart is empty</Typography>
      )}
      {cartItems.length > 0 && (
        <Stack
          spacing={"40px"}
          style={{ height: "512px", overflowY: "scroll" }}
          className={style["cart-items"]}
        >
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id}/>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default CartItems;
