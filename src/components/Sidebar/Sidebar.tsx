import React, { useState, useEffect } from "react";
import FeedbackBoard from "./FeedbackBoard";
import ProductCategory from "./ProductCategory";
import ProductRoadmap from "./ProductRoadmap";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    if (!open) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <Grid item xs={12} sm={12} md={3}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          bgcolor: "black",
          opacity: "70%",
          display: {
            md: "none",
            sm: "none",
            xs: `${open ? "none" : "inherit"}`,
          },
          zIndex:"99"
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "column", sm: "inherit", xs: "column" },
        }}
      >
        <FeedbackBoard open={open} setOpen={setOpen} />
        <Box
          sx={{
            display: {
              md: "flex",
              sm: "flex",
              xs: `${open ? "none" : "flex"}`,
            },
            flexDirection: { md: "column", sm: "inherit", xs: "column" },
            gap: 2,
            height: `${open ? "100%" : "100vh"}`,
            bgcolor: `${open ? "none" : "white"}`,
            pt: { md: 2, sm: 0, xs: 2 },
            position: { md: "inherit", sm: "inherit", xs: "absolute" },
            right: "0",
            top: "72px",
            transition: "ease-in-out",
            transitionDuration: "300",
            zIndex: "99",
          }}
        >
          <ProductCategory />
          <ProductRoadmap/>
        </Box>
      </Box>
    </Grid>
  );
};

export default Sidebar;
