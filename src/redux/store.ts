import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalSlice';
import favoriteReducer from './slice/faviroteSlice';

export const store = configureStore({
  reducer: {
    modalReducer,
    favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
