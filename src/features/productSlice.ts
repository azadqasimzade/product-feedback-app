import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";
import productData from "../data/data.json";

export interface ProductState {
  products: Product[];
  activeButton: string;
  clickedUsers: string[];
}

const initialState: ProductState = {
  products: productData.productRequests,
  activeButton: "ALL",
  clickedUsers: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductsByFilter: (state, action) => {
      if (action.payload === "ALL") {
        state.products = productData.productRequests;
        state.activeButton = action.payload;
      }
      if (action.payload === "UI") {
        state.products = productData.productRequests;
        state.activeButton = action.payload;
        state.products = state.products.filter(
          (item) => item.category === "ui"
        );
      }
      if (action.payload === "UX") {
        state.products = productData.productRequests;
        state.activeButton = action.payload;
        state.products = state.products.filter(
          (item) => item.category === "ux"
        );
      }
      if (action.payload === "ENHANCEMENT") {
        state.products = productData.productRequests;
        state.activeButton = action.payload;
        state.products = state.products.filter(
          (item) => item.category === "enhancement"
        );
      }
      if (action.payload === "BUG") {
        state.products = productData.productRequests;
        state.activeButton = action.payload;
        state.products = state.products.filter(
          (item) => item.category === "bug"
        );
      }
      if (action.payload === "FEATURE") {
        state.products = productData.productRequests;
        state.activeButton = action.payload;
        state.products = state.products.filter(
          (item) => item.category === "feature"
        );
      }
    },
    getUser: (state, action) => {
      const updatedProducts = state.products;

      updatedProducts.map((product) => {
        if (product.id === action.payload.id && !product.isUpvoted) {
          state.clickedUsers.push(action.payload.user);
          product.upvotes = product.upvotes + 1;
          product.isUpvoted = true;
          return product;
        }
        return product;
      });
      state.products = updatedProducts;
    },
  },
});

export const { getProducts, getProductsByFilter, getUser } =
  productSlice.actions;

export default productSlice.reducer;
