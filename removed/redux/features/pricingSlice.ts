// redux/features/pricingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PricingState {
  selectedPlan: string | null;
}

const initialState: PricingState = {
  selectedPlan: null,
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setSelectedPlan(state, action: PayloadAction<string>) {
      state.selectedPlan = action.payload;
    },
    clearSelectedPlan(state) {
      state.selectedPlan = null;
    },
  },
});

export const { setSelectedPlan, clearSelectedPlan } = pricingSlice.actions;
export default pricingSlice.reducer;