import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
        getCategoriesFromLocalStorage: (state) => {
            let categories = localStorage.getItem('categories');
            if(categories){
                categories = JSON.parse(localStorage.getItem('categories'))
            }else{
                categories = [
                    { id: 1, label: 'Salary'},
                    { id: 2, label: 'Food'},
                    { id: 3, label: 'Going out'},
                    { id: 4, label: 'Traveling'},
                    { id: 5, label: 'Rent'},
                ]
                console.log('FROM AAPPP')
            }

            state.value = categories;
            localStorage.setItem('categories', JSON.stringify(state.value))
        },

        deleteCategory: (state, action) =>{
            let categories = state.value.filter(item => item.id !== action.payload)
            state.value = categories
            localStorage.setItem('categories', JSON.stringify(state.value))
        },

        addNewCategory: (state, action) =>{
            let categories = [action.payload, ...state.value]
            state.value = categories;
            localStorage.setItem('categories', JSON.stringify(state.value))
        }
    }
})

export const { deleteCategory, getCategoriesFromLocalStorage, addNewCategory } = categorySlice.actions

export default categorySlice.reducer