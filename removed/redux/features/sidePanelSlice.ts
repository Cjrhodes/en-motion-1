import { createSlice } from '@reduxjs/toolkit';

interface SidePanelState {
  isOpen: boolean;
}

const initialState: SidePanelState = {
  isOpen: false,
};

const sidePanelSlice = createSlice({
  name: 'sidePanel',
  initialState,
  reducers: {
    toggleSidePanelOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidePanelOpen } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;
