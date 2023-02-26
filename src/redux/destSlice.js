import { createSlice } from '@reduxjs/toolkit';
import data from '../data';

const initialState = data;

export const destSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {

  },
});
export default destSlice.reducer;
