import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/menu/menuSlice";
import categoryReducer from "./features/category/categorySlice";

export const store = configureStore({
	reducer: {
		menuList: menuReducer,
		category: categoryReducer,
	},
});
