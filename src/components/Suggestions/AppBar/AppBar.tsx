import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import suggestionsIcon from "../../../assets/suggestions/icon-suggestions.svg";
import iconArrowDown from "../../../assets/shared/icon-arrow-down-white.svg";
import productsData from "../../../data/data.json";

const AppBar = () => {
  const products = productsData.productRequests;

  return (
    <Box
      sx={{
        height: "72px",
        bgcolor: "#373F68",
        color: "white",
        borderRadius: { md: 3, sm: 3, xs: 0 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "16px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            display: { md: "inline-block", sm: "inline-block", xs: "none" },
          }}
        >
          <img src={suggestionsIcon} alt="suggestions-icon" />
        </Box>
        <Box sx={{ display: { md: "flex", sm: "flex", xs: "none" }, gap: 1 }}>
          <Typography
            sx={{
              fontSize: { md: "18px", sm: "18px", xs: "13px" },
              fontWeight: "600",
            }}
          >
            {products.length}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "18px", sm: "18px", xs: "13px" },
              fontWeight: "600",
            }}
          >
            Suggestions
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              ml: { md: 1, sm: 1, xs: 0 },
            }}
          >
            Sort by:
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontSize: "14px", fontWeight: "700" }}
          >
            Most Upvotes
          </Typography>
          <img src={iconArrowDown} alt="icon-arrow-down" />
        </Box>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          textTransform: "capitalize",
          height: "44px",
          borderRadius: 3,
          fontSize: { md: "14px", sm: "14px", xs: "13px" },
        }}
      >
        {" "}
        + Add Feedback
      </Button>
    </Box>
  );
};

export default AppBar;
