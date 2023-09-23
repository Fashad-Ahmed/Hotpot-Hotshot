import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { succesToast, errorToast } from "../../utils/toast";
import { useNavigate } from "react-router-dom";
import { createQuotation } from "../../redux/quoteReducer";

export const useCreateQuote = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const createQuoteFunc = useCallback(
    async (data) => {
      try {
        const response = await dispatch(createQuotation(data));
        if (response.type === "quote/createQuotation/fulfilled") {
          succesToast(response?.payload?.message);
          navigation("/");
        }
        if (response.type === "quote/createQuotation/rejected") {
          console.log(JSON.stringify(response));
          errorToast("Failed to generate quote");
        }
      } catch (error) {
        console.log("An error occurred");
      }
    },
    [dispatch, navigation]
  );

  return [createQuoteFunc];
};
