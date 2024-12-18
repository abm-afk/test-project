// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './appsInventory/slices.ts';
import appDetailsReducer from './appDetails/slices.ts';

export const store = configureStore({
    reducer: {
        appsInventory: userReducer,
        appDetails: appDetailsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;