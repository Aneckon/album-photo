import { createSlice } from '@reduxjs/toolkit';

const faviroteSlice = createSlice({
  name: 'favirote',
  initialState: {
    faviroteDate: [],
  },
  reducers: {
    setfavirote: (state: any, action: any) => {
      state.faviroteDate.push(action.payload);
    },
    removeFavirote: (state: any, action: any) => {
      state.faviroteDate = state.faviroteDate.filter((item: any) => item.id !== action.payload);
    },
  },
});

export const { setfavirote, removeFavirote } = faviroteSlice.actions;
export default faviroteSlice.reducer;
