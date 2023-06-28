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
      boxShadow={
        "0 3.2px 2.2px rgba(0,0,0,.02), 0 7px 5.4px rgba(0,0,0,.028), 0 12.1px 10.1px rgba(0,0,0,.035), 0 19.8px 18.1px rgba(0,0,0,.042), 0 34.7px 33.8px rgba(0,0,0,.05), 0 81px 81px rgba(0,0,0,.07)"
      }
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
