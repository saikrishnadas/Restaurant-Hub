import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedCategory: { id: "", name: "" },
};

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		changeSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
