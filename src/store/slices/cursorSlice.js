import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cursorStatus: "default",
};

export const cursorSlice = createSlice({
    name: "cursor",
    initialState,
    reducers: {
        enter3D: (state) => {
            state.cursorStatus = "on3D";
        },
        textEnterSalem: (state) => {
            state.cursorStatus = "onTextSalem";
        },
        textEnterName: (state) => {
            state.cursorStatus = "onTextName";
        },
        textLeave: (state) => {
            state.cursorStatus = "default";
        },
    },
});

export const { textEnterSalem, textEnterName, enter3D, textLeave } =
    cursorSlice.actions;

export default cursorSlice.reducer;
