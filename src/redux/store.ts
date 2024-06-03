import { configureStore } from '@reduxjs/toolkit';
import videoModalReducer from './features/videoModalSlice';
import contactModalReducer from './features/contactModalSlice';
import sidePanelReducer from './features/sidePanelSlice';
import searchModalReducer from './features/searchModalSlice';
import sidebarReducer from './features/sidebarSlice';

// Import other reducers

const store = configureStore({
  reducer: {
    videoModal: videoModalReducer,
    contactModal: contactModalReducer,
    sidePanel: sidePanelReducer,
    searchModal: searchModalReducer,
    sidebar: sidebarReducer,
    // Add other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
