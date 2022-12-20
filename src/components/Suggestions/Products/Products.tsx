import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import ProductsItem from "./ProductsItem";
import { RootState } from "../../../store";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
  const [animationParent] = useAutoAnimate()

  const { products, clickedUsers } = useSelector((state: RootState) => state.data);

  return (
    <Box ref={animationParent}>
      {products.length > 0 ? (
        products?.map((item) => <ProductsItem key={item.id} item={item} user={clickedUsers}/>)
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Products;
