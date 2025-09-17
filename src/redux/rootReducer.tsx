// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import contactModalReducer from './features/contactModalSlice';

const rootReducer = combineReducers({
  contactModal: contactModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;