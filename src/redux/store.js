import { configureStore } from '@reduxjs/toolkit';
import toursReducer from './toursSlice';
import destinationReducer from './destSlice'
import { combineReducers } from 'redux';

export const store = configureStore({
    reducer: {destination:destinationReducer,tours:toursReducer},
  })