import styled from "@emotion/styled";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MyStack from "../components/MyStack";
import nike from "../../assets/images/nike.png";
import sampleData from "../../sampleData/shoes.json";
import Shoe from "../components/Shoe";
import ShoeList from "../components/ShoeList";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";
import style from "./ShoppingCart.module.css";

function ShoppingCart() {
  const { shoes } = sampleData;
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <Stack
      minHeight={"100vh"}
      width={"100%"}
      overflow={"hidden"}
      justifyContent={"center"}
    >
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        marginY={2}
      >
        <Grid
          container
          justifyItems={"center"}
          columnGap={5}
          rowGap={5}
          justifyContent={"center"}
        >
          <Grid item>
            {/* Our products */}
            <MyStack>
              <Stack marginTop={"12px"} position={"sticky"} top={0}>
                <img src={nike} alt="nike-logo" style={{ width: 50 }} />
                <Stack marginY={"16px"}>
                  <Typography fontSize={24} fontWeight={700} color={"#303841"}>
                    Our Products
                  </Typography>
                </Stack>
              </Stack>
              <Stack flexGrow={1}>
                <ShoeList shoes={shoes} />
              </Stack>
            </MyStack>
          </Grid>
          <Grid item>
            {/* Your cart */}
            <MyStack>
              <Stack marginTop={"12px"}>
                <img src={nike} alt="nike-logo" style={{ width: 50 }} />
                <Stack
                  marginY={"16px"}
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Typography fontSize={24} fontWeight={700} color={"#303841"}>
                    Your cart
                  </Typography>
                  <Typography fontSize={24} fontWeight={700} color={"#303841"}>
                    ${totalPrice.toFixed(2)}
                  </Typography>
                </Stack>
              </Stack>
              <CartItems />
            </MyStack>
          </Grid>
        </Grid>

        <Stack
          position={"absolute"}
          width={"250%"}
          height={800}
          zIndex={-10}
          borderRadius={"50%"}
          top={"50%"}
          left={""}
          style={{
            backgroundColor: "#f6c90e",
            transform: "rotate(-10deg)",
          }}
          className={style.oval}
        ></Stack>
      </Stack>
    </Stack>
  );
}

export default ShoppingCart;
