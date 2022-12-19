import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modalSlice'
import categoryReducer from './features/categorySlice'
import transactionSlice from "./features/transactionSlice";

export const store = configureStore({
    reducer:{
        modal: modalReducer,
        categories: categoryReducer,
        transactions: transactionSlice
    }
})