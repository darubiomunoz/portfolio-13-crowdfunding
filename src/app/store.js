import { configureStore } from '@reduxjs/toolkit';

import dataReducer from '../features/data/dataSlice';
import modalsReducer from '../features/modals/modalSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    modals: modalsReducer
  },
});
