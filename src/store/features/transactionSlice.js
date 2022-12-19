import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers:{
        getTransactionFromLocalStorage: (state) => {
            let transactions = localStorage.getItem('transactions');
            if(transactions){
                transactions = JSON.parse(localStorage.getItem('transactions'))
                state.value = transactions;
            }
        },

        editTransaction: (state, action) =>{
            let transaction = state.value.find(item => item.id === action.payload.id)
            // { id: 1, label: 'Payment', date: '23/09/2022', amount: 10600.00, category: 1},
            let test = state.value.map(item => {
                if(item.id === action.payload.id){
                    return {...item, label: action.payload.label, date: action.payload.date, amount: action.payload.amount, category: action.payload.category}
                }
                return item
            })
            // state.value = categories
            // localStorage.setItem('categories', JSON.stringify(state.value))
            console.log(test)
        },

        addNewTransaction: (state, action) =>{
            let transactions = [action.payload, ...state.value]
            state.value = transactions;
            localStorage.setItem('transactions', JSON.stringify(state.value))
        }
    }
})

export const { getTransactionFromLocalStorage, editTransaction, addNewTransaction } = transactionSlice.actions

export default transactionSlice.reducer