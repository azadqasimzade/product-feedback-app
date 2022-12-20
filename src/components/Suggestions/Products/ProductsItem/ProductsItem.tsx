import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import iconArrowUp from "../../../../assets/shared/icon-arrow-up.svg";
import iconComments from "../../../../assets/shared/icon-comments.svg";
import { Product } from "../../../../types/types";
import userData from "../../../../data/data.json";
import { getUser } from "../../../../features/productSlice";

interface ProductProps {
  key: number;
  item: Product;
  user: string[];
}

const ProductsItem = (props: ProductProps) => {
  const user = userData.currentUser.username;
  const dispatch = useDispatch();

  const handleClick = (user: string, id: number) => {
    dispatch(
      getUser({
        user,
        id,
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "initial", sm: "initial", xs: "column" },
        justifyContent: "space-between",
        mt: 2,
        bgcolor: "white",
        borderRadius: 3,
        px: { md: "32px", sm: "32px", xs: "25px" },
        py: { md: "28px", sm: "28px", xs: "24px" },
        mx: { md: 0, sm: 0, xs: "24px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "initial", sm: "initial", xs: "column-reverse" },
          gap: { md: 4, sm: 4, xs: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => handleClick(user, props.item.id)}
            variant="contained"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "40px",
              height: "63px",
              gap: 1.5,
              bgcolor: "#F2F2F2",
              ":hover": { bgcolor: "#F2F2F2" },
              borderRadius: 3,
            }}
            disabled={props.item.isUpvoted}
          >
            <img src={iconArrowUp} alt="icon-arrow-up" />
            <Typography
              variant="caption"
              sx={{ color: "#3A4374", fontWeight: "700" }}
            >
              {props.item.upvotes}
            </Typography>
          </Button>
          <Box
            sx={{
              display: { md: "none", sm: "none", xs: "flex" },
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            {props.item.comments ? (
              <>
                <Box>
                  <img src={iconComments} alt="icon-comments" />
                </Box>
                <Typography
                  variant="caption"
                  sx={{ fontSize: "16px", fontWeight: "700", color: "#3A4374" }}
                >
                  {props.item.comments?.length}
                </Typography>
              </>
            ) : null}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#3A4374" }}
          >
            {props.item.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#647196",
              mb: "12px",
            }}
          >
            {props.item.description}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#4661E6",
              fontSize: "13px",
              fontWeight: "600",
              bgcolor: "#F2F4FF",
              px: "16px",
              py: "6px",
              borderRadius: 3,
            }}
          >
            {props.item.category}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "flex", sm: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 1,
        }}
      >
        {props.item.comments ? (
          <>
            <Box>
              <img src={iconComments} alt="icon-comments" />
            </Box>
            <Typography
              variant="caption"
              sx={{ fontSize: "16px", fontWeight: "700", color: "#3A4374" }}
            >
              {props.item.comments?.length}
            </Typography>
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default ProductsItem;
