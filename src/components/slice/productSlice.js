import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state , action) => {
        console.log(action.payload);

    //   state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment} = productSlice.actions

export default productSlice.reducer