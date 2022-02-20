import { ReposActionsType, ReposType } from './eachUserRepos.data.types';
import { ReposTypes } from './eachUserReposTypes';

export const getReposRequest = (): ReposActionsType => ({
	type: ReposTypes.GET_REPOS_REQUEST,
})
export const getReposSuccess = (response: ReposType[]): ReposActionsType => ({
	type: ReposTypes.GET_REPOS_SUCCESS,
	payload: response
})
export const getReposFailure = (error: string): ReposActionsType => ({
	type: ReposTypes.GET_REPOS_FAILURE,
	payload: error
})
export const clearReposList = (): ReposActionsType => ({
	type: ReposTypes.CLEAR_REPOS_LIST
})