import React from "react";
import { Grid } from "@mui/material";
import Products from "./Products";
import AppBar from "./AppBar";

const Suggestions = () => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={9}
      sx={{ pt: { md: "16px!important", sm: "16px!important", xs: "0!important" } }}
    >
      <AppBar />
      <Products />
    </Grid>
  );
};

export default Suggestions;
