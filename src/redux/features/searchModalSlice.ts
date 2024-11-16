import { createSlice } from '@reduxjs/toolkit';

interface SearchModalState {
  isOpen: boolean;
}

const initialState: SearchModalState = {
  isOpen: false,
};

const searchModalSlice = createSlice({
  name: 'searchModal',
  initialState,
  reducers: {
    toggleSearchModalOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSearchModalOpen } = searchModalSlice.actions;
export default searchModalSlice.reducer;
