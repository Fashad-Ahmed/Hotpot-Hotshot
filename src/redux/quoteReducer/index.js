import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../API/config";
import { post } from "../../API";

const initialState = {};

export const createQuotation = createAsyncThunk(
  "quote/createQuotation",
  async (data) => {
    try {
      let response = await post(endpoints.quote.create, data, false);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
});

export const {} = quoteSlice.actions;

const quoteReducer = quoteSlice.reducer;

export default quoteReducer;
