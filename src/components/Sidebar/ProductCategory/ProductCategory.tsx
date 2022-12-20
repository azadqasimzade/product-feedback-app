import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { getProductsByFilter } from "../../../features/productSlice";
import { RootState } from "../../../store";

const ProductCategory = () => {
  const dispatch = useDispatch();

  const { activeButton } = useSelector((state: RootState) => state.data);

  const handleClick = (catregoryName: string) => {
    dispatch(getProductsByFilter(catregoryName));
  };

  return (
    <Box
      sx={{
        zIndex: "1",
        mx: { md: "0", sm: "0", xs: "24px" },
        maxHeight: "220px",
      }}
    >
      <Card
        sx={{
          maxWidth: 350,
          minWidth: 200,
          height: "100%",
          position: "relative",
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: "24px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Button
              onClick={() => handleClick("ALL")}
              variant={activeButton === "ALL" ? "contained" : "outlined"}
              sx={{
                borderRadius: 3,
                fontSize: "13px",
                border: "none",
                bgcolor: `${activeButton === "ALL" ? "" : "#F2F4FF"}`,
                ":hover": { border: "none" },
              }}
            >
              All
            </Button>
            <Button
              onClick={() => handleClick("UI")}
              variant={activeButton === "UI" ? "contained" : "outlined"}
              sx={{
                borderRadius: 3,
                fontSize: "13px",
                border: "none",
                bgcolor: `${activeButton === "UI" ? "" : "#F2F4FF"}`,
                ":hover": { border: "none" },
              }}
            >
              UI
            </Button>
            <Button
              onClick={() => handleClick("UX")}
              variant={activeButton === "UX" ? "contained" : "outlined"}
              sx={{
                borderRadius: 3,
                fontSize: "13px",
                border: "none",
                bgcolor: `${activeButton === "UX" ? "" : "#F2F4FF"}`,
                ":hover": { border: "none" },
              }}
            >
              UX
            </Button>
            <Button
              onClick={() => handleClick("ENHANCEMENT")}
              variant={
                activeButton === "ENHANCEMENT" ? "contained" : "outlined"
              }
              sx={{
                borderRadius: 3,
                fontSize: "13px",
                border: "none",
                bgcolor: `${activeButton === "ENHANCEMENT" ? "" : "#F2F4FF"}`,
                ":hover": { border: "none" },
              }}
            >
              Enhancement
            </Button>
            <Button
              onClick={() => handleClick("BUG")}
              variant={activeButton === "BUG" ? "contained" : "outlined"}
              sx={{
                borderRadius: 3,
                fontSize: "13px",
                border: "none",
                bgcolor: `${activeButton === "BUG" ? "" : "#F2F4FF"}`,
                ":hover": { border: "none" },
              }}
            >
              Bug
            </Button>
            <Button
              onClick={() => handleClick("FEATURE")}
              variant={activeButton === "FEATURE" ? "contained" : "outlined"}
              sx={{
                borderRadius: 3,
                fontSize: "13px",
                border: "none",
                bgcolor: `${activeButton === "FEATURE" ? "" : "#F2F4FF"}`,
                ":hover": { border: "none" },
              }}
            >
              Feature
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCategory;
