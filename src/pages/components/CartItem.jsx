import { Stack, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import Trash from "../../assets/images/trash.png";
import style from "./CartItem.module.css";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [animated, setAnimated] = useState(false);
  const [disappear, setDisappear] = useState(false);
  const [className, setClassName] = useState("");

  useEffect(() => {
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (!item) setDisappear(true);
    setTimeout(() => {
      setDisappear(false);
    }, 500);
  }, [item]);

  useEffect(() => {
    if (animated) setClassName((prev) => prev + style.animated);
    else setClassName((prev) => prev.replace(style.animated, ""));
    if (disappear) setClassName((prev) => prev + style.disappear);
    else setClassName((prev) => prev.replace(style.disappear, ""));
  }, [animated, disappear]);

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      className={className}
    >
      <Stack minWidth={124}>
        <Stack
          width={"90px"}
          height={"90px"}
          borderRadius={"90px"}
          style={{ backgroundColor: item.color }}
          alignItems={"center"}
          className={style["image-bg"]}
        >
          <img
            src={item.image}
            style={{
              display: "block",
              width: "140%",
              transform: "rotate(-28deg) translateY(-30px) translateX(15px)",
              filter: "drop-shadow(0 30px 20px rgba(0,0,0,.2))",
            }}
            className={style.image}
          />
        </Stack>
      </Stack>
      <Stack flexGrow={1}>
        <Typography
          fontSize={14}
          fontWeight={700}
          lineHeight={1.5}
          style={{ marginBottom: 10 }}
          color={"#303841"}
          className={style.name}
        >
          {item.name}
        </Typography>
        <Typography
          fontSize={20}
          fontWeight={700}
          style={{ marginBottom: 16 }}
          color={"#303841"}
          className={style.price}
        >
          ${item.price.toFixed(2)}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={style.quantity}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <IconButton
              style={{ width: 28, height: 28, backgroundColor: "#eee" }}
              onClick={() => dispatch(cartActions.decrement(item.id))}
            >
              -
            </IconButton>
            <Typography
              style={{ width: 20 }}
              textAlign={"center"}
              color={"#303841"}
            >
              {item.quantity}
            </Typography>
            <IconButton
              style={{ width: 28, height: 28, backgroundColor: "#eee" }}
              onClick={() => dispatch(cartActions.increment(item.id))}
            >
              +
            </IconButton>
          </Stack>
          <Stack>
            <IconButton
              style={{ backgroundColor: "#f6c90e" }}
              onClick={() => dispatch(cartActions.removeFromCart(item.id))}
            >
              <img src={Trash} style={{ width: 16, height: 16 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CartItem;
