import { reposReducer } from './eachUserRepos/eachUserReposReducer';
import { eachUserReducer } from './eachUser/eachUserReducer';
import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './users/usersReducer'

export const store = configureStore({
	reducer: {
		usersList: usersReducer,
		listWithEachUserData: eachUserReducer,
		reposList: reposReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch