import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store.ts';
import { AppsInventory } from "@/types/appsInventory.ts";
import { fetchAppsInventory } from "@/store/appsInventory/api.ts";

interface AppsInventoryState {
    appsInventory: AppsInventory[];
}

const initialState: AppsInventoryState = {
    appsInventory: [],
};

export const fetchAppsInventoryThunk = createAsyncThunk<AppsInventory[], void, { rejectValue: string }>(
    'appsInventory/fetchAppsInventory',
    async (_, { rejectWithValue }): Promise<AppsInventory[]> => {
        try {
            return await fetchAppsInventory();
        } catch (error) {
            return rejectWithValue(`Failed to fetch users: ${error}`);
        }
    }
);

const appsInventorySlice = createSlice({
    name: 'appDetails',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAppsInventoryThunk.fulfilled, (state, action: PayloadAction<AppsInventory[]>) => {
                state.appsInventory = action.payload;
            })
    }
});


export const getAppsInventory = (state: RootState) => state.appsInventory;

export default appsInventorySlice.reducer;