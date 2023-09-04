import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        value: {
            user: "",
            updatedAt: "",
            total: 0,
            items: []
        }
    },
    reducers: {
        addCartItem: (state, action) => {
            //Logica para añadir item
            //1. Checkeamos si el item existe
            const productExists = state.value.items.some(item => item.id === action.payload.id)

            //2. Logica distinta si existe producto o no.
            if (productExists) {
                state.value.items = state.value.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.value.items.push(action.payload)

            //3. Suma total del carrito
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            )

        },
        removeCartItem: (state,action) => {
            let newItems = state.value.items.filter(item => item.id != action.payload)
            state.value.items = [...newItems]
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            )
        }
    }
})

export const {addCartItem, removeCartItem} = cartSlice.actions

export default cartSlice.reducer