import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store.ts';
import { AppDetails } from "@/types/appDetails.ts";
import { fetchAppDetails } from "@/store/appDetails/api.ts";

interface AppDetailsState {
    appDetails: AppDetails | null;
}

const initialState: AppDetailsState = {
    appDetails: null,
};

export const fetchAppDetailsThunk = createAsyncThunk<AppDetails, void, { rejectValue: string }>(
    'appDetails/fetchAppDetails',
    async (_, { rejectWithValue }): Promise<AppDetails> => {
        try {
            return await fetchAppDetails();
        } catch (error) {
            return rejectWithValue(`Failed to fetch users: ${error}`);
        }
    }
);

const appDetailsSlice = createSlice({
    name: 'appDetails',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAppDetailsThunk.fulfilled, (state, action: PayloadAction<AppDetails>) => {
                state.appDetails = action.payload;
            })
    }
});


export const getAppDetails = (state: RootState) => state.appDetails;

export default appDetailsSlice.reducer;