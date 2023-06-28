import React from "react";
import { Stack } from "@mui/material";
import Shoe from "./Shoe";
import style from "./ShoeList.module.css";

function ShoeList({ shoes }) {
  return (
    <Stack
      className={style["shoe-list"]}
      spacing={"80px"}
      style={{ height: "512px", overflowY: "scroll" }}
    >
      {shoes.map((shoe) => (
        <Shoe key={shoe.id} shoe={shoe} />
      ))}
    </Stack>
  );
}

export default ShoeList;
