import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cursorStatus: "default",
};

export const cursorSlice = createSlice({
    name: "cursor",
    initialState,
    reducers: {
        enterDrag: (state) => {
            state.cursorStatus = "onDrag";
        },
        enterText: (state) => {
            state.cursorStatus = "onText";
        },
        onLink: (state) => {
            state.cursorStatus = "onLink";
        },
        textLeave: (state) => {
            state.cursorStatus = "default";
        },
    },
});

export const { enterText, onLink, enterDrag, textLeave } = cursorSlice.actions;

export default cursorSlice.reducer;
