import { createSlice } from '@reduxjs/toolkit';

interface VideoModalState {
  isOpen: boolean;
}

const initialState: VideoModalState = {
  isOpen: false,
};

const videoModalSlice = createSlice({
  name: 'videoModal',
  initialState,
  reducers: {
    toggleVideoModalOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleVideoModalOpen } = videoModalSlice.actions;
export default videoModalSlice.reducer;
