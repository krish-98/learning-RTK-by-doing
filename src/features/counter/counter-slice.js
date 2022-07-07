import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    reset: (state) => {
      state.value = 0
    },

    amountAdded: (state, action) => {
      state.value = state.value + action.payload
    },
  },
})

export const { increment, decrement, reset, amountAdded } = counterSlice.actions

export default counterSlice.reducer
