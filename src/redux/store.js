import { configureStore } from '@reduxjs/toolkit';
import toursReducer from './toursSlice';
import destinationReducer from './destSlice'

export const store = configureStore({
    reducer: {destination:destinationReducer,tours:toursReducer},
  })