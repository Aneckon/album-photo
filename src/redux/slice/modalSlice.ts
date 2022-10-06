import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalDate: null,
  },
  reducers: {
    setModal: (state: any, action: any) => {
      state.modalDate = action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
