import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Suggestions from "./components/Suggestions";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { getProducts } from "./features/productSlice";
import productsData from "./data/data.json";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(productsData.productRequests));
  }, [dispatch]);

  return (
    <Grid container spacing={2} sx={{ p: { md: 1, sm: 1, xs: 0 } }}>
      <Sidebar />
      <Suggestions />
    </Grid>
  );
}

export default App;
