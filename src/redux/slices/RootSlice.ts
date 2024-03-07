import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        year: "Year",
        model: "Model",
        features: "Features",
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseYear: (state, action) => { state.year= action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseFeatures: (state, action) => { state.features = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseYear, chooseModel, chooseFeatures} = rootSlice.actions