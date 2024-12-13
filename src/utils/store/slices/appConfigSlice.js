import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState: {
        lang: 'en'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { setLanguage } =appConfigSlice.actions;

export default appConfigSlice.reducer;