import { createSlice } from '@reduxjs/toolkit';
import  { tours } from '../data';

const initialState =tours;

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    addPhoto:(state,action)=>{
      state.push(action.payload)
  },
  },
});
export const {addPhoto} = toursSlice.actions
export default toursSlice.reducer;
