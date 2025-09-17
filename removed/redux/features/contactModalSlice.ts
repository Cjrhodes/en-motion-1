// redux/features/contactModalSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface ContactModalState {
  isOpen: boolean;
  selectedPackage: string | null;
}

const initialState: ContactModalState = {
  isOpen: false,
  selectedPackage: null,
};

const contactModalSlice = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    toggleContactModalOpen: (state, action) => {
      console.log('Redux action payload for toggleContactModalOpen:', action.payload);
      state.isOpen = !state.isOpen;
      state.selectedPackage = action.payload || null;
    },
  },
});

export const { toggleContactModalOpen } = contactModalSlice.actions;
export default contactModalSlice.reducer;