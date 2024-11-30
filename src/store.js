import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './features/settings/settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

export default store;
