import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    editItem: undefined
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

            let updated = state.value.map(item => {
                if(item.id == action.payload.id){
                    return {...item, label: action.payload.label, date: action.payload.date, amount: action.payload.amount, category: action.payload.category}
                }
                return item
            })
         
            state.value = updated
            localStorage.setItem('transactions', JSON.stringify(state.value))
            console.log(updated)
           
        },

        editQueue: (state, action) =>{
            let transaction = state.value.find(item => item.id === action.payload)
            console.log(transaction)
            // transaction.date = new Date(transaction.date)
            state.editItem = transaction
            
        },

        clearEditQueue:(state) => {
            state.editItem = undefined
        },

        addNewTransaction: (state, action) =>{
            let transactions = [action.payload, ...state.value]
            state.value = transactions;
            localStorage.setItem('transactions', JSON.stringify(state.value))
        }
    }
})

export const { getTransactionFromLocalStorage, editTransaction, addNewTransaction, editQueue, clearEditQueue } = transactionSlice.actions

export default transactionSlice.reducer