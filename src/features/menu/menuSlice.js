import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	menuList: [],
};

export const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		addMenu: (state, action) => {
			state.menuList = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addMenu } = menuSlice.actions;

export default menuSlice.reducer;
