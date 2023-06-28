import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import check from "../../assets/images/check.png";
import style from "./Shoe.module.css";

function Shoe({ shoe }) {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(shoe));
  };

  const cartItems = useSelector((state) => state.cart.cartItems);

  const checkAddedToCart = (id) => {
    return cartItems.findIndex((item) => item.id === id) > -1;
  };

  return (
    <Stack>
      <Stack
        justifyContent={"center"}
        height={380}
        borderRadius={"30px"}
        style={{ backgroundColor: shoe.color }}
      >
        <img
          src={shoe.image}
          alt={shoe.name}
          style={{
            display: "block",
            width: "100%",
            filter: "drop-shadow(0 30px 20px rgba(0,0,0,.2))",
            transform: "rotate(-24deg)",
            marginLeft: "-16px",
          }}
        />
      </Stack>
      <Stack>
        <Typography
          fontSize={20}
          fontWeight={700}
          margin={"26px 0 20px"}
          lineHeight={1.5}
          color={"#303841"}
        >
          {shoe.name}
        </Typography>
        <Stack marginBottom={"20px"}>
          <Typography fontSize={13} color={"#777"} lineHeight={1.8}>
            {shoe.description}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={18} fontWeight={700} color={"#303841"}>
            ${shoe.price.toFixed(2)}
          </Typography>
          <button
            variant="contained"
            className={style.addBtn}
            style={{
              borderRadius: "50px",
              fontSize: 14,
              fontWeight: 700,
              minWidth: 46,
              height: 46,
              padding: "16px 20px",
              transition: "all .5s ease",
              position: "relative",
              color: "#303841",
              border: "none",
              cursor: checkAddedToCart(shoe.id) ? "default" : "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={addToCartHandler}
            disabled={checkAddedToCart(shoe.id)}
          >
            {!checkAddedToCart(shoe.id) && <span>Add to cart</span>}
            {checkAddedToCart(shoe.id) && (
              <img
                src={check}
                style={{ width: 16, height: 16, position: "absolute" }}
              />
            )}
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Shoe;
