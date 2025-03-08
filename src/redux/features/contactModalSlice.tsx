import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    toggleContactModalOpen: (state, action: PayloadAction<string | null>) => {
      console.log('Redux action payload for toggleContactModalOpen:', action.payload);
      console.log('Current state before update:', JSON.stringify(state));
      state.isOpen = !state.isOpen;
      state.selectedPackage = action.payload || null;
      console.log('New state after update:', JSON.stringify(state));
    },
  },
});

export const { toggleContactModalOpen } = contactModalSlice.actions;
export default contactModalSlice.reducer;
