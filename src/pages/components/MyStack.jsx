import { Stack } from "@mui/material";
import React from "react";

function MyStack({ children }) {
  return (
    <Stack
      height={600}
      width={360}
      borderRadius={"30px"}
      overflow={"hidden"}
      position={"relative"}
      boxShadow={1}
      style={{ backgroundColor: "white" }}
    >
      <Stack
        borderRadius={"50%"}
        width={300}
        height={300}
        style={{ backgroundColor: "#f6c90e" }}
        position={"absolute"}
        top={"-20%"}
        left={"-50%"}
      ></Stack>
      <Stack padding={"0 28px"} zIndex={10}>
        {children}
      </Stack>
    </Stack>
  );
}

export default MyStack;
