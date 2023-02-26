import { createSlice } from '@reduxjs/toolkit';
import  { tours } from '../data';

const initialState =tours;

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {

  },
});
export default toursSlice.reducer;
