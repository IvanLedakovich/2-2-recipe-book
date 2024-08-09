import { configureStore } from '@reduxjs/toolkit';
import {
	recipesCountReducer,
	recipesLoadedReducer,
	recipesReducer,
	showMoreButtonReducer
} from './recipes/reducer';

export const makeStore = () => {
	return configureStore({
		reducer: {
			recipes: recipesReducer,
			recipesCount: recipesCountReducer,
			showMoreButton: showMoreButtonReducer,
			recipesLoaded: recipesLoadedReducer
		}
	});
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

//REACT APPROACH FOR REFERENCE

// const store = configureStore({
// 	reducer: {
// 		recipes: recipesReducer,
// 		recipesCount: recipesCountReducer,
// 		showMoreButton: showMoreButtonReducer,
// 		recipesLoaded: recipesLoadedReducer
// 	}
// });

// export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
